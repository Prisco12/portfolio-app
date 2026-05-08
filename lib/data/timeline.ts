export type TimelineEntry = {
  period: string;
  title: string;
  org?: string;
  description: string;
  tags: string[];
};

export const timeline: TimelineEntry[] = [
  {
    period: "2025 — Atual",
    title: "Desenvolvedor Júnior",
    org: "Cocari",
    description:
      "Manutenção e evolução de sistemas internos em Progress ABL, incluindo correções, melhorias contínuas, otimização de consultas e suporte às aplicações utilizadas pela cooperativa.",
    tags: ["Progress ABL", "Sistemas Corporativos", "Manutenção", "Otimização"],
  },
  {
    period: "2024 — 2025",
    title: "Analista de Sistemas",
    org: "Stationsoft Sistemas",
    description:
      "Atuação no desenvolvimento e manutenção de aplicações web, mobile e integrações entre sistemas internos. Participação direta na evolução de chatbot corporativo desenvolvido em BLIP, além de trabalhos com Salesforce CRM e bases de dados.",
    tags: [
      "React Native",
      "Salesforce",
      "Progress ABL",
      "Integrações",
      "Chatbot (BLIP)",
    ],
  },
  {
    period: "2024",
    title: "Estágio — Desenvolvedor Full Stack",
    org: "Stationsoft Sistemas",
    description:
      "Apoio na análise de soluções, desenvolvimento frontend e backend, modelagem de banco de dados, manutenção de sistemas e implementação de funcionalidades internas.",
    tags: ["Frontend", "Backend", "Banco de Dados", "Manutenção"],
  },
  {
    period: "2021 — 2024",
    title: "Bacharelado em Engenharia de Software",
    org: "Unicesumar",
    description:
      "Formação acadêmica com projetos envolvendo APIs, integrações, aplicações web, banco de dados e automações, utilizando Java, Python, JavaScript, TypeScript, MySQL e MongoDB.",
    tags: ["Java", "Python", "JavaScript", "TypeScript", "APIs", "Banco de Dados"],
  },
];
