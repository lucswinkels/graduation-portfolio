"use client";

import { motion } from "framer-motion";

import { fadeUpVariants } from "@/lib/constants";

export default function FadeUp({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUpVariants}
    >
      {children}
    </motion.div>
  );
}
