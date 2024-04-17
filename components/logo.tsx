"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({
  onClick,
  iconSize,
  withText,
  textStyles,
  textGap,
  noLink,
}: {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  iconSize?: string;
  withText?: boolean;
  textStyles?: string;
  textGap?: string;
  noLink?: boolean;
}) {
  const logo = (
    <svg
      width="1100"
      height="1100"
      viewBox="0 0 1100 1100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-6", iconSize)}
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
  );
  return noLink ? (
    logo
  ) : withText ? (
    <Link href="/" onClick={onClick}>
      <div className={cn("flex gap-2 items-center", textGap)}>
        {logo}
        <span
          className={cn(
            "text-sm leading-none font-medium w-max text-foreground",
            textStyles
          )}
        >
          Luc
        </span>
      </div>
    </Link>
  ) : (
    <Link href="/" onClick={onClick}>
      {logo}
    </Link>
  );
}
