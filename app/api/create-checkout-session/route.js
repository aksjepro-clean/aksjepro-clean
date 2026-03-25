import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/pricing",
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return Response.json(
      { error: error.message || "Noe gikk galt med Stripe" },
      { status: 500 }
    );
  }
}