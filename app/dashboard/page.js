"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const stocks = [
  { name: "Equinor", symbol: "EQNR", price: "320.40", change: "+1.8%", signal: "Bullish" },
  { name: "DNB", symbol: "DNB", price: "214.80", change: "-0.4%", signal: "Neutral" },
  { name: "Telenor", symbol: "TEL", price: "128.20", change: "+0.9%", signal: "Bullish" },
  { name: "Yara", symbol: "YAR", price: "356.10", change: "-1.1%", signal: "Bearish" },
  { name: "Aker BP", symbol: "AKRBP", price: "289.70", change: "+2.2%", signal: "Bullish" },
];

const chartData = [
  { day: "Man", price: 298 },
  { day: "Tir", price: 305 },
  { day: "Ons", price: 301 },
  { day: "Tor", price: 312 },
  { day: "Fre", price: 320 },
  { day: "Lør", price: 318 },
  { day: "Søn", price: 325 },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
              AksjePro
            </p>
            <h1 className="mt-3 text-4xl font-bold">Premium Dashboard</h1>
            <p className="mt-3 text-zinc-400 max-w-2xl">
              Få oversikt over markedet, enkle signaler og prisutvikling i et
              ryddig dashboard.
            </p>
          </div>

          <div className="flex gap-3 flex-wrap">
            <a
              href="/pricing"
              className="rounded-2xl bg-white px-5 py-3 text-black font-semibold hover:opacity-90"
            >
              Oppgrader
            </a>
            <a
              href="/"
              className="rounded-2xl border border-zinc-700 px-5 py-3 font-semibold hover:bg-zinc-900"
            >
              Til forsiden
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-zinc-400">Markedstrend</p>
            <h2 className="mt-2 text-3xl font-bold text-green-400">Positiv</h2>
            <p className="mt-2 text-sm text-zinc-500">Siste 7 dager</p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-zinc-400">Sterkeste signal</p>
            <h2 className="mt-2 text-3xl font-bold">Equinor</h2>
            <p className="mt-2 text-sm text-zinc-500">Bullish momentum</p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-zinc-400">Premiumstatus</p>
            <h2 className="mt-2 text-3xl font-bold text-yellow-400">Gratis</h2>
            <p className="mt-2 text-sm text-zinc-500">Lås opp mer analyse</p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-zinc-400">Varselnivå</p>
            <h2 className="mt-2 text-3xl font-bold">Moderat</h2>
            <p className="mt-2 text-sm text-zinc-500">Normal markedsuro</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h3 className="text-2xl font-semibold">Prisgraf</h3>
                <p className="mt-2 text-zinc-400">
                  Eksempel på prisutvikling siste 7 dager
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 px-4 py-2 text-sm text-zinc-400">
                Equinor
              </div>
            </div>

            <div className="mt-8 h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis dataKey="day" stroke="#71717a" />
                  <YAxis stroke="#71717a" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#ffffff"
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <h3 className="text-2xl font-semibold">Signalpanel</h3>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-zinc-900 p-4">
                <p className="text-sm text-zinc-400">Signal</p>
                <p className="mt-2 text-xl font-semibold text-green-400">
                  Bullish
                </p>
              </div>

              <div className="rounded-2xl bg-zinc-900 p-4">
                <p className="text-sm text-zinc-400">Momentum</p>
                <p className="mt-2 text-xl font-semibold">Sterkt</p>
              </div>

              <div className="rounded-2xl bg-zinc-900 p-4">
                <p className="text-sm text-zinc-400">RSI-status</p>
                <p className="mt-2 text-xl font-semibold">Nøytral</p>
              </div>

              <div className="rounded-2xl bg-zinc-900 p-4">
                <p className="text-sm text-zinc-400">Trend</p>
                <p className="mt-2 text-xl font-semibold">Oppadgående</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h3 className="text-2xl font-semibold">Aksjeoversikt</h3>
              <p className="mt-2 text-zinc-400">
                Eksempeloversikt over utvalgte aksjer
              </p>
            </div>

            <a
              href="/pricing"
              className="rounded-2xl border border-zinc-700 px-5 py-3 font-semibold hover:bg-zinc-900"
            >
              Lås opp full tilgang
            </a>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400">
                  <th className="py-3 pr-4">Selskap</th>
                  <th className="py-3 pr-4">Ticker</th>
                  <th className="py-3 pr-4">Pris</th>
                  <th className="py-3 pr-4">Endring</th>
                  <th className="py-3 pr-4">Signal</th>
                </tr>
              </thead>
              <tbody>
                {stocks.map((stock) => (
                  <tr key={stock.symbol} className="border-b border-zinc-900">
                    <td className="py-4 pr-4 font-medium">{stock.name}</td>
                    <td className="py-4 pr-4 text-zinc-400">{stock.symbol}</td>
                    <td className="py-4 pr-4">{stock.price} kr</td>
                    <td className="py-4 pr-4">{stock.change}</td>
                    <td className="py-4 pr-4">{stock.signal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
          <h3 className="text-2xl font-semibold">Viktig informasjon</h3>
          <p className="mt-3 text-zinc-400 leading-7">
            AksjePro gir markedsdata, tekniske signaler og generell informasjon.
            Dette er ikke personlig investeringsrådgivning og skal ikke forstås
            som en anbefaling til å kjøpe eller selge finansielle instrumenter.
          </p>
        </div>
      </section>
    </main>
  );
}