"use client";

import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-full px-6 md:px-[10%]", className)}>{children}</div>
  );
}
