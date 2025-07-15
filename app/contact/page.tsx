"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Mail, Phone, MapPin, Clock, Instagram, Menu } from "lucide-react"
import { FaTelegramPlane } from "react-icons/fa";
import { useTranslation } from 'react-i18next'
import Image from "next/image"
import logo from '@/assets/images/logo.webp'
import LanguageSwitcher from "@/components/ui/languageSwitcher"
import i18n from "@/i18n/client"
import MobileMenu from "@/components/mobileMenu"

export default function ContactPage() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Contact form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (!i18n || !i18n.isInitialized) return null

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-light tracking-wide">
                <Image src={logo} alt="Logo" width={120} height={100} />
              </Link>
              <div className="flex items-center justify-end space-x-6">
                <nav className="hidden md:flex space-x-8">
                  <Link href="/" className="text-md text-gray-500 hover:text-gray-600">
                    {t('home')}
                  </Link>
                  <Link href="/artists" className="text-md text-gray-500 hover:text-gray-900">
                    {t('artists')}
                  </Link>
                  <Link href="/exhibition" className="text-md text-gray-500 hover:text-gray-900">
                    {t('exhibition')}
                  </Link>
                  <Link href="/contact" className="text-md text-gray-900 hover:text-gray-900">
                    {t('contact')}
                  </Link>
                </nav>
                <p className="hidden lg:block text-lg font-thin text-gray-400">|</p>
                <LanguageSwitcher />
                <div className="flex flex-row items-center gap-2 justify-center px-2 py-1 lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                  <Menu className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Back Navigation */}
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('backToExhibition')}
          </Link>
        </div>

        {/* Page Header */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-light mb-6">{t('contactUs')}</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('contactUsDescription')}
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-2xl font-light">{t('sendUsAMessage')}</CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">{t('messageSent')}</h3>
                      <p className="text-gray-600 mb-6">
                        {t('messageSentDescription')}
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline">
                        {t('sendAnotherMessage')}
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">{t('name')} <span className="text-red-500">*</span></Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">{t('email')} <span className="text-red-500">*</span></Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject">{t('subject')} <span className="text-red-500">*</span></Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">{t('message')} <span className="text-red-500">*</span></Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="mt-1"
                        />
                      </div>

                      <Button type="submit" className="w-full bg-gray-900 text-white hover:bg-gray-800">
                        {t('sendMessage')}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-light mb-6">{t('getInTouch')}</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {t('contactUsDescription')}
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">{t('email')}</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><a href="mailto:visions@napuleth.org">visions@napuleth.org</a></p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">{t('exhibitionHours')}</h3>
                    <div className="text-sm text-gray-600">
                      <p>{t('exhibitionOpening1')}</p>
                      <p>{t('exhibitionOpening2')}</p>
                      <p>{t('freeAdmission')}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Instagram className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Intagram</h3>
                    <div className="text-sm text-gray-600">
                      <a href="https://www.instagram.com/napuleth.visions/#" target="_blank" rel="noopener noreferrer">napulethvisions</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaTelegramPlane className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Telegram</h3>
                    <div className="text-sm text-gray-600">
                      <a href="https://t.me/+yAnPodng62NhMGNk" target="_blank" rel="noopener noreferrer">napulethvisions</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <MobileMenu open={isOpen} onClose={() => setIsOpen(false)} activeItem={'contact'} />
    </>
  )
}
