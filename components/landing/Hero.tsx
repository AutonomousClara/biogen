import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="py-16 sm:py-24 px-6 text-center animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Crie sua bio perfeita
          <br />
          <span className="gradient-text">em segundos</span> ✨
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Bios personalizadas para Instagram, LinkedIn, Twitter, Tinder e mais.
          Powered by AI.
        </p>
        <Link href="/start">
          <Button size="lg">🚀 Criar minha bio</Button>
        </Link>
      </div>
    </section>
  );
}
