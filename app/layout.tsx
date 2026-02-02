import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BioGen - Crie sua bio perfeita em segundos",
  description:
    "Gerador de bios para Instagram, LinkedIn, Twitter e mais. Powered by AI, 100% grátis.",
  openGraph: {
    title: "BioGen - Crie sua bio perfeita em segundos",
    description: "Gerador de bios para redes sociais. Powered by AI.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
