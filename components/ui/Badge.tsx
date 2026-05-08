import { cn } from "@/lib/utils/cn";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "violet" | "cyan" | "blue";
};

const tones: Record<NonNullable<BadgeProps["tone"]>, string> = {
  default: "border-white/10 bg-white/[0.03] text-zinc-300",
  violet:  "border-violet-400/25 bg-violet-500/10 text-violet-200",
  cyan:    "border-cyan-400/25 bg-cyan-500/10 text-cyan-200",
  blue:    "border-blue-400/25 bg-blue-500/10 text-blue-200",
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
