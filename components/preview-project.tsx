"use client";

import { useParams } from "next/navigation";
import { projectQuery } from "@/sanity/lib/queries";
import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";

import Project from "./project";

export default function PreviewProject({
  project,
}: {
  project: SanityDocument;
}) {
  const params = useParams();
  const [data] = useLiveQuery(project, projectQuery, params);

  return <Project project={data} />;
}
