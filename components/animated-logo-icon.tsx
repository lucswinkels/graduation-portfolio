"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export function AnimatedLogoIcon({ className }: { className?: string }) {
  return (
    <svg
      width="1100"
      height="1100"
      viewBox="0 0 1100 1100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-5", className)}
    >
      <motion.rect
        x="600"
        y="250"
        width="250"
        height="250"
        rx="40"
        fill="currentColor"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.875 }}
      />
      <motion.rect
        width="500"
        height="500"
        rx="40"
        fill="currentColor"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
      <motion.rect
        y="600"
        width="500"
        height="500"
        rx="40"
        fill="currentColor"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.625 }}
      />
      <motion.rect
        x="600"
        y="600"
        width="500"
        height="500"
        rx="40"
        fill="currentColor"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
      />
    </svg>
  );
}
