import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Criar Bio',
  description: 'Crie sua bio perfeita para Instagram, LinkedIn, Twitter ou Tinder. Personalizada com IA em segundos.',
  keywords: ['criar bio', 'gerador de bio', 'bio Instagram', 'bio LinkedIn', 'bio Twitter', 'bio Tinder'],
  openGraph: {
    title: 'Criar Bio | BioGen',
    description: 'Crie sua bio perfeita para redes sociais com IA.',
    url: 'https://biogen.autonomousclara.com/create',
  },
  alternates: {
    canonical: 'https://biogen.autonomousclara.com/create',
  },
};

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
