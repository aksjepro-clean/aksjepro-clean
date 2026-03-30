"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
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
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPremium, setIsPremium] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserEmail(user.email || "");

        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setIsPremium(userSnap.data().premium === true);
        }

        setLoading(false);
      } else {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    alert("Du er logget ut");
    router.push("/login");
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-zinc-400">Laster dashboard...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
              AksjePro
            </p>
            <h1 className="mt-3 text-4xl font-bold">Dashboard</h1>
            <p className="mt-3 text-zinc-400 max-w-2xl">
              Få oversikt over markedet, signaler og prisutvikling.
            </p>
            {userEmail && (
              <p className="mt-3 text-sm text-green-400">
                Logget inn som: {userEmail}
              </p>
            )}
          </div>

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={handleLogout}
              className="rounded-2xl bg-white px-5 py-3 text-black font-semibold hover:opacity-90"
            >
              Logg ut
            </button>
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
            <p className="text-zinc-400">Premiumstatus</p>
            <h2 className="mt-2 text-3xl font-bold text-yellow-400">
              {isPremium ? "Premium" : "Gratis"}
            </h2>
            <p className="mt-2 text-sm text-zinc-500">
              {isPremium ? "Full tilgang aktiv" : "Oppgrader for full tilgang"}
            </p>
          </div>

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
            <p className="text-zinc-400">Varselnivå</p>
            <h2 className="mt-2 text-3xl font-bold">Moderat</h2>
            <p className="mt-2 text-sm text-zinc-500">Normal markedsuro</p>
          </div>
        </div>

        {isPremium ? (
          <>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold">Prisgraf</h3>
                    <p className="mt-2 text-zinc-400">
                      Premium grafdata siste 7 dager
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
              <h3 className="text-2xl font-semibold">Aksjeoversikt</h3>

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
          </>
        ) : (
          <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-950 p-10 text-center">
            <h3 className="text-3xl font-bold">Premium er låst</h3>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto leading-7">
              Du er logget inn, men denne kontoen har ikke premium ennå.
              Oppgrader for å få tilgang til grafer, signaler og full oversikt.
            </p>

            <a
              href="/pricing"
              className="mt-8 inline-block rounded-2xl bg-white px-6 py-4 text-black font-semibold hover:opacity-90"
            >
              Oppgrader til premium
            </a>
          </div>
        )}
      </section>
    </main>
  );
}