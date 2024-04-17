"use client";

import { cn } from "@/lib/utils";

const categoryGradientVariants = {
  research: "from-green-500 to-teal-500",
  design: "from-violet-500 to-fuchsia-500",
  development: "from-rose-500 to-red-500",
  docs: "from-yellow-500 to-orange-500",
  testing: "from-cyan-500 to-sky-500",
  other: "from-slate-500 to-slate-800",
};

export function GradientCategoryBackground({
  children,
  category,
  className,
}: {
  children: React.ReactNode;
  category: keyof typeof categoryGradientVariants;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-gradient-to-br w-full h-full",
        categoryGradientVariants[category],
        className
      )}
    >
      {children}
    </div>
  );
}
