"use client";

import { Vibe } from "@/lib/prompts";

interface VibeSelectorProps {
  value: Vibe | null;
  onChange: (vibe: Vibe) => void;
}

const vibes: { id: Vibe; icon: string; label: string }[] = [
  { id: "casual", icon: "😊", label: "Casual" },
  { id: "professional", icon: "💼", label: "Profissional" },
  { id: "creative", icon: "✨", label: "Criativo" },
  { id: "mysterious", icon: "😏", label: "Misterioso" },
  { id: "funny", icon: "😂", label: "Engraçado" },
];

export function VibeSelector({ value, onChange }: VibeSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-3">
        Qual vibe?
      </label>
      <div className="flex flex-wrap gap-3">
        {vibes.map((vibe) => (
          <button
            key={vibe.id}
            type="button"
            onClick={() => onChange(vibe.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
              value === vibe.id
                ? "border-purple-500 bg-purple-500/10"
                : "border-gray-700 bg-gray-800/30 hover:border-gray-600"
            }`}
          >
            <span>{vibe.icon}</span>
            <span className="text-sm text-gray-300">{vibe.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
