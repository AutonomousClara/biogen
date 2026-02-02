"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { ApiKeySetup } from "@/components/onboarding/ApiKeySetup";
import { getApiKey, validateApiKey } from "@/lib/storage";

export default function StartPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [needsKey, setNeedsKey] = useState(true);

  useEffect(() => {
    async function checkConfig() {
      // Primeiro verifica se já tem key salva localmente
      const savedKey = getApiKey();
      if (savedKey && validateApiKey(savedKey)) {
        router.push("/create");
        return;
      }

      // Depois verifica se o servidor tem key configurada
      try {
        const res = await fetch("/api/config");
        const data = await res.json();
        if (data.hasServerKey) {
          // Servidor tem key, pode ir direto pro create
          router.push("/create");
          return;
        }
      } catch (e) {
        // Se falhar, assume que precisa de key
      }

      setNeedsKey(true);
      setChecking(false);
    }

    checkConfig();
  }, [router]);

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-400 animate-pulse">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            ← Voltar
          </Link>
          <span className="text-sm text-gray-500">Passo 1 de 2</span>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center py-12">
        <ApiKeySetup />
      </main>
      <Footer />
    </div>
  );
}
