"use client";

import * as React from "react";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/lib/data/profile";

const channels = [
  {
    label: "WhatsApp",
    description: "Uma conversa direta",
    href: profile.socials.whatsapp,
    Icon: WhatsappIcon,
  },
  {
    label: "LinkedIn",
    description: "Meu perfil profissional",
    href: profile.socials.linkedin,
    Icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    description: "Código e repositórios",
    href: profile.socials.github,
    Icon: GithubIcon,
  },
];

export function Contact() {
  const [copyStatus, setCopyStatus] = React.useState<"idle" | "copied" | "error">("idle");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  };

  return (
    <section id="contato" className="relative py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="Contato"
          title={<>Vamos conversar.</>}
          description="Pode me chamar para falar sobre uma oportunidade, um projeto ou trocar uma ideia sobre desenvolvimento."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="text-xs font-medium uppercase tracking-[0.14em] text-subtle">Meu e-mail</div>
            <a
              href={profile.socials.email}
              className="mt-4 block break-all text-xl font-medium tracking-tight text-foreground underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:text-2xl"
            >
              {profile.email}
            </a>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={profile.socials.email} size="md" variant="primary">
                <Mail className="size-4" aria-hidden />
                Abrir e-mail
              </Button>
              <Button type="button" size="md" variant="outline" onClick={copyEmail}>
                {copyStatus === "copied" ? <Check className="size-4" aria-hidden /> : <Copy className="size-4" aria-hidden />}
                {copyStatus === "copied" ? "Copiado" : "Copiar endereço"}
              </Button>
            </div>
            <p className="mt-4 min-h-5 text-xs leading-5 text-muted" role="status" aria-live="polite">
              {copyStatus === "copied"
                ? "E-mail copiado para a área de transferência."
                : copyStatus === "error"
                  ? "Não consegui copiar. Você pode selecionar o endereço acima."
                  : "O botão abre seu aplicativo de e-mail."}
            </p>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {channels.map(({ label, description, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-6 text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-border text-muted transition-colors group-hover:border-border-strong group-hover:text-accent">
                  <Icon size={18} />
                </span>
                <div className="flex-1">
                  <div className="text-sm font-medium">{label}</div>
                  <div className="mt-1 text-xs text-muted">{description}</div>
                </div>
                <ArrowUpRight className="size-4 text-subtle transition-colors group-hover:text-accent" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
