"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Newsletter from "@/components/newsletter"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import logo from '@/assets/images/logo.webp'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from "@/components/ui/languageSwitcher"
import i18n from "@/i18n/client"

const artists = [
  {
    id: "maria-rossi",
    name: "Maria Rossi",
    title: "Digital Metamorphosis",
    description: "Exploring the intersection of traditional Neapolitan art and blockchain technology",
    image: "/placeholder.svg?height=500&width=700",
    works: 8,
    featured: true,
  },
  {
    id: "giuseppe-verde",
    name: "Giuseppe Verde",
    title: "Crypto Vesuvius",
    description: "Volcanic landscapes reimagined through generative algorithms",
    image: "/placeholder.svg?height=500&width=700",
    works: 12,
    featured: true,
  },
  {
    id: "anna-blu",
    name: "Anna Blu",
    title: "Mediterranean Tokens",
    description: "NFT interpretations of classical Mediterranean motifs",
    image: "/placeholder.svg?height=500&width=700",
    works: 6,
    featured: true,
  },
  {
    id: "franco-nero",
    name: "Franco Nero",
    title: "Decentralized Dreams",
    description: "Abstract compositions inspired by blockchain architecture",
    image: "/placeholder.svg?height=500&width=700",
    works: 15,
    featured: false,
  },
  {
    id: "lucia-bianca",
    name: "Lucia Bianca",
    title: "Digital Sirens",
    description: "Contemporary mythology through digital art and smart contracts",
    image: "/placeholder.svg?height=500&width=700",
    works: 9,
    featured: true,
  },
]

export default function HomePage() {
  const { t } = useTranslation()
  if (!i18n.isInitialized) return null
  return (
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
                <Link href="/" className="text-md text-gray-900 hover:text-gray-600">
                  {t('exhibition')}
                </Link>
                <Link href="/artists" className="text-md text-gray-500 hover:text-gray-900">
                  {t('artists')}
                </Link>
                <Link href="/about" className="text-md text-gray-500 hover:text-gray-900">
                  {t('about')}
                </Link>
                <Link href="/contact" className="text-md text-gray-500 hover:text-gray-900">
                  {t('contact')}
                </Link>
              </nav>
              <p className="text-lg font-thin text-gray-400">|</p>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg gap-8 flex flex-col">
                  <div>
                    <p className="leading-relaxed">
                      {t('introPara')}
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg gap-8 flex flex-col">
                  <div>
                    <h2 className="text-lg font-medium mb-2">{t('edition')} 1: Foresta di Cristallo</h2>
                    <p className="text-gray-600 leading-relaxed">
                      {t('shortEdition1Para')}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <Badge variant="default" className="shiny-badge">
                      <div className="flex items-center space-x-2 p-1">
                        <Calendar className="w-4 h-4" />
                        <span>{t('exhibitionDate')}</span>
                      </div>
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/artists">
                  <Button className="bg-gray-900 text-white hover:bg-gray-800 group shiny-button">
                    {t('viewArtists')}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    {t('aboutTheExhibition')}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="/placeholder.svg?height=600&width=500"
                    alt="Villa Doria D'Angri"
                    className="w-full h-[600px] object-cover"
                  />
                </CardContent>
              </Card>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 shadow-lg rounded-lg">
                <p className="text-xs text-gray-500 mb-1">{t('featuredVenue')}</p>
                <p className="text-sm font-medium">Villa Doria D'Angri</p>
                <p className="text-xs text-gray-600">{t('historicNaples')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">{t('featuredArtists')}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {artists
              .filter((artist) => artist.featured)
              .map((artist) => (
                <Link key={artist.id} href={`/artist/${artist.id}`} className="group">
                  <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="aspect-[4/5] overflow-hidden">
                        <img
                          src={artist.image || "/placeholder.svg"}
                          alt={artist.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-light mb-2">{artist.name}</h3>
                        <h4 className="text-gray-600 mb-3">{artist.title}</h4>
                        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{artist.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-400">{artist.works} {t('works')}</span>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/artists">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
                {t('artistsInfo')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Exhibition Details */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-light mb-8">{t('aboutExhibition')}</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                {t('aboutExhibitionPara1')}
              </p>
              <p>
                {t('aboutExhibitionPara2')}
              </p>
              <p>
                {t('aboutExhibitionPara3')}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4">{t('exhibitionDetails')}</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">{t('dates')}</span>
                  <span>{t('exhibitionDate')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">{t('venue')}</span>
                  <span>Villa Doria D'Angri</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">{t('location')}</span>
                  <span>{t('naples')}, {t('italy')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">{t('fees')}</span>
                  <span>{t('free')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">{t('artists')}</span>
                  <span>4 {t('featured')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">{t('artworks')}</span>
                  <span>13+ {t('pieces')}</span>
                </div>
              </div>
            </div>

            <div className="w-full h-fit flex flex-row gap-4 items-stretch justify-between">
              <div className="w-1/2">
                <h3 className="text-lg font-medium mb-4">{t('purchaseOptions')}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex flex-row items-center gap-2">
                    <p>• Crypto (ETH, BTC)</p>
                    <Image src="https://cdn3.emoji.gg/emojis/70506-bitcoin.png" alt="bitcoin" width={20} height={20} />
                    <Image src="https://cdn3.emoji.gg/emojis/5819-eth.png" alt="ethereum" width={20} height={20} />
                  </div>
                  <p>• {t('traditionalPaymentMethods')}</p>
                  <div className="flex flex-row items-center gap-2">
                    <Image src="https://cdn3.emoji.gg/emojis/9437-visa.png" alt="visa" width={30} height={30} />
                    <Image src="https://cdn3.emoji.gg/emojis/6473-mastercard.png" alt="mastercard" width={30} height={30} />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center py-4">
                <div className="w-[1px] h-full bg-gray-400">

                </div>
              </div>
              <div className="w-1/2">
                <h3 className="text-lg font-medium mb-4">{t('additionalDetails')}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• {t('certificate')} ({t('versions')})</p>
                  <p>• {t('shipping')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <Newsletter />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-lg font-light mb-4">NapulETH Visions</h3>
              <p className="text-sm text-gray-600 mb-4 max-w-md">
                Contemporary digital art exhibition exploring the convergence of Neapolitan culture and blockchain
                technology.
              </p>
              <div className="flex space-x-4 text-sm text-gray-500">
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Instagram
                </a>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Discord
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-4">Exhibition</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>17–19 July 2024</p>
                <p>Villa Doria D'Angri</p>
                <p>Naples, Italy</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>info@napulethvisions.art</p>
                <p>+39 081 123 4567</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-8 pt-8 text-center">
            <p className="text-xs text-gray-500">© 2024 NapulETH Visions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
