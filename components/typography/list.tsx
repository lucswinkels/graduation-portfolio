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
    <ul
      className={cn("my-6 ml-6 list-disc [&>li]:mt-2 max-w-[75ch]", className)}
    >
      {children}
    </ul>
  );
}
