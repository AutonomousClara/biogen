import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/landing/Hero";
import { Examples } from "@/components/landing/Examples";
import { Benefits } from "@/components/landing/Benefits";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Examples />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
}
