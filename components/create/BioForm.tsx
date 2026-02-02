"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { NetworkSelector } from "./NetworkSelector";
import { VibeSelector } from "./VibeSelector";
import { Network, Vibe } from "@/lib/prompts";

interface BioFormData {
  network: Network | null;
  name: string;
  profession: string;
  traits: string;
  vibe: Vibe | null;
}

interface BioFormProps {
  onSubmit: (data: BioFormData) => void;
  loading: boolean;
}

export function BioForm({ onSubmit, loading }: BioFormProps) {
  const [formData, setFormData] = useState<BioFormData>({
    network: null,
    name: "",
    profession: "",
    traits: "",
    vibe: null,
  });

  const isValid =
    formData.network &&
    formData.name.trim() &&
    formData.profession.trim() &&
    formData.traits.trim() &&
    formData.vibe;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto px-6 animate-slide-up">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Conta um pouco sobre você 😊
        </h1>
      </div>

      <div className="space-y-6">
        <NetworkSelector
          value={formData.network}
          onChange={(network) => setFormData({ ...formData, network })}
        />

        <Input
          label="Seu nome (ou apelido)"
          placeholder="Maria"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <Input
          label="O que você faz?"
          placeholder="Designer de produto"
          value={formData.profession}
          onChange={(e) =>
            setFormData({ ...formData, profession: e.target.value })
          }
        />

        <Input
          label="3 coisas que te definem"
          placeholder="café, viagens, cachorros"
          value={formData.traits}
          onChange={(e) => setFormData({ ...formData, traits: e.target.value })}
        />

        <VibeSelector
          value={formData.vibe}
          onChange={(vibe) => setFormData({ ...formData, vibe })}
        />

        <Button
          type="submit"
          disabled={!isValid}
          loading={loading}
          className="w-full"
          size="lg"
        >
          ✨ Gerar minha bio
        </Button>
      </div>
    </form>
  );
}
