export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-md mx-auto px-6 py-20">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
            AksjePro
          </p>

          <h1 className="mt-4 text-4xl font-bold">Logg inn</h1>

          <p className="mt-4 text-zinc-400">
            Logg inn for å få tilgang til premium dashboard og abonnement.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="block text-sm text-zinc-400 mb-2">E-post</label>
              <input
                type="email"
                placeholder="navn@email.com"
                className="w-full rounded-2xl border border-zinc-800 bg-black px-4 py-3 outline-none focus:border-zinc-600"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-2">Passord</label>
              <input
                type="password"
                placeholder="Skriv passord"
                className="w-full rounded-2xl border border-zinc-800 bg-black px-4 py-3 outline-none focus:border-zinc-600"
              />
            </div>

            <button
              type="button"
              className="w-full rounded-2xl bg-white px-6 py-4 text-black font-semibold hover:opacity-90"
            >
              Logg inn
            </button>
          </form>

          <p className="mt-6 text-sm text-zinc-500">
            Har du ikke konto ennå? Velg premium for å komme i gang.
          </p>
        </div>
      </section>
    </main>
  );
}