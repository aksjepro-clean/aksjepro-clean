export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
          AksjePro
        </p>

        <h1 className="mt-4 text-5xl font-bold">Betaling fullført</h1>

        <p className="mt-6 text-zinc-300 leading-8">
          Takk for kjøpet. Abonnementet ditt er registrert, og du er nå ett steg
          nærmere full tilgang til AksjePro Premium.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/dashboard"
            className="rounded-2xl bg-white px-6 py-3 text-black font-semibold hover:opacity-90"
          >
            Gå til dashboard
          </a>

          <a
            href="/"
            className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold hover:bg-zinc-900"
          >
            Til forsiden
          </a>
        </div>
      </section>
    </main>
  );
}