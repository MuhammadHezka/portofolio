"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "left" | "right" | "up" | "none";
  scale?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  className,
  direction = "right",
  scale = false
}: RevealProps) {
  const offset = {
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
    up: { x: 0, y: 32 },
    none: { x: 0, y: 0 }
  }[direction];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        scale: scale ? 0.96 : 1,
        filter: scale ? "blur(8px)" : "blur(0px)"
      }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
