"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({
  onClick,
  className,
}: {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  className?: string;
}) {
  return (
    <Link
      className={cn("flex items-center space-x-2", className)}
      href="/"
      onClick={onClick}
    >
      <svg
        width="1100"
        height="1100"
        viewBox="0 0 1100 1100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-5"
      >
        <rect
          x="600"
          y="250"
          width="250"
          height="250"
          rx="40"
          fill="currentColor"
        />
        <rect width="500" height="500" rx="40" fill="currentColor" />
        <rect y="600" width="500" height="500" rx="40" fill="currentColor" />
        <rect
          x="600"
          y="600"
          width="500"
          height="500"
          rx="40"
          fill="currentColor"
        />
      </svg>
      <span className="font-bold">Luc</span>
    </Link>
  );
}
