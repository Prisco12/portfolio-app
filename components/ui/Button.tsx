"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] disabled:opacity-50 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "text-white bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 shadow-[0_8px_30px_-8px_rgba(168,85,247,0.6)] hover:shadow-[0_10px_40px_-8px_rgba(168,85,247,0.85)]",
  ghost:
    "text-zinc-200 bg-white/[0.03] hover:bg-white/[0.07] border border-white/10",
  outline:
    "text-zinc-100 border border-white/15 hover:border-white/30 bg-transparent hover:bg-white/[0.03]",
};

type AnchorProps = Omit<HTMLMotionProps<"a">, "children"> & {
  variant?: Variant;
  size?: Size;
  href: string;
  children?: React.ReactNode;
};
type ButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  variant?: Variant;
  size?: Size;
  href?: undefined;
  children?: React.ReactNode;
};

export function Button(props: AnchorProps | ButtonProps) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const cls = cn(base, sizes[size], variants[variant], className);
  const motionProps = { whileHover: { y: -1 }, whileTap: { scale: 0.97 } };

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorProps;
    return (
      <motion.a href={href} className={cls} {...motionProps} {...anchorRest}>
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button className={cls} {...motionProps} {...(rest as ButtonProps)}>
      {children}
    </motion.button>
  );
}
