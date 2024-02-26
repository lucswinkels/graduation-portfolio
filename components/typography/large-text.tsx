"use client";

import { cn } from "@/lib/utils";

export function LargeText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("text-lg font-semibold", className)}>{children}</p>;
}
