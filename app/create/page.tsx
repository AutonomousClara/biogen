"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BioForm } from "@/components/create/BioForm";
import { BioResult } from "@/components/create/BioResult";
import { Toast } from "@/components/ui/Toast";
import { getApiKey, removeApiKey } from "@/lib/storage";
import { generateBio, BioParams } from "@/lib/groq";
import { Network, Vibe } from "@/lib/prompts";

interface FormData {
  network: Network | null;
  name: string;
  profession: string;
  traits: string;
  vibe: Vibe | null;
}

export default function CreatePage() {
  const router = useRouter();
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [hasServerKey, setHasServerKey] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [lastFormData, setLastFormData] = useState<FormData | null>(null);
  const [showConfig, setShowConfig] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function checkAccess() {
      const key = getApiKey();
      if (key) {
        setApiKey(key);
        setReady(true);
        return;
      }

      // Verifica se servidor tem key
      try {
        const res = await fetch("/api/config");
        const data = await res.json();
        if (data.hasServerKey) {
          setHasServerKey(true);
          setReady(true);
          return;
        }
      } catch (e) {}

      // Nenhuma key disponível
      router.push("/start");
    }

    checkAccess();
  }, [router]);

  const handleGenerate = async (formData: FormData) => {
    if ((!apiKey && !hasServerKey) || !formData.network || !formData.vibe) return;

    setLastFormData(formData);
    setLoading(true);
    setError(null);

    const result = await generateBio({
      apiKey: apiKey || "", // Se vazio, backend usa a key do servidor
      network: formData.network,
      name: formData.name,
      profession: formData.profession,
      traits: formData.traits,
      vibe: formData.vibe,
    });

    setLoading(false);

    if (result.success && result.bio) {
      setBio(result.bio);
    } else {
      setError(result.error || "Erro desconhecido");
      if (result.error?.includes("inválida")) {
        // API key inválida, limpar e redirecionar
        removeApiKey();
        setTimeout(() => router.push("/start"), 2000);
      }
    }
  };

  const handleRegenerate = async () => {
    if (lastFormData) {
      await handleGenerate(lastFormData);
    }
  };

  const handleReset = () => {
    setBio(null);
    setLastFormData(null);
  };

  const handleConfigClick = () => {
    if (confirm("Deseja alterar sua chave de API?")) {
      removeApiKey();
      router.push("/start");
    }
  };

  if (!ready) {
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
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">BioGen</span>
            <span className="text-xl">✨</span>
          </Link>
          {apiKey && (
            <button
              onClick={handleConfigClick}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Configurações"
              title="Alterar API Key"
            >
              ⚙️
            </button>
          )}
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-12">
        {bio ? (
          <BioResult
            bio={bio}
            onRegenerate={handleRegenerate}
            onReset={handleReset}
            loading={loading}
          />
        ) : (
          <BioForm onSubmit={handleGenerate} loading={loading} />
        )}
      </main>

      <Footer />

      {error && (
        <Toast message={error} type="error" onClose={() => setError(null)} />
      )}
    </div>
  );
}
