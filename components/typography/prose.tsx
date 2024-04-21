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
        "prose prose-img:mt-0 prose-video:mt-0 prose-li:text-foreground/70 dark:prose-li:text-foreground/90 prose-p:text-foreground/70 dark:prose-p:text-foreground/90 marker:text-foreground/40 dark:prose-invert max-w-full prose-ul:max-w-[75ch]",
        className
      )}
    >
      {children}
    </div>
  );
}
