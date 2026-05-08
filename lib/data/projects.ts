export type Project = {
  title: string;
  status: "Em desenvolvimento" | "Concluído" | "Em estudo";
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  highlight?: boolean;
  gradient: string;
};

export const projects: Project[] = [
  {
    title: "Sistema de Controle Financeiro com IA",
    status: "Em desenvolvimento",
    description:
      "Plataforma pessoal de gestão financeira automatizada por meio de conversas no WhatsApp. A aplicação utiliza um agente MCP, integração com WhatsApp via WAHA e automações para registrar lançamentos, consultar saldos e acompanhar indicadores diretamente pelo aplicativo de mensagens.",
    stack: [
      "Node.js",
      "TypeScript",
      "MCP Agent",
      "WAHA",
      "PostgreSQL",
      "n8n",
      "APIs REST",
    ],
    highlight: true,
    gradient: "from-violet-500/30 via-fuchsia-500/15 to-cyan-500/15",
  },
];

export type Certification = {
  title: string;
  issuer: string;
};

export const certifications: Certification[] = [
  { title: "Especializar", issuer: "Rocketseat" },
  { title: "Fundamentar", issuer: "Rocketseat" },
  { title: "Conectar", issuer: "Rocketseat" },
  { title: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp" },
];
