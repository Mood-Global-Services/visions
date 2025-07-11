"use client"

import type React from "react"

import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CreditCard, Wallet, Loader2, CheckCircle, AlertCircle } from "lucide-react"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface Work {
  id: number
  title: string
  price: string
  fiatPrice: string
  image: string
}

interface PurchaseModalProps {
  work: Work
}

interface ShippingDetails {
  name: string
  email: string
  address: string
}

function StripePaymentForm({
  work,
  onSuccess,
  onError,
  shippingDetails,
}: {
  work: Work
  onSuccess: () => void
  onError: (error: string) => void
  shippingDetails: ShippingDetails
}) {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)

    try {
      // Extract price from fiatPrice string (e.g., "$4,200" -> 4200)
      const amount = Number.parseFloat(work.fiatPrice.replace(/[$,]/g, ""))

      // Create payment intent
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          workId: work.id,
          workTitle: work.title,
        }),
      })

      const { clientSecret, paymentIntentId } = await response.json()

      if (!clientSecret) {
        throw new Error("Failed to create payment intent")
      }

      // Confirm payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
          billing_details: {
            name: shippingDetails.name,
            email: shippingDetails.email,
          },
        },
      })

      if (error) {
        onError(error.message || "Payment failed")
      } else if (paymentIntent.status === "succeeded") {
        // Confirm with backend
        await fetch("/api/confirm-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            paymentIntentId: paymentIntent.id,
            shippingDetails,
          }),
        })

        onSuccess()
      }
    } catch (error) {
      onError(error instanceof Error ? error.message : "Payment failed")
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" placeholder="Your full name" required />
        </div>
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" type="email" placeholder="your@email.com" required />
        </div>
        <div>
          <Label htmlFor="address">Shipping Address *</Label>
          <Textarea id="address" placeholder="Street address, city, postal code, country" required />
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="newsletter" className="rounded" />
          <Label htmlFor="newsletter" className="text-sm">
            Subscribe to exhibition updates
          </Label>
        </div>
        <div className="p-4 border rounded-lg">
          <Label className="text-sm font-medium mb-2 block">Card Details</Label>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
              },
            }}
          />
        </div>
      </div>

      <Button type="submit" disabled={!stripe || isProcessing} className="w-full">
        {isProcessing ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Processing Payment...
          </>
        ) : (
          `Pay ${work.fiatPrice}`
        )}
      </Button>
    </form>
  )
}

export default function PurchaseModal({ work }: PurchaseModalProps) {
  const [paymentMethod, setPaymentMethod] = useState("crypto")
  const [step, setStep] = useState(1)
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
    name: "",
    email: "",
    address: "",
  })
  const [paymentError, setPaymentError] = useState<string | null>(null)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const handleShippingChange = (field: keyof ShippingDetails, value: string) => {
    setShippingDetails((prev) => ({ ...prev, [field]: value }))
  }

  const isShippingValid = shippingDetails.name && shippingDetails.email && shippingDetails.address

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true)
    setStep(3)
  }

  const handlePaymentError = (error: string) => {
    setPaymentError(error)
  }

  const handleCryptoPayment = () => {
    // Simulate crypto payment completion
    setTimeout(() => {
      setStep(3)
      setPaymentSuccess(true)
    }, 2000)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gray-900 text-white hover:bg-gray-800">Purchase Artwork</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        {step === 1 && (
          <Card className="border-0 shadow-none">
            <CardHeader>
              <CardTitle className="text-xl font-light">{work.title}</CardTitle>
              <CardDescription>Select your preferred payment method</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-3 p-4 border rounded-lg">
                  <RadioGroupItem value="crypto" id="crypto" />
                  <Label htmlFor="crypto" className="flex items-center space-x-3 cursor-pointer flex-1">
                    <Wallet className="w-5 h-5" />
                    <div>
                      <div className="font-medium">Cryptocurrency</div>
                      <div className="text-sm text-gray-500">{work.price}</div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 border rounded-lg">
                  <RadioGroupItem value="fiat" id="fiat" />
                  <Label htmlFor="fiat" className="flex items-center space-x-3 cursor-pointer flex-1">
                    <CreditCard className="w-5 h-5" />
                    <div>
                      <div className="font-medium">Credit Card</div>
                      <div className="text-sm text-gray-500">{work.fiatPrice}</div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
            <CardFooter>
              <Button onClick={() => setStep(2)} className="w-full">
                Continue
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 2 && (
          <Card className="border-0 shadow-none">
            <CardHeader>
              <CardTitle className="text-xl font-light">
                {paymentMethod === "crypto" ? "Complete Payment" : "Payment & Shipping"}
              </CardTitle>
              <CardDescription>
                {paymentMethod === "crypto"
                  ? "Send payment and provide shipping details"
                  : "Enter your payment and shipping information"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {paymentError && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{paymentError}</AlertDescription>
                </Alert>
              )}

              {paymentMethod === "crypto" ? (
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium mb-2">Send {work.price} to:</p>
                    <code className="text-xs bg-white p-2 rounded border block break-all">
                      0x742d35Cc6634C0532925a3b8D4C9db4C4C4C4C4C
                    </code>
                    <p className="text-xs text-gray-500 mt-2">Transaction will be verified automatically</p>
                  </div>
                  <Separator />
                </div>
              ) : (
                <Elements stripe={stripePromise}>
                  <StripePaymentForm
                    work={work}
                    onSuccess={handlePaymentSuccess}
                    onError={handlePaymentError}
                    shippingDetails={shippingDetails}
                  />
                  <Separator />
                </Elements>
              )}

              {paymentMethod === "crypto" && (
                <Button onClick={handleCryptoPayment} disabled={!isShippingValid} className="w-full">
                  Confirm Payment Sent
                </Button>
              )}
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <Card className="border-0 shadow-none">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <CardTitle className="text-xl font-light">Purchase Confirmed</CardTitle>
              </div>
              <CardDescription>Thank you for your purchase!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">What happens next?</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Confirmation email sent to {shippingDetails.email}</li>
                  <li>• Digital certificate will be transferred to your wallet</li>
                  <li>• Physical artwork will be shipped within 3-5 business days</li>
                  <li>• You'll receive tracking information once shipped</li>
                </ul>
              </div>

              <div className="text-sm text-gray-600">
                <p className="font-medium mb-1">Purchase Details:</p>
                <p>{work.title}</p>
                <p>Payment: {paymentMethod === "crypto" ? work.price : work.fiatPrice}</p>
                <p>Method: {paymentMethod === "crypto" ? "Cryptocurrency" : "Credit Card"}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => {
                  setStep(1)
                  setPaymentError(null)
                  setPaymentSuccess(false)
                  setShippingDetails({ name: "", email: "", address: "" })
                }}
                variant="outline"
                className="w-full"
              >
                Close
              </Button>
            </CardFooter>
          </Card>
        )}
      </DialogContent>
    </Dialog>
  )
}
