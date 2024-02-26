import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground",
        card: "bg-background text-foreground",
        research: "border-transparent bg-green-500/20 text-green-500",
        design: "border-transparent bg-red-500/20 text-red-500",
        development: "border-transparent bg-pink-500/20 text-pink-500",
        library: "border-transparent bg-lime-500/20 text-lime-500",
        field: "border-transparent bg-teal-500/20 text-teal-500",
        lab: "border-transparent bg-indigo-500/20 text-indigo-500",
        showroom: "border-transparent bg-yellow-500/20 text-yellow-500",
        workshop: "border-transparent bg-sky-500/20 text-sky-500",
        steppingstones: "border-transparent bg-pink-500/20 text-pink-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
