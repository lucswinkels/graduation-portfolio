"use client";

import { cn } from "@/lib/utils";

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "prose prose-p:text-foreground marker:text-foreground/40 dark:prose-li:text-foreground dark:prose-invert max-w-full",
        className
      )}
    >
      {children}
    </div>
  );
}