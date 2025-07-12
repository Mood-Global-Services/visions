"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogTitle, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CreditCard, Wallet, CheckCircle, AlertCircle } from "lucide-react"
import { DetailedWork } from "@/data/artists"
import Image from "next/image"
interface PurchaseModalProps {
  work: DetailedWork
}

export default function PurchaseModalFallback({ work }: PurchaseModalProps) {
  const [paymentMethod, setPaymentMethod] = useState("crypto")
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    newsletter: false,
    terms: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const isFormValid = formData.name && formData.email && formData.address

  const handleSubmit = () => {
    if (isFormValid) {
      // Simulate purchase completion
      console.log("Purchase submitted:", { work, paymentMethod, formData })
      setStep(3)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gray-900 text-white hover:bg-gray-800">Purchase Artwork</Button>
      </DialogTrigger>
      <DialogTitle></DialogTitle>
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
              <CardTitle className="text-xl font-light">Complete Your Purchase</CardTitle>
              <CardDescription>
                {paymentMethod === "crypto"
                  ? "Send payment and provide your details"
                  : "Enter your payment and shipping information"}
              </CardDescription>
              <CardDescription>
                {
                  paymentMethod === "crypto" && (
                    <div className="flex flex-row items-center gap-1">
                      <Image src="https://cdn3.emoji.gg/emojis/70506-bitcoin.png" alt="bitcoin" width={20} height={20} />
                      <Image src="https://cdn3.emoji.gg/emojis/5819-eth.png" alt="ethereum" width={20} height={20} />
                      <Image src="https://cdn3.emoji.gg/emojis/6121-tether.png" alt="tether" width={20} height={20} />
                    </div>
                  )
                }
                {
                  paymentMethod === "fiat" && (
                    <div className="flex flex-row items-center gap-1">
                      <Image src="https://cdn3.emoji.gg/emojis/9437-visa.png" alt="visa" width={30} height={30} />
                      <Image src="https://cdn3.emoji.gg/emojis/6473-mastercard.png" alt="mastercard" width={30} height={30} />
                    </div>
                  )
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {paymentMethod === "crypto" && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium mb-2">Send {work.price} to:</p>
                  <code className="text-xs bg-white p-2 rounded border block break-all">
                    0x742d35Cc6634C0532925a3b8D4C9db4C4C4C4C4C
                  </code>
                  <p className="text-xs text-gray-500 mt-2">Transaction will be verified automatically</p>
                </div>
              )}

              {paymentMethod === "fiat" && (
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Credit card processing is currently being configured. Please use cryptocurrency or contact us
                    directly.
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-4">
                <h4 className="font-medium">Your Information</h4>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="address">Shipping Address *</Label>
                  <Textarea
                    id="address"
                    placeholder="Street address, city, postal code, country"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={(e) => handleInputChange("newsletter", e.target.checked)}
                    className="rounded"
                  />
                  <Label htmlFor="newsletter" className="text-sm">
                    Subscribe to exhibition updates
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.terms}
                    onChange={(e) => handleInputChange("terms", e.target.checked)}
                    className="rounded"
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I accept the terms and conditions & privacy policy
                  </Label>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSubmit} disabled={!isFormValid || paymentMethod === "fiat"} className="w-full">
                {paymentMethod === "crypto" ? "Confirm Purchase" : "Payment Processing Unavailable"}
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 3 && (
          <Card className="border-0 shadow-none">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <CardTitle className="text-xl font-light">Purchase Initiated</CardTitle>
              </div>
              <CardDescription>Thank you for your interest!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">What happens next?</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• We'll verify your {paymentMethod === "crypto" ? "cryptocurrency" : "payment"} transaction</li>
                  <li>• Confirmation email will be sent to {formData.email}</li>
                  <li>• Digital certificate will be prepared for transfer</li>
                  <li>• We'll contact you within 24 hours with next steps</li>
                </ul>
              </div>

              <div className="text-sm text-gray-600">
                <p className="font-medium mb-1">Purchase Details:</p>
                <p>{work.title}</p>
                <p>Price: {paymentMethod === "crypto" ? work.price : work.fiatPrice}</p>
                <p>Method: {paymentMethod === "crypto" ? "Cryptocurrency" : "Credit Card"}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => {
                  setStep(1)
                  setFormData({ name: "", email: "", address: "", newsletter: false, terms: false })
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
