export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
            AksjePro
          </p>

          <h1 className="mt-4 text-5xl font-bold">Premium</h1>

          <p className="mt-6 text-lg text-zinc-300 max-w-2xl mx-auto leading-8">
            Lås opp flere signaler, bedre oversikt og et mer komplett dashboard.
          </p>
        </div>

        <div className="mt-14 max-w-2xl mx-auto rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
          <p className="text-zinc-400">Pris</p>
          <h2 className="mt-3 text-5xl font-bold">30 kr</h2>
          <p className="mt-2 text-zinc-400">per måned</p>

          <div className="mt-8 space-y-4 text-zinc-300">
            <p>✓ Premium dashboard</p>
            <p>✓ Flere signaler og analyser</p>
            <p>✓ Bedre markedsoversikt</p>
            <p>✓ Tilgang så lenge abonnementet er aktivt</p>
          </div>

          <a
            href="https://buy.stripe.com/4gM00i5OW9IF0zc5vMaMU00"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block w-full rounded-2xl bg-white px-6 py-4 text-center text-black font-semibold hover:opacity-90"
          >
            Kjøp premium
          </a>

          <p className="mt-6 text-sm text-zinc-500 leading-6">
            Abonnementet fornyes automatisk hver måned til det sies opp.
            Tjenesten gir markedsdata, tekniske signaler og generell informasjon.
            Dette er ikke personlig investeringsrådgivning.
          </p>
        </div>

        <div className="mt-10 text-center">
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