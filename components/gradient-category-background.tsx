"use client";

import { CATEGORY_GRADIENT_VARIANTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function GradientCategoryBackground({
  children,
  category,
  className,
}: {
  children: React.ReactNode;
  category: keyof typeof CATEGORY_GRADIENT_VARIANTS;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-gradient-to-br w-full h-full",
        CATEGORY_GRADIENT_VARIANTS[category],
        className
      )}
    >
      {children}
    </div>
  );
}
