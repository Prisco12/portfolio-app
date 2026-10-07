import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { ArrowUp, Mail } from "lucide-react";
import { profile } from "@/lib/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-subtle">© {new Date().getFullYear()} {profile.name}</p>
          <div className="flex items-center gap-2">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub de Gabriel Prisco" className="inline-flex size-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface-hover hover:text-foreground">
              <GithubIcon size={17} />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn de Gabriel Prisco" className="inline-flex size-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface-hover hover:text-foreground">
              <LinkedinIcon size={17} />
            </a>
            <a href={profile.socials.email} aria-label="Enviar e-mail para Gabriel Prisco" className="inline-flex size-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface-hover hover:text-foreground">
              <Mail aria-hidden="true" className="size-4" />
            </a>
            <a href="#top" className="ml-3 inline-flex min-h-10 items-center gap-2 rounded-lg px-3 text-sm text-muted transition-colors hover:bg-surface-hover hover:text-foreground">
              Voltar ao início
              <ArrowUp aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
