"use client";

import { motion } from "framer-motion";

export default function FadeIn({
  children,
  fromLeft = false,
}: {
  children: React.ReactNode;
  fromLeft?: boolean;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: fromLeft ? -100 : 0,
        y: fromLeft ? 0 : 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
}