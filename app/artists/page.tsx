import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight } from "lucide-react"

const artists = [
  {
    id: "maria-rossi",
    name: "Maria Rossi",
    title: "Digital Metamorphosis",
    description:
      "Exploring the intersection of traditional Neapolitan art and blockchain technology through immersive digital experiences.",
    image: "/placeholder.svg?height=600&width=500",
    works: 8,
    bio: "Naples-born digital artist seamlessly blending Italian heritage with blockchain innovation.",
  },
  {
    id: "giuseppe-verde",
    name: "Giuseppe Verde",
    title: "Crypto Vesuvius",
    description: "Volcanic landscapes reimagined through generative algorithms and smart contract interactions.",
    image: "/placeholder.svg?height=600&width=500",
    works: 12,
    bio: "Geologist turned digital artist creating stunning volcanic interpretations.",
  },
  {
    id: "anna-blu",
    name: "Anna Blu",
    title: "Mediterranean Tokens",
    description: "NFT interpretations of classical Mediterranean motifs with contemporary blockchain aesthetics.",
    image: "/placeholder.svg?height=600&width=500",
    works: 6,
    bio: "Contemporary artist exploring cultural heritage through digital transformation.",
  },
  {
    id: "franco-nero",
    name: "Franco Nero",
    title: "Decentralized Dreams",
    description: "Abstract compositions inspired by blockchain architecture and decentralized network structures.",
    image: "/placeholder.svg?height=600&width=500",
    works: 15,
    bio: "Abstract artist fascinated by the visual language of decentralized systems.",
  },
  {
    id: "lucia-bianca",
    name: "Lucia Bianca",
    title: "Digital Sirens",
    description: "Contemporary mythology through digital art and smart contracts, reimagining ancient stories.",
    image: "/placeholder.svg?height=600&width=500",
    works: 9,
    bio: "Mythological storyteller bringing ancient narratives into the digital age.",
  },
]

export default function ArtistsPage() {
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
              <Link href="/artists" className="text-sm text-gray-900 hover:text-gray-600">
                Artists
              </Link>
              <Link href="/about" className="text-sm text-gray-500 hover:text-gray-900">
                About
              </Link>
              <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900">
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
          <h1 className="text-4xl md:text-5xl font-light mb-6">Featured Artists</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Meet the five visionary artists who are redefining the intersection of traditional Neapolitan culture and
            cutting-edge blockchain technology in this groundbreaking exhibition.
          </p>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="space-y-20">
          {artists.map((artist, index) => (
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
                      className="w-full h-[500px] object-cover"
                    />
                  </CardContent>
                </Card>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div>
                  <h2 className="text-3xl font-light mb-2">{artist.name}</h2>
                  <h3 className="text-xl text-gray-600 mb-4">{artist.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{artist.description}</p>
                  <p className="text-sm text-gray-500 mb-6">{artist.bio}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{artist.works} artworks</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>Available for purchase</span>
                  </div>
                </div>

                <Link href={`/artist/${artist.id}`}>
                  <Button className="bg-gray-900 text-white hover:bg-gray-800 group">
                    View Collection
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
