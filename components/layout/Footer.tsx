import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Mail } from "lucide-react";
import { profile } from "@/lib/data/profile";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/[0.06]">
      <Container>
        <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-sm text-zinc-500">
            <span className="size-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_2px_rgba(168,85,247,0.7)]" />
            <span>
              © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
            </span>
          </div>
          <div className="flex items-center gap-3 text-zinc-400">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] hover:text-white hover:border-white/25 transition-colors"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] hover:text-white hover:border-white/25 transition-colors"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={profile.socials.email}
              aria-label="Email"
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] hover:text-white hover:border-white/25 transition-colors"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
