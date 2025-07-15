"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTranslation } from 'react-i18next'

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const { t } = useTranslation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setSubscribed(true)
  }

  if (subscribed) {
    return (
      <div className="max-w-2xl">
        <h2 className="text-2xl font-light mb-4">{t('thankYou')}</h2>
        <p className="text-gray-600">
          {t('subscribed')}
        </p>
        <div className="flex space-x-4 mt-4">
          <a href="https://www.instagram.com/napuleth.visions/#" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900">
            {t('followOnInstagram')}
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            {t('joinDiscord')}
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-light mb-4">{t('stayConnected')}</h2>

      <form onSubmit={handleSubmit} className="flex gap-4">
        <div className="flex-1">
          <Label htmlFor="newsletter-email" className="sr-only">
            {t('emailAddress')}
          </Label>
          <Input
            id="newsletter-email"
            type="email"
            placeholder={t('emailAddressPlaceholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-gray-300 focus:border-gray-900"
          />
        </div>
        <Button type="submit" className="bg-gray-900 text-white hover:bg-gray-800 px-8 shiny-button">
          {t('subscribe')}
        </Button>
      </form>

      <p className="text-xs text-gray-500 mt-4">{t('privacyPolicy')}</p>
    </div>
  )
}
