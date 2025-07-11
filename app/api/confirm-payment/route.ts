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

    const { paymentIntentId, shippingDetails } = await request.json()

    // Validate required fields
    if (!paymentIntentId) {
      return NextResponse.json({ error: "Payment intent ID is required" }, { status: 400 })
    }

    // Retrieve the payment intent to confirm it was successful
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId)

    if (paymentIntent.status === "succeeded") {
      // Here you would typically:
      // 1. Save the order to your database
      // 2. Send confirmation emails
      // 3. Update inventory
      // 4. Generate NFT/digital certificate

      console.log("Payment successful:", {
        paymentIntentId,
        amount: paymentIntent.amount,
        workId: paymentIntent.metadata.workId,
        workTitle: paymentIntent.metadata.workTitle,
        shippingDetails,
      })

      return NextResponse.json({
        success: true,
        paymentIntent: {
          id: paymentIntent.id,
          amount: paymentIntent.amount,
          status: paymentIntent.status,
        },
      })
    } else {
      return NextResponse.json({ error: "Payment not completed" }, { status: 400 })
    }
  } catch (error) {
    console.error("Error confirming payment:", error)
    return NextResponse.json({ error: "Failed to confirm payment" }, { status: 500 })
  }
}
