import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Boxes,
  Brain,
  Code2,
  Cog,
  Container,
  Cpu,
  Database,
  Network,
  Server,
  Smartphone,
  Workflow,
} from "lucide-react";

export type StackItem = {
  name: string;
  category: "Frontend" | "Backend" | "Mobile" | "Infraestrutura" | "Banco de Dados" | "Integrações" | "Automação" | "IA" | "Linguagem";
  icon: LucideIcon;
  accent: "violet" | "cyan" | "blue" | "fuchsia";
};

export const stack: StackItem[] = [
  { name: "JavaScript",   category: "Linguagem",       icon: Code2,      accent: "blue"    },
  { name: "TypeScript",   category: "Linguagem",       icon: Cpu,        accent: "blue"    },
  { name: "React",        category: "Frontend",        icon: Atom,       accent: "cyan"    },
  { name: "React Native", category: "Mobile",          icon: Smartphone, accent: "cyan"    },
  { name: "Node.js",      category: "Backend",         icon: Server,     accent: "violet"  },
  { name: "NestJS",       category: "Backend",         icon: Boxes,      accent: "fuchsia" },
  { name: "APIs REST",    category: "Backend",         icon: Network,    accent: "blue"    },
  { name: "PostgreSQL",   category: "Banco de Dados",  icon: Database,   accent: "blue"    },
  { name: "MySQL",        category: "Banco de Dados",  icon: Database,   accent: "violet"  },
  { name: "MongoDB",      category: "Banco de Dados",  icon: Database,   accent: "cyan"    },
  { name: "Progress ABL", category: "Linguagem",       icon: Code2,      accent: "fuchsia" },
  { name: "Docker",       category: "Infraestrutura",  icon: Container,  accent: "cyan"    },
  { name: "n8n",          category: "Automação",       icon: Workflow,   accent: "violet"  },
  { name: "Automações",   category: "Automação",       icon: Cog,        accent: "cyan"    },
  { name: "Integrações",  category: "Integrações",     icon: Network,    accent: "blue"    },
  { name: "IA / LLMs",    category: "IA",              icon: Brain,      accent: "fuchsia" },
];
