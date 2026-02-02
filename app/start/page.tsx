import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ApiKeySetup } from "@/components/onboarding/ApiKeySetup";

export default function StartPage() {
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
