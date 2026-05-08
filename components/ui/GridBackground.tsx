import { cn } from "@/lib/utils/cn";

export function GridBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 grid-bg",
        className,
      )}
    />
  );
}
