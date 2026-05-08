"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlowCard } from "@/components/ui/GlowCard";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { projects, certifications } from "@/lib/data/projects";

export function Projects() {
  return (
    <section id="projetos" className="relative scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="Projetos"
          title={<>Projeto em desenvolvimento.</>}
          description="Projeto pessoal em desenvolvimento, voltado à aplicação prática de backend, integrações, automações e inteligência artificial em um cenário real de uso."
        />

        <div className="mt-12 grid gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlowCard className="group h-full overflow-hidden p-0">
                <div className="grid md:grid-cols-5">
                  <div className={`relative h-48 md:h-auto md:col-span-2 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                    <div aria-hidden className="absolute inset-0 grid-bg opacity-60" />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(255,255,255,0.06),transparent_70%)]"
                    />
                    <div className="absolute left-5 top-5 flex items-center gap-2">
                      <span className="inline-flex size-7 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/10 backdrop-blur">
                        <Sparkles className="size-3.5 text-white" />
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em] text-fuchsia-200">
                        {p.status}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 p-6 sm:p-8 md:col-span-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-100">
                        {p.title}
                      </h3>
                      <div className="flex items-center gap-1.5 opacity-80 transition-opacity group-hover:opacity-100">
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Repositório no GitHub"
                            className="inline-flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 hover:text-white hover:border-white/25 transition-colors"
                          >
                            <GithubIcon size={14} />
                          </a>
                        )}
                        {p.demo && (
                          <a
                            href={p.demo}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Demonstração"
                            className="inline-flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 hover:text-white hover:border-white/25 transition-colors"
                          >
                            <ArrowUpRight className="size-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-zinc-400">{p.description}</p>

                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-white/10 bg-white/[0.025] px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex size-7 items-center justify-center rounded-md border border-white/10 bg-white/[0.03]">
              <Award className="size-3.5 text-zinc-300" />
            </span>
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-zinc-400">
              Certificações
            </h3>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((c, i) => (
              <motion.div
                key={c.title + c.issuer}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 backdrop-blur"
              >
                <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                  {c.issuer}
                </div>
                <div className="mt-1 text-sm font-medium text-zinc-100 leading-snug">
                  {c.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
