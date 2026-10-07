import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { profile } from "@/lib/data/profile";

export function Hero() {
  const [first, ...rest] = profile.name.split(" ");

  return (
    <section id="top" className="relative pt-16 pb-16 sm:pt-24 sm:pb-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.16em] text-muted">
              {profile.role}
            </p>
            <h1 className="text-[clamp(3.5rem,11vw,6.75rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-foreground">
              {first}
              <br />
              {rest.join(" ")}<span className="text-accent">.</span>
            </h1>
          </div>

          <div className="max-w-lg lg:pb-1">
            <p className="text-lg leading-relaxed text-foreground sm:text-xl">
              Trabalho com sistemas corporativos, APIs e automações. Meu foco
              está no backend e na integração entre aplicações.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Aqui reúno um pouco da minha trajetória e dos projetos que estou
              desenvolvendo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#projetos" size="lg" variant="primary">
                Ver projetos
                <ArrowRight aria-hidden="true" className="size-4" />
              </Button>
              <Button href="#contato" size="lg" variant="outline">
                Vamos conversar
              </Button>
              <Button
                href={profile.resume.href}
                download={profile.resume.fileName}
                size="lg"
                variant="outline"
              >
                <Download aria-hidden="true" className="size-4" />
                Baixar currículo (PDF)
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Programando desde 2021
            <span aria-hidden="true" className="mx-3 text-subtle">/</span>
            {profile.location}
          </p>
          <a
            href="#sobre"
            className="inline-flex w-fit items-center gap-2 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            Conheça minha trajetória
            <ArrowDown aria-hidden="true" className="size-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
