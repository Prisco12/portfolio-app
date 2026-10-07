import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const work = [
  {
    title: "Sistemas corporativos",
    description:
      "Manutenção e evolução de aplicações em Progress ABL, com correções e melhorias nas consultas e funcionalidades.",
  },
  {
    title: "Backend e integrações",
    description:
      "APIs com Node.js e NestJS, modelagem de dados e comunicação entre sistemas internos e plataformas externas.",
  },
  {
    title: "Projetos pessoais",
    description:
      "Projetos para acompanhamento nutricional, geração de escalas ministeriais e controle financeiro pelo WhatsApp.",
  },
];

export function About() {
  return (
    <section id="sobre" className="border-t border-border py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionTitle
            eyebrow="Sobre"
            title={<>Desenvolvimento no dia a dia.</>}
          />
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              Comecei a programar em 2021, durante a graduação em Engenharia de
              Software na Unicesumar. Concluí o curso em 2024, ano em que comecei
              a trabalhar com desenvolvimento na Stationsoft Sistemas.
            </p>
            <p>
              Hoje sou desenvolvedor na Cocari, onde trabalho com sistemas
              corporativos em Progress ABL. Também desenvolvo projetos pessoais
              com backend, APIs e automações para colocar os estudos em prática.
            </p>
          </div>
        </div>

        <dl className="mt-12 grid gap-8 border-t border-border pt-8 sm:grid-cols-3 sm:gap-10">
          {work.map((item) => (
            <div key={item.title}>
              <dt className="text-base font-medium text-foreground">
                {item.title}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
