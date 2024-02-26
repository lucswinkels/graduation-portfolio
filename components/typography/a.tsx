"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

export function A({
  children,
  href,
  className,
  external,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  external?: boolean;
}) {
  const styles = "font-medium text-primary underline underline-offset-4";

  return external ? (
    <a href={href} target="_blank" className={cn(styles, className)}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cn(styles, className)}>
      {children}
    </Link>
  );
}
