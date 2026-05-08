"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, Send, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/lib/data/profile";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: profile.socials.email,
    Icon: Mail,
  },
  {
    label: "GitHub",
    value: "Repositórios e projetos",
    href: profile.socials.github,
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "Trajetória profissional",
    href: profile.socials.linkedin,
    Icon: LinkedinIcon,
  },
  {
    label: "WhatsApp",
    value: "Contato direto",
    href: profile.socials.whatsapp,
    Icon: WhatsappIcon,
  },
];

export function Contact() {
  const [name, setName]       = React.useState("");
  const [email, setEmail]     = React.useState("");
  const [message, setMessage] = React.useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      name ? `Contato — ${name}` : "Contato pelo portfólio",
    );
    const body = encodeURIComponent(
      `Olá, Gabriel.\n\n${message}\n\n— ${name}\n${email}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contato" className="relative scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="Contato"
          title={<>Disponível para conversas profissionais.</>}
          description="Aberto a oportunidades, trocas técnicas e propostas de colaboração. O retorno é feito pelos canais abaixo."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          <div className="lg:col-span-2 grid gap-3">
            {channels.map((c, i) => {
              const Icon = c.Icon as (props: { size?: number; className?: string }) => React.ReactElement;
              return (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -2 }}
                  className="group relative flex items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 backdrop-blur-md transition-colors hover:border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-white/[0.04] ring-1 ring-white/10 text-zinc-200">
                      <Icon size={16} />
                    </span>
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                        {c.label}
                      </div>
                      <div className="text-sm text-zinc-100">{c.value}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="size-4 text-zinc-500 transition-colors group-hover:text-white" />
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <GlowCard className="p-6 sm:p-8">
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Nome"
                    name="name"
                    value={name}
                    onChange={setName}
                    placeholder="Nome completo"
                    required
                  />
                  <Field
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={setEmail}
                    placeholder="email@exemplo.com"
                    required
                  />
                </div>
                <FieldArea
                  label="Mensagem"
                  name="message"
                  value={message}
                  onChange={setMessage}
                  placeholder="Descreva brevemente o assunto ou a proposta."
                  required
                />
                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-zinc-500">
                    Ao enviar, o cliente de email padrão será aberto com a mensagem preenchida.
                  </p>
                  <Button type="submit" size="md" variant="primary">
                    Enviar mensagem
                    <Send className="size-4" />
                  </Button>
                </div>
              </form>
            </GlowCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
};

function Field({ label, name, value, onChange, placeholder, required, type = "text" }: FieldProps) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition-colors focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20"
      />
    </label>
  );
}

function FieldArea({ label, name, value, onChange, placeholder, required }: Omit<FieldProps, "type">) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">{label}</span>
      <textarea
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        rows={5}
        className="resize-y rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition-colors focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20"
      />
    </label>
  );
}
