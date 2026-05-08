import { cn } from "@/lib/utils/cn";

type SectionTitleProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.025] px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-zinc-400">
          <span className="size-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_2px_rgba(168,85,247,0.7)]" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-gradient max-w-2xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}
