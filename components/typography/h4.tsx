"use client";

import { cn } from "@/lib/utils";

export function H4({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight text-balance",
        className
      )}
    >
      {children}
    </h4>
  );
}
