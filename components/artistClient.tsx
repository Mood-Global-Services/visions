'use client'

import { useTranslation } from 'react-i18next'
import { Artist, DetailedWork } from '@/data/artists'
import PurchaseModal from '@/components/purchase-modal-fallback'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/images/logo.webp'
import LanguageSwitcher from '@/components/ui/languageSwitcher'
import Newsletter from '@/components/newsletter'
import { ArrowUpRight } from 'lucide-react'
import { Mail, Phone, Instagram, Menu } from 'lucide-react'
import { useState } from 'react'
import MobileMenu from '@/components/mobileMenu'

interface ArtistClientProps {
    artist: Artist
}

export default function ArtistClient({ artist }: ArtistClientProps) {
    const { t, i18n } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)

    if (!i18n?.isInitialized) return null

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
                                    <Link href="/" className="text-md text-gray-900 hover:text-gray-600">
                                        {t('home')}
                                    </Link>
                                    <Link href="/about" className="text-md text-gray-500 hover:text-gray-600">
                                        {t('about')}
                                    </Link>
                                    <Link href="/artists" className="text-md text-gray-500 hover:text-gray-900">
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

                {/* Artist Info */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-light mb-4">{artist.name}</h1>
                        <h2 className="text-2xl text-gray-600 mb-12">{artist.title}</h2>

                        <div className="grid md:grid-cols-2 gap-12 mb-16">
                            <div>
                                <h3 className="text-sm font-medium mb-4 uppercase tracking-wide">{t('biography')}</h3>
                                <p className="text-gray-600 leading-relaxed">{artist.bio}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium mb-4 uppercase tracking-wide">{t('artistStatement')}</h3>
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
                                <Card className="border-0 shadow-lg overflow-hidden">
                                    <CardContent className="p-0">
                                        <img
                                            src={work.image || "/placeholder.svg"}
                                            alt={work.title}
                                            className="w-full h-[500px] object-cover"
                                        />
                                    </CardContent>
                                </Card>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-light mb-2">{work.title}</h3>
                                        <p className="text-sm text-gray-500 mb-4">
                                            {work.medium} • {work.dimensions} • {work.year}
                                        </p>
                                        {
                                            work.technique && (
                                                <p className="text-sm text-gray-500 mb-4">
                                                    Technique: {work.technique}
                                                </p>
                                            )
                                        }
                                        {
                                            work.provenance && (
                                                <p className="text-sm text-gray-500 mb-4">
                                                    Provenance: {work.provenance}
                                                </p>
                                            )
                                        }
                                        <div className="flex items-center space-x-4 mb-6">
                                            <span className="text-lg font-medium">{work.price}</span>
                                            <span className="text-gray-500">({work.fiatPrice})</span>
                                        </div>
                                    </div>


                                    {work.available ? (
                                        <PurchaseModal work={work} />
                                    ) : (
                                        <Button disabled className="bg-gray-100 text-gray-400">Sold</Button>
                                    )}
                                </div>
                            </div>
                        ))}
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
                                    {t('footerText')}
                                </p>
                                <div className="flex space-x-4 text-base hover:text-gray-900 transition-colors">
                                    <a href="https://maps.app.goo.gl/pU2PBu4QamVACR2p8" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                                        <div className="flex flex-row items-center gap-1">
                                            {t('findUs')}
                                            <ArrowUpRight className="w-4 h-4" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium mb-4">{t('exhibition')}</h4>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <p>{t('exhibitionDate')}</p>
                                    <p>Villa Doria D'Angri</p>
                                    <p>{t('naples')}, {t('italy')}</p>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium mb-4">{t('contact')}</h4>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex flex-row items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        <a href="mailto:visions@napuleth.org">visions@napuleth.org</a>
                                    </div>
                                    <div className="flex flex-row items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        <a href="tel:+390811234567">+39 081 123 4567</a>
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
