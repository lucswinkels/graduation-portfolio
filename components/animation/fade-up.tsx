"use client"

import { motion } from "framer-motion"

import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/constants"

export default function FadeUp({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={FADE_UP_ANIMATION_VARIANTS}
    >
      {children}
    </motion.div>
  )
}
