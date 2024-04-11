export const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export const CATEGORY_GRADIENT_VARIANTS = {
  research: "from-green-500 to-teal-500",
  design: "from-violet-500 to-fuchsia-500",
  development: "from-rose-500 to-red-500",
  docs: "from-yellow-500 to-orange-500",
  testing: "from-cyan-500 to-sky-500",
  other: "from-slate-500 to-slate-800",
};
