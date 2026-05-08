"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils/cn";

type GlowCardProps = Omit<HTMLMotionProps<"div">, "children"> & {
  hoverable?: boolean;
  children?: React.ReactNode;
};

export function GlowCard({
  className,
  children,
  hoverable = true,
  ...rest
}: GlowCardProps) {
  const [pos, setPos] = React.useState<{ x: number; y: number } | null>(null);

  return (
    <motion.div
      onMouseMove={(e) => {
        const t = e.currentTarget as HTMLDivElement;
        const r = t.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseLeave={() => setPos(null)}
      whileHover={hoverable ? { y: -3 } : undefined}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-md",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]",
        "glow-border",
        className,
      )}
      {...rest}
    >
      {pos && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(220px circle at ${pos.x}px ${pos.y}px, rgba(168,85,247,0.18), transparent 60%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
