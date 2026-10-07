import * as React from "react";
import { cn } from "@/lib/utils/cn";

type GlowCardProps = React.HTMLAttributes<HTMLDivElement> & { hoverable?: boolean };

export function GlowCard({ className, children, hoverable = true, ...rest }: GlowCardProps) {
  return (
    <div
      className={cn("rounded-2xl border border-border bg-surface", hoverable && "transition-colors hover:border-border-strong", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
