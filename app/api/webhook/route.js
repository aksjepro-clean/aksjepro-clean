import Stripe from "stripe";
import { adminDb } from "@/lib/firebase-admin";

export const runtime = "nodejs";

export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const signature = req.headers.get("stripe-signature");
  const body = await req.text();

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature error:", err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const email =
        session.customer_details?.email || session.customer_email || null;

      if (!email) {
        console.error("Ingen e-post funnet i Stripe-session");
        return new Response("Ingen e-post", { status: 400 });
      }

      const usersRef = adminDb.collection("users");
      const snapshot = await usersRef.where("email", "==", email).get();

      if (snapshot.empty) {
        console.error("Fant ingen bruker med e-post:", email);
        return new Response("Bruker ikke funnet", { status: 404 });
      }

      const updates = snapshot.docs.map((docSnap) =>
        docSnap.ref.update({
          premium: true,
          premiumUpdatedAt: new Date().toISOString(),
        })
      );

      await Promise.all(updates);

      console.log("Premium aktivert for:", email);
    }

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("Webhook processing error:", err);
    return new Response("Server error", { status: 500 });
  }
}