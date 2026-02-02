export function Footer() {
  return (
    <footer className="w-full py-8 px-6 mt-auto">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-500">
          <span>100% Grátis</span>
          <span className="hidden sm:inline">•</span>
          <span>Seus dados ficam com você</span>
        </div>
        <p className="mt-3 text-sm text-gray-600">
          Feito com{" "}
          <span className="text-pink-500">💜</span> por{" "}
          <a
            href="https://autonomousclara.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Clara
          </a>
        </p>
      </div>
    </footer>
  );
}
