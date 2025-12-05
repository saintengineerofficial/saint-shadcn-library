"use client";

import { motion } from "framer-motion";

export default function TransitionMotion({ children }: { children: React.ReactNode }) {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
  };

  return (
    <motion.main
      data-scroll
      className="mb-auto"
      initial="hidden"
      animate="enter"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.main>
  );
}