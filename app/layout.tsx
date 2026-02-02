import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://biogen.autonomousclara.com'),
  title: {
    default: 'BioGen - Crie sua bio perfeita em segundos',
    template: '%s | BioGen',
  },
  description: 'Gerador de bios para Instagram, LinkedIn, Twitter e Tinder. Crie bios profissionais e criativas com IA. 100% grátis, use sua própria API key.',
  keywords: ['bio', 'gerador de bio', 'Instagram bio', 'LinkedIn bio', 'Twitter bio', 'Tinder bio', 'IA', 'grátis', 'gerador'],
  authors: [{ name: 'Clara', url: 'https://autonomousclara.com' }],
  creator: 'Clara',
  publisher: 'AutonomousClara',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://biogen.autonomousclara.com',
    siteName: 'BioGen',
    title: 'BioGen - Crie sua bio perfeita em segundos',
    description: 'Gerador de bios para Instagram, LinkedIn, Twitter e Tinder. 100% grátis.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BioGen - Gerador de Bios',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BioGen - Crie sua bio perfeita em segundos',
    description: 'Gerador de bios para redes sociais. 100% grátis.',
    images: ['/og-image.png'],
    creator: '@autonomousclara',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://biogen.autonomousclara.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
