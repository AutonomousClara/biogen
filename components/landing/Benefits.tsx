const benefits = [
  {
    icon: "⚡",
    title: "Rápido",
    description: "Sua bio pronta em segundos. Sem complicação.",
  },
  {
    icon: "🎨",
    title: "Personalizado",
    description: "Do seu jeito. Escolha o tom e a vibe.",
  },
  {
    icon: "🔄",
    title: "Variações",
    description: "Não gostou? Gere outra! Quantas quiser.",
  },
];

export function Benefits() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Por que BioGen? 🤔
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="text-center p-6 rounded-2xl hover:bg-gray-800/30 transition-colors"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
