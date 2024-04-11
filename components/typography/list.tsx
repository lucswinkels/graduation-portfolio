"use client";

import { cn } from "@/lib/utils";

export function List({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ul className={cn("list-disc max-w-[75ch]", className)}>{children}</ul>
  );
}
