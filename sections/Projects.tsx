import { ArrowDown, ArrowUpRight, BookOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { projects, certifications } from "@/lib/data/projects";

export function Projects() {
  return (
    <section id="projetos" className="relative py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="Projetos"
          title={<>O que estou construindo.</>}
          description="Projetos pessoais que estou desenvolvendo e melhorando para organizar atendimentos, escalas e finanças."
        />

        <div className="mt-10 grid gap-5">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <div className="grid lg:grid-cols-[1.35fr_1fr]">
                <div className="flex flex-col p-6 sm:p-8">
                  <span className="mb-5 inline-flex self-start rounded-full border border-border-strong bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                    {project.status}
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-6">
                    <h4 className="text-xs font-medium uppercase tracking-[0.14em] text-subtle">
                      Funcionalidades
                    </h4>
                    <ul className="mt-3 grid gap-2 text-sm text-muted">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex gap-3">
                          <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2" aria-label="Tecnologias do projeto">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {(project.github || project.demo) && (
                    <div className="mt-7 flex flex-wrap gap-5">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                        >
                          <GithubIcon size={16} />
                          Ver código
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                        >
                          Abrir projeto
                          <ArrowUpRight className="size-4" aria-hidden />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <div className="border-t border-border bg-surface-strong p-6 sm:p-8 lg:border-t-0 lg:border-l">
                  <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">
                    Visão do projeto
                  </h4>
                  <ol className="mt-6">
                    {project.workflow.map((step, index) => (
                      <li key={step.name}>
                        <div className="flex items-start gap-4 rounded-xl border border-border bg-surface p-4">
                          <span className="mt-0.5 font-mono text-xs text-accent" aria-hidden>
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <div className="text-sm font-medium text-foreground">{step.name}</div>
                            <p className="mt-1 text-xs leading-5 text-muted">{step.detail}</p>
                          </div>
                        </div>
                        {index < project.workflow.length - 1 && (
                          <div className="flex h-7 items-center justify-center text-subtle" aria-hidden>
                            <ArrowDown className="size-3.5" />
                          </div>
                        )}
                      </li>
                    ))}
                  </ol>
                  <p className="mt-5 border-t border-border pt-4 text-xs leading-5 text-muted">
                    {project.note}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <div className="flex items-center gap-3">
            <BookOpen className="size-4 text-subtle" aria-hidden />
            <h3 className="text-sm font-medium text-foreground">Cursos e formação complementar</h3>
          </div>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((course) => (
              <li key={course.title + course.issuer} className="rounded-xl border border-border p-4">
                <div className="text-xs text-subtle">{course.issuer}</div>
                <div className="mt-2 text-sm font-medium leading-6 text-foreground">{course.title}</div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
