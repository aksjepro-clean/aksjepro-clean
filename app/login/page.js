"use client";

import { useState } from "react";
import { auth, db } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function LoginPage() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async () => {
    try {
      if (mode === "signup") {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await setDoc(doc(db, "users", userCredential.user.uid), {
          email: userCredential.user.email,
          premium: false,
          createdAt: new Date().toISOString(),
        });

        alert("Konto opprettet!");
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));

        if (!userDoc.exists()) {
          await setDoc(doc(db, "users", userCredential.user.uid), {
            email: userCredential.user.email,
            premium: false,
            createdAt: new Date().toISOString(),
          });
        }

        alert("Innlogging vellykket!");
      }

      window.location.href = "/dashboard";
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-md mx-auto px-6 py-20">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
            AksjePro
          </p>

          <h1 className="mt-4 text-4xl font-bold">
            {mode === "login" ? "Logg inn" : "Opprett konto"}
          </h1>

          <p className="mt-4 text-zinc-400">
            {mode === "login"
              ? "Logg inn for å få tilgang til premium dashboard og abonnement."
              : "Lag en konto for å komme i gang med AksjePro."}
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <label className="block text-sm text-zinc-400 mb-2">E-post</label>
              <input
                type="email"
                placeholder="navn@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-zinc-800 bg-black px-4 py-3 outline-none focus:border-zinc-600"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-2">Passord</label>
              <input
                type="password"
                placeholder="Skriv passord"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-2xl border border-zinc-800 bg-black px-4 py-3 outline-none focus:border-zinc-600"
              />
            </div>

            <button
              type="button"
              onClick={handleAuth}
              className="w-full rounded-2xl bg-white px-6 py-4 text-black font-semibold hover:opacity-90"
            >
              {mode === "login" ? "Logg inn" : "Opprett konto"}
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="mt-6 text-sm text-zinc-400 underline"
          >
            {mode === "login"
              ? "Har du ikke konto? Opprett konto"
              : "Har du allerede konto? Logg inn"}
          </button>
        </div>
      </section>
    </main>
  );
}