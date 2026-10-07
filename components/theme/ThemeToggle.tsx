"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const label = theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme ? label : "Alternar tema claro e escuro"}
      title={theme ? label : "Alternar tema"}
      className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:border-border-strong hover:bg-surface-hover"
    >
      <Sun aria-hidden="true" className="hidden size-4 dark:block" />
      <Moon aria-hidden="true" className="size-4 dark:hidden" />
    </button>
  );
}
