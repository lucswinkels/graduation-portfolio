import * as React from "react";
import { client } from "@/sanity/lib/client";
import { projectPathsQuery, projectQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "next-sanity";

import Project from "@/components/project";

import NotFoundPage from "../../not-found";

interface Params {
  slug: string;
}

export async function generateMetadata({ params }: { params: Params }) {
  const project = await sanityFetch<SanityDocument>({
    query: projectQuery,
    params,
  });
  return {
    title: project?.title ? project.title : "Page not found",
  };
}

export async function generateStaticParams() {
  const projects = await client.fetch(projectPathsQuery);
  return projects;
}

export default async function Page({ params }: { params: Params }) {
  const project = await sanityFetch<SanityDocument>({
    query: projectQuery,
    params,
  });
  if (project) {
    return <Project project={project} />;
  } else {
    return <NotFoundPage />;
  }
}
