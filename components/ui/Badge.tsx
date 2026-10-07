import { cn } from "@/lib/utils/cn";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "violet" | "cyan" | "blue";
};

const tones: Record<NonNullable<BadgeProps["tone"]>, string> = {
  default: "border-border bg-surface-strong text-muted",
  violet: "border-border bg-accent-soft text-accent",
  cyan: "border-border bg-accent-soft text-accent",
  blue: "border-border bg-accent-soft text-accent",
};

export function Badge({ tone = "default", className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase",
        tones[tone],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
