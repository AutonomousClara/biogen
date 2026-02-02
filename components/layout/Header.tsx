import Link from "next/link";

interface HeaderProps {
  showConfig?: boolean;
  onConfigClick?: () => void;
}

export function Header({ showConfig = false, onConfigClick }: HeaderProps) {
  return (
    <header className="w-full py-4 px-6">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold gradient-text">BioGen</span>
          <span className="text-xl">✨</span>
        </Link>
        {showConfig && (
          <button
            onClick={onConfigClick}
            className="p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Configurações"
          >
            ⚙️
          </button>
        )}
      </div>
    </header>
  );
}
