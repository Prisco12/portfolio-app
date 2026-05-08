import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "Gabriel Prisco — Desenvolvedor Full Stack",
    template: "%s · Gabriel Prisco",
  },
  description:
    "Desenvolvedor Full Stack com atuação em sistemas corporativos, integrações, automações, APIs e desenvolvimento backend.",
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
    title: "Gabriel Prisco — Desenvolvedor Full Stack",
    description:
      "Sistemas corporativos · Integrações · Automações · APIs · Backend",
    siteName: "Gabriel Prisco",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Prisco — Desenvolvedor Full Stack",
    description:
      "Sistemas corporativos · Integrações · Automações · APIs · Backend",
  },
  icons: { icon: "/favicon.ico" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050507",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)] selection:bg-fuchsia-500/30">
        {children}
      </body>
    </html>
  );
}
