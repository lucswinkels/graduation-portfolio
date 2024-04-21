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
    <div
      className={cn(
        "lg:ml-[220px] lg:w-[calc(100%-220px)] xl:ml-[240px] xl:w-[calc(100%-240px)] lg:px-16 px-6 w-full",
        className
      )}
    >
      {children}
    </div>
  );
}
