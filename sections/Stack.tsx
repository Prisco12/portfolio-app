"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { stack, type StackItem } from "@/lib/data/stack";
import { cn } from "@/lib/utils/cn";

const accentRing: Record<StackItem["accent"], string> = {
  violet:  "from-violet-500/30 to-violet-500/0",
  cyan:    "from-cyan-500/30 to-cyan-500/0",
  blue:    "from-blue-500/30 to-blue-500/0",
  fuchsia: "from-fuchsia-500/30 to-fuchsia-500/0",
};

const accentText: Record<StackItem["accent"], string> = {
  violet:  "text-violet-300",
  cyan:    "text-cyan-300",
  blue:    "text-blue-300",
  fuchsia: "text-fuchsia-300",
};

export function Stack() {
  return (
    <section id="stack" className="relative scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="Stack"
          title={<>Tecnologias e ferramentas.</>}
          description="Tecnologias utilizadas no desenvolvimento de aplicações web, integrações, automações e sistemas corporativos. As escolhas variam conforme os requisitos técnicos e necessidades de cada projeto."
        />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {stack.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.025, ease: "easeOut" }}
                whileHover={{ y: -3 }}
                className="group relative rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 backdrop-blur transition-colors hover:border-white/15"
              >
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                    accentRing[item.accent],
                  )}
                />
                <div className="relative flex flex-col items-start gap-3">
                  <div className="inline-flex size-9 items-center justify-center rounded-lg bg-white/[0.04] ring-1 ring-white/10">
                    <Icon className={cn("size-4", accentText[item.accent])} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-zinc-100">{item.name}</div>
                    <div className="mt-0.5 text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                      {item.category}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
