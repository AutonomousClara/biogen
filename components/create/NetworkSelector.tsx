"use client";

import { Network } from "@/lib/prompts";

interface NetworkSelectorProps {
  value: Network | null;
  onChange: (network: Network) => void;
}

const networks: { id: Network; icon: string; label: string }[] = [
  { id: "instagram", icon: "📸", label: "Instagram" },
  { id: "linkedin", icon: "💼", label: "LinkedIn" },
  { id: "twitter", icon: "🐦", label: "Twitter" },
  { id: "tinder", icon: "🔥", label: "Tinder" },
];

export function NetworkSelector({ value, onChange }: NetworkSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-3">
        Para qual rede?
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {networks.map((network) => (
          <button
            key={network.id}
            type="button"
            onClick={() => onChange(network.id)}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
              value === network.id
                ? "border-purple-500 bg-purple-500/10 scale-105"
                : "border-gray-700 bg-gray-800/30 hover:border-gray-600"
            }`}
          >
            <span className="text-2xl">{network.icon}</span>
            <span className="text-sm text-gray-300">{network.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
