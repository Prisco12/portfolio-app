import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { timeline } from "@/lib/data/timeline";

export function Timeline() {
  return (
    <section id="timeline" className="relative py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="Trajetória"
          title={<>Onde trabalhei e estudei.</>}
          description="Minha experiência passa por sistemas corporativos, aplicações web e mobile, bancos de dados e integrações."
        />

        <ol className="mt-10 divide-y divide-border border-y border-border">
          {timeline.map((entry) => (
            <li
              key={entry.period + entry.title}
              className="grid gap-4 py-7 sm:grid-cols-[170px_1fr] sm:gap-8 sm:py-8 lg:grid-cols-[220px_1fr]"
            >
              <div className="font-mono text-xs leading-7 text-subtle">{entry.period}</div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  {entry.title}
                </h3>
                {entry.org && <div className="mt-1 text-sm font-medium text-accent">{entry.org}</div>}
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{entry.description}</p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {entry.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[11px] text-subtle">{tag}</span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
