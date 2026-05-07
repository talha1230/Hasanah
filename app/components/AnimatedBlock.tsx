"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedBlockProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function AnimatedBlock({
  children,
  className,
  delay = 0
}: AnimatedBlockProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
