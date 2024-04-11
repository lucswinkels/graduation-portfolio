"use client";

import {
  Code2,
  File,
  FileQuestion,
  FlaskConical,
  FolderSearch,
  Frame,
  Paperclip,
} from "lucide-react";

import { cn } from "@/lib/utils";

export function CategoryIcon({
  category,
  className,
}: {
  category: string;
  className?: string;
}) {
  if (category === "research") {
    return <FolderSearch className={cn("w-8 h-8", className)} />;
  }
  if (category === "design") {
    return <Frame className={cn("w-8 h-8", className)} />;
  }
  if (category === "development") {
    return <Code2 className={cn("w-8 h-8", className)} />;
  }
  if (category === "docs") {
    return <File className={cn("w-8 h-8", className)} />;
  }
  if (category === "testing") {
    return <FlaskConical className={cn("w-8 h-8", className)} />;
  }
  if (category === "other") {
    return <Paperclip className={cn("w-8 h-8", className)} />;
  } else {
    return null;
  }
}
