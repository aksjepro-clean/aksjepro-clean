import Stripe from "stripe";

export const runtime = "nodejs";

export async function POST() {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      maxNetworkRetries: 1,
    });

    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/pricing`,
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error full:", {
      message: error?.message,
      type: error?.type,
      code: error?.code,
      stack: error?.stack,
    });

    return Response.json(
      {
        error: error?.message || "Noe gikk galt med Stripe",
        type: error?.type || null,
        code: error?.code || null,
      },
      { status: 500 }
    );
  }
}