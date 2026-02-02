"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { saveApiKey, getApiKey, validateApiKey } from "@/lib/storage";

export function ApiKeySetup() {
  const router = useRouter();
  const [apiKey, setApiKey] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Verifica se já tem uma chave salva
    const savedKey = getApiKey();
    if (savedKey && validateApiKey(savedKey)) {
      router.push("/create");
    }
  }, [router]);

  useEffect(() => {
    setIsValid(validateApiKey(apiKey));
  }, [apiKey]);

  const handleContinue = () => {
    if (isValid) {
      saveApiKey(apiKey);
      router.push("/create");
    }
  };

  return (
    <div className="max-w-xl mx-auto px-6 animate-slide-up">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Antes de começar... 🔑
        </h1>
        <p className="text-gray-400">
          O BioGen usa IA para criar suas bios.
          <br />
          Para funcionar, você precisa de uma chave de API gratuita da Groq.
        </p>
      </div>

      <Card className="mb-8">
        <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
          📝 Como conseguir <span className="text-gray-400 text-sm font-normal">(leva 1 minuto)</span>
        </h2>
        <ol className="space-y-3 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center text-sm text-purple-400">
              1
            </span>
            <span>
              Acesse{" "}
              <a
                href="https://console.groq.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                console.groq.com
              </a>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center text-sm text-purple-400">
              2
            </span>
            <span>Crie uma conta gratuita (pode usar Google)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center text-sm text-purple-400">
              3
            </span>
            <span>Vá em &quot;API Keys&quot; e clique em &quot;Create API Key&quot;</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center text-sm text-purple-400">
              4
            </span>
            <span>Copie a chave e cole aqui embaixo</span>
          </li>
        </ol>
        <div className="mt-6">
          <a
            href="https://console.groq.com/keys"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="sm" className="w-full sm:w-auto">
              Abrir Groq Console ↗
            </Button>
          </a>
        </div>
      </Card>

      <div className="space-y-4">
        <Input
          label="Sua API Key"
          type="password"
          placeholder="gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>🔒</span>
          <span>
            Sua chave fica salva apenas no seu navegador. Nós nunca a vemos ou
            armazenamos.
          </span>
        </div>

        <Button
          onClick={handleContinue}
          disabled={!isValid}
          className="w-full"
          size="lg"
        >
          Continuar →
        </Button>

        {apiKey && !isValid && (
          <p className="text-sm text-amber-400 text-center">
            A chave deve começar com &quot;gsk_&quot;
          </p>
        )}
      </div>
    </div>
  );
}
