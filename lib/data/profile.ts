export const profile = {
  name: "Gabriel Prisco",
  role: "Desenvolvedor Full Stack",
  headline: "Desenvolvedor Full Stack · Backend · Integrações · Automações",
  tagline:
    "Atuo no desenvolvimento e manutenção de sistemas corporativos, integrações e automações, com foco em backend, APIs e arquitetura de aplicações.",
  location: "Brasil",
  email: "gabrielmarcosprisco@gmail.com",
  socials: {
    github: "https://github.com/Prisco12",
    linkedin: "https://www.linkedin.com/in/gabriel-prisco-6bb714216/",
    whatsapp: "https://wa.me/5544997759907",
    email: "mailto:gabrielmarcosprisco@gmail.com",
  },
  stats: [
    { label: "Programando desde", value: "2021" },
    { label: "Engenharia de Software", value: "2024" },
    { label: "Tecnologias", value: "15+" },
    { label: "Certificações", value: "4" },
  ],
} as const;

export type Profile = typeof profile;
