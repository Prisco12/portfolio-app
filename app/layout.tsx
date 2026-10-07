import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { themeInitializationScript } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gprisco.com.br"),
  alternates: { canonical: "/" },
  title: {
    default: "Gabriel Prisco — Desenvolvedor Full Stack",
    template: "%s · Gabriel Prisco",
  },
  description:
    "Portfólio de Gabriel Prisco. Desenvolvedor Full Stack com experiência em Progress ABL, APIs e integrações, e projetos com Node.js e TypeScript.",
  keywords: [
    "Desenvolvedor Full Stack",
    "Backend",
    "APIs",
    "Integrações",
    "Automação",
    "Inteligência Artificial",
    "Node.js",
    "NestJS",
    "TypeScript",
    "React",
    "React Native",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Progress ABL",
    "Docker",
    "n8n",
  ],
  authors: [{ name: "Gabriel Prisco" }],
  creator: "Gabriel Prisco",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    title: "Gabriel Prisco — Desenvolvedor Full Stack",
    description:
      "Minha trajetória no desenvolvimento e os projetos que estou construindo.",
    siteName: "Gabriel Prisco",
  },
  twitter: {
    card: "summary",
    title: "Gabriel Prisco — Desenvolvedor Full Stack",
    description:
      "Minha trajetória no desenvolvimento e os projetos que estou construindo.",
  },
  icons: { icon: "/favicon.ico" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f6f5f1",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-action focus:px-4 focus:py-3 focus:text-on-action"
        >
          Pular para o conteúdo
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
