"use client";

import * as React from "react";
import { SanityDocument } from "@sanity/client";

import { cn } from "@/lib/utils";

import { ProjectPreviewCard } from "./project-preview-card";

export default function Projects({
  projects = [],
  className,
}: {
  projects: SanityDocument[];
  className?: string;
}) {
  return (
    <div
      className={cn("grid xl:grid-cols-3 md:grid-cols-2 gap-8 mt-8", className)}
    >
      {projects.map((project) => (
        <ProjectPreviewCard
          key={project._id}
          title={project.title}
          slug={project.slug.current}
          image={project.mainImage}
          description={project.description}
          href={project.slug.current}
          year={project.year}
        />
      ))}
    </div>
  );
}
