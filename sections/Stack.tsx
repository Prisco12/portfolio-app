import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { stack, type StackItem } from "@/lib/data/stack";

const groups: { title: string; categories: StackItem["category"][] }[] = [
  { title: "Linguagens", categories: ["Linguagem"] },
  { title: "Web e mobile", categories: ["Frontend", "Mobile"] },
  { title: "Backend e dados", categories: ["Backend", "Banco de Dados"] },
  {
    title: "Infraestrutura e automação",
    categories: ["Infraestrutura", "Automação", "Integrações", "IA"],
  },
];

export function Stack() {
  return (
    <section id="stack" className="border-t border-border py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="Stack"
          title={<>Ferramentas que uso.</>}
          description="Do Progress ABL no trabalho às aplicações web e automações dos projetos pessoais."
        />

        <div className="mt-10 divide-y divide-border border-y border-border">
          {groups.map((group) => (
            <div
              key={group.title}
              className="grid gap-4 py-6 sm:grid-cols-[14rem_1fr] sm:gap-8"
            >
              <h3 className="text-sm font-medium text-foreground">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2.5" aria-label={group.title}>
                {stack
                  .filter((item) => group.categories.includes(item.category))
                  .map((item) => (
                    <li
                      key={item.name}
                      className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-muted"
                    >
                      {item.name}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
