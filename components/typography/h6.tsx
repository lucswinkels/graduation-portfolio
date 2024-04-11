"use client";

import { cn } from "@/lib/utils";

export function H6({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h6
      className={cn(
        "scroll-m-20 text-base font-semibold tracking-tight text-balance",
        className
      )}
    >
      {children}
    </h6>
  );
}
