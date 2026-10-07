export type Project = {
  title: string;
  status: "Em desenvolvimento" | "Em evolução" | "Concluído" | "Em estudo";
  description: string;
  features: string[];
  stack: string[];
  workflow: { name: string; detail: string }[];
  note: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Controle financeiro pelo WhatsApp",
    status: "Em desenvolvimento",
    description:
      "Estou desenvolvendo um sistema de gestão financeira em que lançamentos e consultas são feitos por conversa no WhatsApp. O projeto reúne um agente MCP, a integração com WAHA e automações para trabalhar com os dados financeiros.",
    features: [
      "Registrar lançamentos por mensagem",
      "Consultar saldos sem sair do WhatsApp",
      "Acompanhar indicadores financeiros",
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "MCP Agent",
      "WAHA",
      "PostgreSQL",
      "n8n",
      "APIs REST",
    ],
    workflow: [
      { name: "WhatsApp + WAHA", detail: "Conversa e integração com as mensagens" },
      { name: "Agente MCP", detail: "Operações de lançamento e consulta" },
      { name: "PostgreSQL", detail: "Armazenamento dos dados financeiros" },
    ],
    note: "Automações com n8n e integrações por APIs REST completam o projeto.",
  },
  {
    title: "NutriAdmin — acompanhamento nutricional",
    status: "Em desenvolvimento",
    description:
      "Estou desenvolvendo uma plataforma para o acompanhamento entre nutricionistas e pacientes. O profissional organiza avaliações, metas e planos alimentares; o paciente consulta seu plano, registra refeições e acompanha sua rotina.",
    features: [
      "Cadastro de pacientes por convite e acessos separados por perfil",
      "Avaliações, metas e planos alimentares com catálogo de alimentos",
      "Registro de refeições e comparação com o plano alimentar",
      "Histórico de evolução e painel de acompanhamento do nutricionista",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
    ],
    workflow: [
      { name: "Cadastro e avaliação", detail: "O nutricionista convida o paciente e organiza a avaliação" },
      { name: "Plano alimentar", detail: "Definição de metas e refeições para o acompanhamento" },
      { name: "Registro do paciente", detail: "Consulta ao plano e registro das refeições do dia a dia" },
      { name: "Acompanhamento", detail: "Histórico e comparação entre o planejado e o registrado" },
    ],
    note: "O sistema está em desenvolvimento. As integrações com IA e WhatsApp ainda estão em validação.",
  },
  {
    title: "Gerador de escalas ministeriais",
    status: "Em evolução",
    description:
      "Desenvolvi um gerador de escalas mensais para organizar a participação dos membros de um ministério da igreja. Posso configurar dias, exceções e quantidade de pessoas por data, gerar uma distribuição equilibrada e compartilhar o resultado.",
    features: [
      "Cadastro de membros e regras por dia, com exceções por data",
      "Geração mensal com distribuição equilibrada das participações",
      "Visualização da escala por pessoa ou por dia",
      "Exportação em PNG, CSV e impressão",
    ],
    stack: ["React", "TypeScript", "Vite", "NestJS", "MongoDB", "Docker"],
    workflow: [
      { name: "Membros e regras", detail: "Configuração de dias, exceções e vagas por data" },
      { name: "Geração da escala", detail: "Distribuição dos membros ao longo do mês" },
      { name: "Consulta e exportação", detail: "Visões por pessoa ou dia e arquivos para compartilhar" },
    ],
    note: "Versão funcional em ambiente local. Estou preparando melhorias antes de publicar.",
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
