import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    // Check if Stripe secret key is available
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY

    if (!stripeSecretKey) {
      console.error("STRIPE_SECRET_KEY environment variable is not set")
      return NextResponse.json({ error: "Payment processing is not configured" }, { status: 500 })
    }

    // Dynamically import Stripe to avoid build-time issues
    const Stripe = (await import("stripe")).default

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2024-06-20",
    })

    const { amount, currency = "usd", workId, workTitle } = await request.json()

    // Validate required fields
    if (!amount || !workId || !workTitle) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe expects amount in cents
      currency,
      metadata: {
        workId: workId.toString(),
        workTitle,
      },
      automatic_payment_methods: {
        enabled: true,
      },
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    })
  } catch (error) {
    console.error("Error creating payment intent:", error)
    return NextResponse.json({ error: "Failed to create payment intent" }, { status: 500 })
  }
}
