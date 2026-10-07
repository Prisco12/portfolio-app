import * as React from "react";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const base = "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors disabled:pointer-events-none disabled:opacity-50";
const sizes: Record<Size, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-sm",
};
const variants: Record<Variant, string> = {
  primary: "border border-transparent bg-action text-on-action hover:opacity-90",
  ghost: "text-muted hover:bg-surface-hover hover:text-foreground",
  outline: "border border-border-strong bg-transparent text-foreground hover:bg-surface-hover",
};

type StyleProps = { variant?: Variant; size?: Size };
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & StyleProps & { href: string };
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & StyleProps & { href?: undefined };

export function Button(props: AnchorProps | ButtonProps) {
  if (props.href !== undefined) {
    const { variant = "primary", size = "md", className, children, ...rest } = props as AnchorProps;
    return <a className={cn(base, sizes[size], variants[variant], className)} {...rest}>{children}</a>;
  }

  const { variant = "primary", size = "md", className, children, type = "button", ...rest } = props as ButtonProps;
  return <button type={type} className={cn(base, sizes[size], variants[variant], className)} {...rest}>{children}</button>;
}
