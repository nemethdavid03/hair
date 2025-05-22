import { NextResponse } from "next/server"
import Stripe from "stripe"

export async function POST(req: Request) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY

  if (!stripeSecretKey) {
    console.error("Stripe secret key is not set in environment variables")
    return NextResponse.json({ error: "Stripe secret key is not set" }, { status: 500 })
  }

  try {
    const stripe = new Stripe(stripeSecretKey)

    const { quantity = 1 } = await req.json()

    const origin = req.headers.get("origin") || "http://localhost:3000"
    console.log(`Creating checkout session with origin: ${origin}`)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: "price_1Qa0bIFJpj2GDoVQ0uyNSkPa", // Your live Price ID
          quantity,
        },
      ],
      mode: "payment",
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "GB", "AU"],
      },
      phone_number_collection: {
        enabled: true,
      },
      metadata: {
        source: "website_direct",
        product_name: "ReviveHair Growth Formula",
      },
    })

    // Return both sessionId and checkoutUrl for compatibility
    return NextResponse.json({
      sessionId: session.id,
      checkoutUrl: session.url,
    })
  } catch (error: any) {
    console.error("Stripe checkout session creation error:", error)

    return NextResponse.json(
      {
        error: "Error creating checkout session",
        details: error.message || "Unknown error",
        type: error.type || "unknown_error",
      },
      { status: 500 },
    )
  }
}
