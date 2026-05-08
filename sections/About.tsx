"use client";

import { motion } from "framer-motion";
import { Brain, Cog, Network, Server } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlowCard } from "@/components/ui/GlowCard";

const cards = [
  {
    icon: Server,
    title: "Backend & Arquitetura",
    description:
      "Desenvolvimento de aplicações backend com Node.js, NestJS e modelagem de banco de dados, com atenção a estrutura, organização de código e desempenho.",
    accent: "from-violet-500/20 to-cyan-500/10",
  },
  {
    icon: Network,
    title: "APIs & Integrações",
    description:
      "Construção e manutenção de APIs REST e integrações entre sistemas internos e plataformas externas, com tratamento de erros, autenticação e logging.",
    accent: "from-cyan-500/20 to-blue-500/10",
  },
  {
    icon: Cog,
    title: "Automação de Processos",
    description:
      "Implementação de automações com n8n e workers customizados para reduzir tarefas manuais e padronizar fluxos operacionais.",
    accent: "from-fuchsia-500/20 to-violet-500/10",
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description:
      "Estudo e aplicação de IA em produtos pessoais, incluindo agentes MCP, integrações com LLMs e automações inteligentes em fluxos reais de uso.",
    accent: "from-blue-500/20 to-fuchsia-500/10",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="Sobre"
          title={<>Desenvolvedor Full Stack com foco em backend e integrações.</>}
          description={
            <>
              Atuo desde 2024 com desenvolvimento de sistemas corporativos,
              aplicações web, integrações e automações. Iniciei na programação em
              2021, durante a graduação em Engenharia de Software, concluída em
              2024 pela Unicesumar. Tenho interesse particular em backend,
              arquitetura de sistemas, APIs, automações e inteligência artificial
              aplicada.
            </>
          }
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <GlowCard className="h-full p-6">
                  <div
                    className={`mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-gradient-to-br ${c.accent} ring-1 ring-white/10`}
                  >
                    <Icon className="size-5 text-zinc-100" />
                  </div>
                  <h3 className="text-base font-semibold text-zinc-100">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {c.description}
                  </p>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
