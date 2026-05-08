"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/data/nav";
import { profile } from "@/lib/data/profile";
import { cn } from "@/lib/utils/cn";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <Container>
        <nav
          className={cn(
            "flex items-center justify-between rounded-full border px-4 sm:px-5 transition-all duration-500",
            scrolled
              ? "border-white/10 bg-black/55 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] h-12"
              : "border-transparent bg-transparent h-14",
          )}
        >
          <a
            href="#top"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-zinc-100"
          >
            <span className="relative inline-flex size-7 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 text-white shadow-[0_0_18px_-4px_rgba(168,85,247,0.7)]">
              <Sparkles className="size-3.5" />
            </span>
            <span className="hidden sm:block">{profile.name}</span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative inline-flex items-center rounded-full px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button href="#contato" size="sm" variant="ghost">
              Contato
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-200"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl p-3"
            >
              <ul className="flex flex-col">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-2 text-sm text-zinc-300 hover:bg-white/[0.04] hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
