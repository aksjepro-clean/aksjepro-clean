export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
            AksjePro
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
            Få markedsoversikt og tekniske signaler på sekunder.
          </h1>

          <p className="mt-6 text-lg text-zinc-300 leading-8">
            AksjePro viser prisutvikling, trend og enkle signaler i et ryddig
            dashboard. Se markedet raskt, følg utviklingen og lås opp premium
            analyser.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/dashboard"
              className="rounded-2xl bg-white px-6 py-3 text-black font-semibold hover:opacity-90"
            >
              Se dashboard
            </a>

            <a
              href="/pricing"
              className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold hover:bg-zinc-900"
            >
              Se premium
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="text-xl font-semibold">Live oversikt</h2>
            <p className="mt-3 text-zinc-400">
              Følg aksjer, prisutvikling og markedsbevegelser i ett enkelt
              system.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="text-xl font-semibold">Tekniske signaler</h2>
            <p className="mt-3 text-zinc-400">
              Se enkle signaler som trend, momentum og markedsoverblikk.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="text-xl font-semibold">Premium tilgang</h2>
            <p className="mt-3 text-zinc-400">
              Lås opp mer innsikt, bedre oversikt og ekstra funksjoner.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
          <h3 className="text-2xl font-semibold">Viktig informasjon</h3>
          <p className="mt-4 text-zinc-400 leading-7">
            AksjePro gir markedsdata, tekniske signaler og generell informasjon.
            Tjenesten er ikke personlig investeringsrådgivning og skal ikke
            forstås som en anbefaling til å kjøpe eller selge finansielle
            instrumenter.
          </p>
        </div>
      </section>
    </main>
  );
}