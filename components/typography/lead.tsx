"use client";

import { cn } from "@/lib/utils";

export function Lead({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-xl text-muted-foreground max-w-[50ch]", className)}>
      {children}
    </p>
  );
}
