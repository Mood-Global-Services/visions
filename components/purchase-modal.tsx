'use client'

import { useState, useEffect } from 'react'
import {
  CrossmintProvider,
  CrossmintCheckoutProvider,
  CrossmintEmbeddedCheckout,
  useCrossmintCheckout,
} from '@crossmint/client-sdk-react-ui'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { DetailedWork } from '@/data/artists'

interface PurchaseModalProps {
  work: DetailedWork
  price: string
}

//–– Inner: must live inside providers so hook works ––
function EmbeddedCheckoutInner({
  work,
  price,
  shippingEmail,
  onComplete,
  onError,
}: {
  work: DetailedWork
  price: string
  shippingEmail: string
  onComplete: () => void
  onError: (err: Error) => void
}) {
  const { order } = useCrossmintCheckout()

  useEffect(() => {
    if (!order) return

    if (order.phase === 'completed') {
      onComplete()
      return
    }

    if (order.phase === 'payment') {
      const s = order.payment.status
      const ok =
        s === 'awaiting-payment' ||
        s === 'in-progress' ||
        s === 'completed'

      if (!ok) {
        onError(new Error(`Payment failed: ${s}`))
      }
    }
  }, [order, onComplete, onError])

  return (
    <CrossmintEmbeddedCheckout
      lineItems={[
        {
          tokenLocator: `base-sepolia:${process.env.NEXT_PUBLIC_SEPOLIA_CONTRACT_ADDRESS!}:${work.tokenId}`,
          callData: {
            totalPrice: price,
            quantity: 1,
          },
        },
      ]}
      payment={{
        crypto: { enabled: true },
        fiat: { enabled: true },
      }}
      recipient={{ email: shippingEmail }}
    />
  )
}

//–– Step 2 wrapper that provides context ––
function EmbeddedCheckoutStep({
  work,
  price,
  shippingEmail,
  onComplete,
  onError,
}: {
  work: DetailedWork
  price: string
  shippingEmail: string
  onComplete: () => void
  onError: (err: Error) => void
}) {
  const clientApiKey = process.env.NEXT_PUBLIC_CROSSMINT_STAGING_CLIENT_API_KEY!

  return (
    <CrossmintProvider apiKey={clientApiKey}>
      <CrossmintCheckoutProvider>
        <EmbeddedCheckoutInner
          work={work}
          price={price}
          shippingEmail={shippingEmail}
          onComplete={onComplete}
          onError={onError}
        />
      </CrossmintCheckoutProvider>
    </CrossmintProvider>
  )
}

export default function PurchaseModal({ work, price }: PurchaseModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [shipping, setShipping] = useState({
    email: '',
    address: '',
  })
  const [error, setError] = useState<string | null>(null)

  const isShippingValid =
    Boolean(shipping.email && shipping.address)

  const handleChange =
    (field: keyof typeof shipping) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setShipping((s) => ({ ...s, [field]: e.target.value }))

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gray-900 text-white hover:bg-gray-800">
          Purchase Artwork
        </Button>
      </DialogTrigger>

      <DialogTitle></DialogTitle>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        {/* STEP 1: Shipping form */}
        {step === 1 && (
          <>
            <h2 className="text-xl font-light">{work.title}</h2>
            <div className="flex flex-row items-center space-x-1 mb-6">
              <h5 className="text-lg font-medium">{price}ETH</h5>
              <h6 className="text-gray-500">({work.fiatPrice})</h6>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                <Input
                  id="email"
                  type="email"
                  value={shipping.email}
                  onChange={handleChange('email')}
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="address">Shipping Address <span className="text-red-500">*</span></Label>
                <Textarea
                  id="address"
                  value={shipping.address}
                  onChange={handleChange('address')}
                  placeholder="Street, City, Postal Code, Country"
                  required
                />
              </div>
            </div>

            <Button
              disabled={!isShippingValid}
              onClick={() => setStep(2)}
              className="w-full mt-6"
            >
              Continue to Checkout
            </Button>
          </>
        )}

        {/* STEP 2: Crossmint embed */}
        {step === 2 && (
          <div className="flex flex-col items-center justify-center h-full py-6" >
            {error && (
              <div className="flex items-center mb-4 text-red-600">
                <AlertCircle className="w-5 h-5 mr-2" />
                <span>{error}</span>
              </div>
            )}
            <EmbeddedCheckoutStep
              work={work}
              price={price}
              shippingEmail={shipping.email}
              onComplete={() => setStep(3)}
              onError={(err) => setError(err.message)}
            />
            <Separator className="my-4" />
            <Button
              variant="outline"
              onClick={() => {
                setError(null)
                setStep(1)
              }}
              className="w-full"
            >
              ← Back to Shipping Info
            </Button>
          </div>
        )}

        {/* STEP 3: Confirmation */}
        {step === 3 && (
          <div className="text-center space-y-6">
            <CheckCircle className="mx-auto w-12 h-12 text-green-600" />
            <h3 className="text-xl font-light">Purchase Confirmed</h3>
            <p className="text-gray-600">
              Thank you!<br />
              A confirmation email has been sent to {shipping.email}.<br />
              We’ll ship your artwork to:<br />
              <em>{shipping.address}</em>
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setStep(1)
                setError(null)
                setShipping({ email: '', address: '' })
              }}
              className="w-full"
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
