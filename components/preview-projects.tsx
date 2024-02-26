"use client";

import { projectsQuery } from "@/sanity/lib/queries";
import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";

import Projects from "./projects";

export default function PreviewProjects({
  projects = [],
}: {
  projects: SanityDocument[];
}) {
  const [data] = useLiveQuery(projects, projectsQuery);

  return <Projects projects={data} />;
}
