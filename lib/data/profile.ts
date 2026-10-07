export const profile = {
  name: "Gabriel Prisco",
  role: "Desenvolvedor Full Stack",
  headline: "Desenvolvedor Full Stack · Backend · Integrações · Automações",
  tagline:
    "Trabalho com sistemas corporativos, APIs e automações, com foco em backend e integrações.",
  location: "Brasil",
  email: "gabrielmarcosprisco@gmail.com",
  socials: {
    github: "https://github.com/Prisco12",
    linkedin: "https://www.linkedin.com/in/gabriel-prisco-6bb714216/",
    whatsapp: "https://wa.me/5544997759907",
    email: "mailto:gabrielmarcosprisco@gmail.com",
  },
} as const;

export type Profile = typeof profile;
