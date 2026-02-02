import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Configurar API Key',
  description: 'Configure sua API key do Groq para começar a gerar bios incríveis. É grátis e leva menos de 1 minuto.',
  robots: {
    index: false, // Página de configuração não precisa ser indexada
    follow: true,
  },
};

export default function StartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
