"use client";

export function Footer() {
  return (
    <footer className="border-t border-neutral-900 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-neutral-600">
            © 2026 ZACK ZATI
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/zzatiz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-neutral-600 hover:text-white transition-colors"
            >
              GITHUB
            </a>
            <a
              href="https://linkedin.com/in/xavier-zati"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-neutral-600 hover:text-white transition-colors"
            >
              LINKEDIN
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-mono text-xs text-neutral-600 hover:text-white transition-colors"
            >
              TOP ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
