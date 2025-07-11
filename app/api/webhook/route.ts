import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    // Check if required environment variables are available
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

    if (!stripeSecretKey) {
      console.error("STRIPE_SECRET_KEY environment variable is not set")
      return NextResponse.json({ error: "Webhook processing is not configured" }, { status: 500 })
    }

    if (!webhookSecret) {
      console.error("STRIPE_WEBHOOK_SECRET environment variable is not set")
      return NextResponse.json({ error: "Webhook secret is not configured" }, { status: 500 })
    }

    // Dynamically import Stripe to avoid build-time issues
    const Stripe = (await import("stripe")).default

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2024-06-20",
    })

    const body = await request.text()
    const signature = request.headers.get("stripe-signature")

    if (!signature) {
      return NextResponse.json({ error: "Missing stripe signature" }, { status: 400 })
    }

    let event: any

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error("Webhook signature verification failed:", err)
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
    }

    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object
        console.log("Payment succeeded:", paymentIntent.id)

        // Here you would typically:
        // 1. Update your database
        // 2. Send confirmation emails
        // 3. Fulfill the order
        // 4. Generate NFT/digital certificate

        break

      case "payment_intent.payment_failed":
        const failedPayment = event.data.object
        console.log("Payment failed:", failedPayment.id)

        // Handle failed payment
        break

      default:
        console.log(`Unhandled event type ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 })
  }
}
