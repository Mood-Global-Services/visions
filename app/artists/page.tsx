'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Mail, Instagram, Menu } from "lucide-react"
import { FaTelegramPlane } from "react-icons/fa";

import Image from "next/image"
import logo from '@/assets/images/logo.webp'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from "@/components/ui/languageSwitcher"
import i18n from "@/i18n/client"
import Newsletter from "@/components/newsletter"
import { artists } from "@/data/artists"
import MobileMenu from "@/components/mobileMenu"
import { useState, useEffect } from "react"

export default function ArtistsPage() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const lng = i18n.language
    const rawNs = i18n.options.defaultNS ?? 'translation'
    const ns = Array.isArray(rawNs) ? rawNs[0] : rawNs

    if (i18n.isInitialized && i18n.hasResourceBundle(lng, ns)) {
      setIsReady(true)
    } else {
      i18n.loadNamespaces(ns, () => {
        setIsReady(true)
      })
    }
  }, [i18n])

  if (!isReady) return null

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
                  <Link href="/artists" className="text-md text-gray-900 hover:text-gray-900">
                    {t('artists')}
                  </Link>
                  <Link href="/exhibition" className="text-md text-gray-500 hover:text-gray-900">
                    {t('exhibition')}
                  </Link>
                  <Link href="/contact" className="text-md text-gray-500 hover:text-gray-900">
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
            <h1 className="text-4xl md:text-5xl font-light mb-6">{t('artists')}</h1>
          </div>
        </section>

        {/* Artists Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="space-y-20">
            {artists.sort((a, b) => a.name.split(" ")[1].localeCompare(b.name.split(" ")[1])).map((artist, index) => (
              <div
                key={artist.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                      <img
                        src={artist.image || "/placeholder.svg"}
                        alt={artist.name}
                        className="w-full h-[500px] object-cover grayscale"
                      />
                    </CardContent>
                  </Card>
                </div>

                <div className={`mb-20 space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div>
                    <h2 className="text-3xl font-light mb-2">{artist.name}</h2>
                    <h5 className="text-xl font-light mb-2">{i18n.language == "en" ? artist.shortDescription : artist.shortDescriptionIT}</h5>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{artist.works} {t('artworks')}</span>
                    </div>
                  </div>

                  <Button className="bg-gray-900 text-white hover:bg-gray-800 group shiny-button"
                    onClick={() => {
                      window.location.href = `/artist/${artist.id}`
                    }}
                  >
                    {t('viewArtworks')}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-100 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <Newsletter />
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-sm font-medium mb-4">{t('contact')}</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex flex-row items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:visions@napuleth.org">visions@napuleth.org</a>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <FaTelegramPlane className="w-4 h-4" />
                    <a href="https://t.me/+yAnPodng62NhMGNk">napulethvisions</a>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <Instagram className="w-4 h-4" />
                    <a href="https://www.instagram.com/napuleth.visions/#" target="_blank" rel="noopener noreferrer">napulethvisions</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-100 mt-8 pt-8 text-center">
              <p className="text-xs text-gray-500">{t('copyright')}</p>
            </div>
          </div>
        </footer>
      </div>
      <MobileMenu open={isOpen} onClose={() => setIsOpen(false)} activeItem={'artists'} />
    </>
  )
}
