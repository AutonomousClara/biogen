import { Card } from "@/components/ui/Card";

const examples = [
  {
    network: "📸 Instagram",
    bio: "Designer apaixonada por café e boas histórias ☕ Criando experiências que encantam 🎨 São Paulo 📍",
    color: "from-pink-500/20 to-purple-500/20",
  },
  {
    network: "💼 LinkedIn",
    bio: "Product Manager com 10+ anos de experiência em startups. Especialista em transformação digital e liderança de equipes ágeis.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    network: "🔥 Tinder",
    bio: "Amante de café, trilhas e conversas que rendem. Mãe de 2 dogs que vão te julgar 🐕 6'1\"",
    color: "from-orange-500/20 to-red-500/20",
  },
];

export function Examples() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Exemplos de bios ✍️
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example) => (
            <Card key={example.network} hover>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${example.color} rounded-2xl opacity-50`}
              />
              <div className="relative">
                <span className="text-sm font-medium text-gray-300">
                  {example.network}
                </span>
                <p className="mt-3 text-gray-100 leading-relaxed">
                  &quot;{example.bio}&quot;
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
