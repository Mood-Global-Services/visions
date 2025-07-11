"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PurchaseModal from "@/components/purchase-modal-fallback"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import logo from '@/assets/images/logo.webp'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from "@/components/ui/languageSwitcher"
import i18n from "@/i18n/client"
import { artists, Artist, DetailedWork } from "@/data/artists"

const artistsData = {
  "maria-rossi": {
    name: "Maria Rossi",
    title: "Digital Metamorphosis",
    bio: "Maria Rossi is a Naples-born digital artist who seamlessly blends traditional Italian artistic heritage with contemporary blockchain technology. Her work explores themes of transformation and cultural evolution in the digital age.",
    statement:
      "My practice investigates how ancient Mediterranean symbols can find new life through digital transformation. Each piece represents a metamorphosis—from physical to digital, from individual to collective, from past to future.",
    works: [
      {
        id: 1,
        title: "Vesuvian Genesis #1",
        medium: "Digital Art, NFT",
        dimensions: "3840 × 2160 px",
        year: "2024",
        price: "2.5 ETH",
        fiatPrice: "$4,200",
        image: "/placeholder.svg?height=600&width=800",
        available: true,
      },
      {
        id: 2,
        title: "Mediterranean Cipher",
        medium: "Generative Art, Smart Contract",
        dimensions: "4096 × 4096 px",
        year: "2024",
        price: "1.8 ETH",
        fiatPrice: "$3,000",
        image: "/placeholder.svg?height=600&width=800",
        available: true,
      },
      {
        id: 3,
        title: "Neapolitan Dreams",
        medium: "Digital Collage, Blockchain",
        dimensions: "2048 × 3072 px",
        year: "2024",
        price: "3.2 ETH",
        fiatPrice: "$5,400",
        image: "/placeholder.svg?height=600&width=800",
        available: false,
      },
    ],
  },
  "giuseppe-verde": {
    name: "Giuseppe Verde",
    title: "Crypto Vesuvius",
    bio: "Giuseppe Verde combines his background in geology with digital art to create stunning volcanic landscapes that exist only in the digital realm.",
    statement:
      "Vesuvius has shaped Naples for millennia. I explore how digital eruptions can reshape our understanding of permanence and change.",
    works: [
      {
        id: 4,
        title: "Lava Flow Protocol",
        medium: "3D Digital Art, NFT",
        dimensions: "3840 × 2160 px",
        year: "2024",
        price: "2.1 ETH",
        fiatPrice: "$3,500",
        image: "/placeholder.svg?height=600&width=800",
        available: true,
      },
    ],
  },
}

export default function ArtistPage({ params }: { params: { id: string } }) {
  const artist = artists.find((artist) => artist.id === params.id)

  if (!artist) {
    return <div>Artist not found</div>
  }

  const { t } = useTranslation()
  if (!i18n || !i18n.isInitialized) return null

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
                <Link href="/" className="text-md text-gray-500 hover:text-gray-600">
                  {t('home')}
                </Link>
                <Link href="/about" className="text-md text-gray-500 hover:text-gray-600">
                  {t('about')}
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
              <p className="text-lg font-thin text-gray-400">|</p>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      {/* Artist Info */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-light mb-4">{artist.name}</h1>
          <h2 className="text-2xl text-gray-600 mb-12">{artist.title}</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-sm font-medium mb-4 uppercase tracking-wide">Biography</h3>
              <p className="text-gray-600 leading-relaxed">{artist.bio}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4 uppercase tracking-wide">Artist Statement</h3>
              <p className="text-gray-600 leading-relaxed">{artist.statement}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Works */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid gap-16">
          {artist.detailedWorks.map((work: DetailedWork) => (
            <div key={work.id} className="grid md:grid-cols-2 gap-12 items-start">
              <Card className="border-0 shadow-none">
                <CardContent className="p-0">
                  <img src={work.image || "/placeholder.svg"} alt={work.title} className="w-full h-96 object-cover" />
                </CardContent>
              </Card>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-light mb-2">{work.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {work.medium} • {work.dimensions} • {work.year}
                  </p>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-lg font-medium">{work.price}</span>
                    <span className="text-gray-500">({work.fiatPrice})</span>
                  </div>
                </div>

                {work.available ? (
                  <PurchaseModal work={work} />
                ) : (
                  <Button disabled className="bg-gray-100 text-gray-400">
                    Sold
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
