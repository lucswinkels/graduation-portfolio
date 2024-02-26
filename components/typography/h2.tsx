"use client";

import { cn } from "@/lib/utils";

export function H2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors text-balance",
        className
      )}
    >
      {children}
    </h2>
  );
}
