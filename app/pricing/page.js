"use client";

export default function PricingPage() {

  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Noe gikk galt");
      }
    } catch (err) {
      alert("Feil med betaling");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-2xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-bold text-center">
          AksjePro Premium
        </h1>

        <p className="mt-6 text-center text-zinc-400">
          Få tilgang til premium dashboard og signaler.
        </p>

        <div className="mt-10 border border-zinc-800 p-8 rounded-2xl text-center">

          <h2 className="text-5xl font-bold">30 kr</h2>
          <p className="text-zinc-400 mt-2">per måned</p>

          <button
            onClick={handleCheckout}
            className="mt-8 w-full bg-white text-black py-4 rounded-2xl font-semibold"
          >
            Kjøp premium
          </button>

        </div>

      </section>
    </main>
  );
}