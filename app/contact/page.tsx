"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-light tracking-wide">
              NapulETH Visions
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-900">
                Exhibition
              </Link>
              <Link href="/artists" className="text-sm text-gray-500 hover:text-gray-900">
                Artists
              </Link>
              <Link href="/about" className="text-sm text-gray-500 hover:text-gray-900">
                About
              </Link>
              <Link href="/contact" className="text-sm text-gray-900 hover:text-gray-600">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Exhibition
        </Link>
      </div>

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-light mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Get in touch with our team for inquiries about the exhibition, artwork purchases, press opportunities, or
            general information.
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
                <CardTitle className="text-2xl font-light">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Message Sent</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for your message. We'll get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
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
                        <Label htmlFor="email">Email *</Label>
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
                      <Label htmlFor="subject">Subject *</Label>
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
                      <Label htmlFor="message">Message *</Label>
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
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-light mb-6">Get in Touch</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you're interested in purchasing artwork, learning more about the exhibition, or exploring
                collaboration opportunities, we'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>General: info@napulethvisions.art</p>
                    <p>Sales: sales@napulethvisions.art</p>
                    <p>Press: press@napulethvisions.art</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-sm text-gray-600">+39 081 123 4567</p>
                  <p className="text-xs text-gray-500">Monday - Friday, 9:00 AM - 6:00 PM CET</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Exhibition Venue</h3>
                  <div className="text-sm text-gray-600">
                    <p>Villa Doria D'Angri</p>
                    <p>Via Posillipo, 123</p>
                    <p>80123 Naples, Italy</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Exhibition Hours</h3>
                  <div className="text-sm text-gray-600">
                    <p>July 17-19, 2024</p>
                    <p>10:00 AM - 8:00 PM daily</p>
                    <p>Free admission</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Discord
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
