import "./globals.css";

export const metadata = {
  title: "AksjePro",
  description: "Markedsdata, signaler og premium dashboard for aksjer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body className="bg-black text-white">
        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold tracking-wide">
              AksjePro
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
              <a href="/" className="hover:text-white">
                Hjem
              </a>
              <a href="/dashboard" className="hover:text-white">
                Dashboard
              </a>
              <a href="/pricing" className="hover:text-white">
                Premium
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="/pricing"
                className="rounded-2xl border border-zinc-700 px-4 py-2 text-sm font-semibold hover:bg-zinc-900"
              >
                Premium
              </a>

              <a
                href="/login"
                className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
              >
                Logg inn
              </a>
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}