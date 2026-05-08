"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { timeline } from "@/lib/data/timeline";

export function Timeline() {
  return (
    <section id="timeline" className="relative scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="Trajetória"
          title={<>Experiência profissional e formação.</>}
          description="Resumo da minha trajetória profissional e acadêmica, incluindo posições, áreas de atuação e principais tecnologias utilizadas em cada etapa."
        />

        <div className="relative mt-14 ml-3 sm:ml-0">
          <div
            aria-hidden
            className="absolute left-[10px] sm:left-1/2 top-0 bottom-0 w-px -translate-x-px bg-gradient-to-b from-transparent via-white/15 to-transparent"
          />

          <ol className="relative flex flex-col gap-10">
            {timeline.map((entry, i) => {
              const right = i % 2 === 1;
              return (
                <motion.li
                  key={entry.period + entry.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid grid-cols-[28px_1fr] sm:grid-cols-2 sm:gap-10"
                >
                  <div className="relative flex sm:hidden items-start justify-center">
                    <span className="mt-2 size-3 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 ring-4 ring-[var(--color-background)] shadow-[0_0_20px_-2px_rgba(168,85,247,0.7)]" />
                  </div>

                  <div
                    className={
                      right
                        ? "sm:order-2 sm:pl-10"
                        : "sm:order-1 sm:pr-10 sm:text-right"
                    }
                  >
                    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-md">
                      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-fuchsia-300/90">
                        {entry.period}
                      </div>
                      <h3 className="mt-2 text-base sm:text-lg font-semibold text-zinc-100">
                        {entry.title}
                      </h3>
                      {entry.org && (
                        <div className="mt-0.5 text-xs text-zinc-500">{entry.org}</div>
                      )}
                      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                        {entry.description}
                      </p>
                      <div
                        className={`mt-3 flex flex-wrap gap-1.5 ${
                          right ? "justify-start" : "sm:justify-end"
                        }`}
                      >
                        {entry.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/[0.025] px-2 py-0.5 font-mono text-[10px] text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    className={
                      right
                        ? "hidden sm:block sm:order-1"
                        : "hidden sm:block sm:order-2"
                    }
                  />

                  <span
                    aria-hidden
                    className="hidden sm:block absolute left-1/2 top-7 size-3 -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 ring-4 ring-[var(--color-background)] shadow-[0_0_20px_-2px_rgba(168,85,247,0.7)]"
                  />
                </motion.li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
