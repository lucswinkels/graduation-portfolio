"use client";

import { cn } from "@/lib/utils";

export function P({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("leading-7 max-w-[75ch] text-pretty", className)}>
      {children}
    </p>
  );
}
