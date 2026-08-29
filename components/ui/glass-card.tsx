"use client";

import { HTMLMotionProps, motion, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = HTMLMotionProps<"div">;

export function GlassCard({ className, onMouseMove, ...props }: GlassCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.4 });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const localX = event.clientX - rect.left;
    const localY = event.clientY - rect.top;

    event.currentTarget.style.setProperty("--light-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--light-y", `${event.clientY - rect.top}px`);
    x.set((localX - rect.width / 2) * 0.018);
    y.set((localY - rect.height / 2) * 0.018);
    onMouseMove?.(event);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className={cn(
        "glass-panel mouse-light cursor-pointer rounded-[28px] transition duration-[250ms] ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_28px_80px_hsl(var(--shadow)/.18)]",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    />
  );
}
