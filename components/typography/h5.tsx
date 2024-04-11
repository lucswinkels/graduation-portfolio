"use client";

import { cn } from "@/lib/utils";

export function H5({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h5
      className={cn(
        "scroll-m-20 text-lg font-semibold tracking-tight text-balance",
        className
      )}
    >
      {children}
    </h5>
  );
}
