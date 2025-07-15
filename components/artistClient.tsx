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
import { FaTelegramPlane } from "react-icons/fa";
import { useState } from 'react'
import MobileMenu from '@/components/mobileMenu'
import { useNftAvailability } from '@/hooks/useNftAvailability'
import ArtworkCard from '@/components/artworkCard'

interface ArtistClientProps {
    artist: Artist
}

export default function ArtistClient({ artist }: ArtistClientProps) {
    const { t, i18n } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)

    const { ready } = useTranslation()

    if (!ready) return null

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

                {/* Artist Info */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-light mb-4">{artist.name}</h1>

                        <div className="grid md:grid-cols-2 gap-12 mb-16">
                            <div>
                                <h3 className="text-sm font-medium mb-4 uppercase tracking-wide">{t('biography')}</h3>
                                <p className="text-gray-600 leading-relaxed">{i18n.language == "en" ? artist.bio : artist.bioIT}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium mb-4 uppercase tracking-wide">{t('artistStatement')}</h3>
                                <p className="text-gray-600 leading-relaxed">{i18n.language == "en" ? artist.statement : artist.statementIT}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Works */}
                <section className="max-w-7xl mx-auto px-6 pb-16">
                    <div className="grid gap-16">
                        {artist.detailedWorks.map((work: DetailedWork) => (
                            <ArtworkCard key={work.id} work={work} />
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
