"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GridBackground } from "@/components/ui/GridBackground";
import { profile } from "@/lib/data/profile";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0 },
};

export function Hero() {
  const [first, ...rest] = profile.name.split(" ");
  const last = rest.join(" ");

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-36 sm:pt-44 pb-24 sm:pb-32"
    >
      <GridBackground />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[55%] bg-[radial-gradient(50%_50%_at_50%_0%,rgba(168,85,247,0.18),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 left-1/2 top-[32%] h-[480px] w-[680px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(34,211,238,0.18), transparent 70%)",
        }}
      />

      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] text-zinc-300 backdrop-blur"
          >
            <span className="relative inline-flex size-1.5 items-center justify-center">
              <span className="absolute size-1.5 rounded-full bg-emerald-400" />
              <span className="absolute size-1.5 rounded-full bg-emerald-400 animate-ping" />
            </span>
            Aberto a oportunidades profissionais
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-[12vw] sm:text-7xl md:text-8xl font-semibold tracking-[-0.04em] leading-[0.95] text-gradient"
          >
            {first}
            <br className="sm:hidden" />
            <span className="sm:ml-4">{last}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-300"
          >
            Desenvolvedor Full Stack com atuação em sistemas corporativos,
            integrações, automações e aplicações web.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 max-w-xl text-sm text-zinc-500"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col sm:flex-row items-center gap-3"
          >
            <Button href="#projetos" size="lg" variant="primary">
              Conhecer projetos
              <ArrowRight className="size-4" />
            </Button>
            <Button href="#contato" size="lg" variant="outline">
              <Mail className="size-4" />
              Entrar em contato
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 grid w-full max-w-3xl grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {profile.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-4 text-left backdrop-blur"
              >
                <div className="font-mono text-2xl font-semibold tracking-tight text-zinc-100">
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </section>
  );
}
