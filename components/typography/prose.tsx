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
        "prose prose-img:mt-0 prose-li:text-foreground/80 prose-video:mt-0 prose-p:text-foreground/80 dark:prose-p:text-foreground/95 prose-a:text-foreground marker:text-foreground/40 dark:prose-li:text-foreground/95 dark:prose-invert max-w-full",
        className
      )}
    >
      {children}
    </div>
  );
}
