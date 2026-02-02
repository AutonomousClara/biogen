"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Toast } from "@/components/ui/Toast";

interface BioResultProps {
  bio: string;
  onRegenerate: () => void;
  onReset: () => void;
  loading: boolean;
}

export function BioResult({
  bio,
  onRegenerate,
  onReset,
  loading,
}: BioResultProps) {
  const [showToast, setShowToast] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bio);
      setShowToast(true);
    } catch (error) {
      // Fallback para navegadores antigos
      const textArea = document.createElement("textarea");
      textArea.value = bio;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setShowToast(true);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-6 animate-slide-up">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Sua bio ficou pronta! 🎉
        </h1>
      </div>

      <Card className="mb-6">
        <p className="text-lg text-gray-100 leading-relaxed whitespace-pre-wrap">
          {bio}
        </p>
      </Card>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <Button onClick={handleCopy} variant="primary" className="flex-1">
          📋 Copiar
        </Button>
        <Button
          onClick={onRegenerate}
          variant="secondary"
          className="flex-1"
          loading={loading}
        >
          🔄 Gerar outra
        </Button>
      </div>

      <div className="border-t border-gray-800 pt-6">
        <Button onClick={onReset} variant="ghost" className="w-full">
          ← Começar de novo
        </Button>
      </div>

      {showToast && (
        <Toast
          message="Copiado!"
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}
