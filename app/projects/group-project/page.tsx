import { Metadata } from "next";
import { projectQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "next-sanity";

import Project from "@/components/project";

export const metadata: Metadata = {
  title: "Group project",
};

export default async function GroupProject() {
  const slug = "group-project";
  const project = await sanityFetch<SanityDocument>({
    query: projectQuery,
    params: { slug },
  });
  return <Project project={project} />;
}
