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
      "Trabalho na manutenção de sistemas internos em Progress ABL. Faço correções, melhoro consultas e dou suporte às aplicações usadas pela cooperativa.",
    tags: ["Progress ABL", "Sistemas Corporativos", "Manutenção", "Otimização"],
  },
  {
    period: "2024 — 2025",
    title: "Analista de Sistemas",
    org: "Stationsoft Sistemas",
    description:
      "Desenvolvi e mantive aplicações web, mobile e integrações entre sistemas. Também trabalhei na evolução de um chatbot em BLIP, com Salesforce CRM e com bases de dados.",
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
      "Apoiei o desenvolvimento de frontend e backend, a modelagem de bancos de dados e a manutenção de sistemas. Também participei da análise de soluções e da implementação de funcionalidades internas.",
    tags: ["Frontend", "Backend", "Banco de Dados", "Manutenção"],
  },
  {
    period: "2021 — 2024",
    title: "Bacharelado em Engenharia de Software",
    org: "Unicesumar",
    description:
      "Durante a graduação, desenvolvi projetos com APIs, aplicações web, bancos de dados e automações. Trabalhei com Java, Python, JavaScript, TypeScript, MySQL e MongoDB.",
    tags: ["Java", "Python", "JavaScript", "TypeScript", "APIs", "Banco de Dados"],
  },
];
