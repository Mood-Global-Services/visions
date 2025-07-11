import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, MapPin, Users, Palette } from "lucide-react"

export default function AboutPage() {
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
              <Link href="/about" className="text-sm text-gray-900 hover:text-gray-600">
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

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-light mb-8">About NapulETH Visions</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            A groundbreaking exhibition exploring the convergence of traditional Neapolitan artistic heritage and
            cutting-edge blockchain technology, set within the historic Villa Doria D'Angri.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Exhibition Overview */}
            <div>
              <h2 className="text-2xl font-light mb-6">Exhibition Overview</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  NapulETH Visions represents more than an art exhibition—it's a cultural bridge connecting centuries of
                  Neapolitan artistic tradition with the revolutionary possibilities of blockchain technology. This
                  inaugural edition brings together five visionary artists who are redefining the boundaries of digital
                  art and cultural expression.
                </p>
                <p>
                  Set within the magnificent Villa Doria D'Angri, a testament to Naples' rich architectural heritage,
                  the exhibition creates a dialogue between past and future, tradition and innovation. Each artwork
                  exists at the intersection of physical and digital realms, exploring themes of cultural
                  transformation, technological evolution, and the democratization of art through decentralized
                  platforms.
                </p>
                <p>
                  The exhibition showcases over 50 unique digital artworks, each authenticated through blockchain
                  technology and available for purchase through both traditional and cryptocurrency methods. Visitors
                  experience an immersive journey that challenges conventional notions of art ownership, cultural
                  preservation, and artistic expression in the digital age.
                </p>
              </div>
            </div>

            {/* Curatorial Statement */}
            <div>
              <h2 className="text-2xl font-light mb-6">Curatorial Statement</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  "NapulETH Visions emerges from a fundamental question: How do we preserve and evolve cultural identity
                  in an increasingly digital world? The artists in this exhibition provide compelling answers through
                  their innovative use of blockchain technology as both medium and message."
                </p>
                <p>
                  "Each work represents a unique interpretation of Neapolitan culture—from Vesuvius' volcanic energy to
                  Mediterranean mythology—reimagined through the lens of decentralized technology. The result is a
                  collection that honors tradition while boldly embracing the future."
                </p>
                <p className="text-sm text-gray-500 italic">— Dr. Elena Marchetti, Chief Curator</p>
              </div>
            </div>

            {/* The Venue */}
            <div>
              <h2 className="text-2xl font-light mb-6">Villa Doria D'Angri</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt="Villa Doria D'Angri exterior"
                      className="w-full h-64 object-cover"
                    />
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt="Villa Doria D'Angri interior"
                      className="w-full h-64 object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The historic Villa Doria D'Angri serves as the perfect backdrop for this innovative exhibition. Built
                  in the 18th century, this architectural masterpiece has witnessed centuries of Neapolitan cultural
                  evolution, making it an ideal venue for exploring the intersection of tradition and innovation.
                </p>
                <p>
                  The villa's elegant rooms and gardens provide an immersive environment where digital artworks dialogue
                  with classical architecture, creating a unique spatial experience that enhances the conceptual
                  framework of the exhibition.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Exhibition Facts */}
            <Card className="border border-gray-100 p-6">
              <h3 className="text-lg font-medium mb-6">Exhibition Facts</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Duration</p>
                    <p className="text-sm text-gray-600">17–19 July 2024</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-gray-600">Villa Doria D'Angri, Naples</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Artists</p>
                    <p className="text-sm text-gray-600">5 Featured Artists</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Palette className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Artworks</p>
                    <p className="text-sm text-gray-600">50+ Digital Pieces</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Visiting Information */}
            <Card className="border border-gray-100 p-6">
              <h3 className="text-lg font-medium mb-6">Visiting Information</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium mb-1">Opening Hours</p>
                  <p className="text-gray-600">10:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">All three days</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Admission</p>
                  <p className="text-gray-600">Free entry</p>
                  <p className="text-gray-600">Registration recommended</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Accessibility</p>
                  <p className="text-gray-600">Wheelchair accessible</p>
                  <p className="text-gray-600">Audio guides available</p>
                </div>
              </div>
            </Card>

            {/* Contact */}
            <Card className="border border-gray-100 p-6">
              <h3 className="text-lg font-medium mb-6">Contact</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium">General Inquiries</p>
                  <p className="text-gray-600">info@napulethvisions.art</p>
                </div>
                <div>
                  <p className="font-medium">Press</p>
                  <p className="text-gray-600">press@napulethvisions.art</p>
                </div>
                <div>
                  <p className="font-medium">Sales</p>
                  <p className="text-gray-600">sales@napulethvisions.art</p>
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+39 081 123 4567</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
