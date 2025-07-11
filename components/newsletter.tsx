"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setSubscribed(true)
  }

  if (subscribed) {
    return (
      <div className="max-w-2xl">
        <h2 className="text-2xl font-light mb-4">Thank you</h2>
        <p className="text-gray-600">
          You've been subscribed to our newsletter. You'll receive updates about new exhibitions, artist features, and
          exclusive previews.
        </p>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            Follow on Instagram
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            Join Discord
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-light mb-4">Stay Connected with NapulETH Visions</h2>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Be the first to know about new exhibitions, exclusive artist interviews, and early access to limited edition
        releases.
      </p>

      <form onSubmit={handleSubmit} className="flex gap-4">
        <div className="flex-1">
          <Label htmlFor="newsletter-email" className="sr-only">
            Email address
          </Label>
          <Input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-gray-300 focus:border-gray-900"
          />
        </div>
        <Button type="submit" className="bg-gray-900 text-white hover:bg-gray-800 px-8">
          Subscribe
        </Button>
      </form>

      <p className="text-xs text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
    </div>
  )
}
