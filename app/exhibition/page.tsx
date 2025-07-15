"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, MapPin, Users, Palette, Mail, Phone, Instagram, ArrowUpRight, Menu } from "lucide-react"
import { FaTelegramPlane } from "react-icons/fa";
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from "@/components/ui/languageSwitcher"
import i18n from "@/i18n/client"
import Image from "next/image"
import logo from '@/assets/images/logo.webp'
import image1 from '@/assets/images/1.webp'
import image2 from '@/assets/images/2.webp'
import Newsletter from "@/components/newsletter"
import MobileMenu from "@/components/mobileMenu"
import { useState } from "react"


export default function ExhibitionPage() {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
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
                                    <Link href="/exhibition" className="text-md text-gray-900 hover:text-gray-900">
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

                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-light mb-8">
                            Foresta di Cristallo
                        </h1>
                    </div>
                </section>

                {/* Main Content */}
                <section className="max-w-7xl mx-auto px-6 pb-20">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            {/* Exhibition Overview */}
                            <div>
                                <h2 className="text-2xl font-light mb-6">
                                    {t('exhibitionOverview')}
                                </h2>
                                <div className="space-y-6 text-gray-600 leading-relaxed">
                                    <p>
                                        {t('exhibitionOverviewDescription')}
                                    </p>
                                    <p>
                                        {t('exhibitionOverviewDescription2')}
                                    </p>
                                    <p>
                                        {t('exhibitionOverviewDescription3')}
                                    </p>
                                    <p>
                                        {t('exhibitionOverviewDescription4')}
                                    </p>
                                    <p>
                                        {t('exhibitionOverviewDescription5')}
                                    </p>
                                    <p>
                                        {t('exhibitionOverviewDescription6')}
                                    </p>
                                    <p>
                                        {t('exhibitionOverviewDescription7')}
                                    </p>
                                    <p>
                                        {t('exhibitionOverviewDescription8')}
                                    </p>
                                </div>
                            </div>



                            {/* The Venue */}
                            <div>
                                <h2 className="text-2xl font-light mb-6">{t('installationView')}i</h2>
                                <div className="grid md:grid-cols-2 gap-8 mb-6">
                                    <Card className="border-0 shadow-lg overflow-hidden">
                                        <CardContent className="p-0">
                                            <img
                                                src={image1.src}
                                                alt="Villa Doria D'Angri exterior"
                                                className="w-full h-64 object-cover"
                                            />
                                        </CardContent>
                                    </Card>
                                    <Card className="border-0 shadow-lg overflow-hidden">
                                        <CardContent className="p-0">
                                            <img
                                                src={image2.src}
                                                alt="Villa Doria D'Angri interior"
                                                className="w-full h-64 object-cover"
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Exhibition Facts */}
                            <Card className="border border-gray-100 p-6">
                                <h3 className="text-lg font-medium mb-6">
                                    {t('ShowInfo')}
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-medium">
                                                {t('duration')}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {t('exhibitionDate')}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-medium">{t('location')}</p>
                                            <p className="text-sm text-gray-600">Villa Doria D'Angri, Naples</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-medium mb-1">
                                            {t('openingHours')}
                                        </p>
                                        <p className="text-gray-600">{t('exhibitionOpening1')}</p>
                                        <p className="text-gray-600">{t('exhibitionOpening2')}</p>
                                    </div>
                                    <div>
                                        <p className="font-medium mb-1">
                                            {t('admission')}
                                        </p>
                                        <p className="text-gray-600">
                                            {t('freeAdmission')}
                                        </p>
                                        <p className="text-gray-600">
                                            {t('registrationRecommended')}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-medium mb-1">
                                            {t('accessibility')}
                                        </p>
                                        <p className="text-gray-600">
                                            {t('wheelchairAccessible')}
                                        </p>
                                        <p className="text-gray-600">
                                            {t('audioGuidesAvailable')}
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            {/* Contact */}
                            <Card className="border border-gray-100 p-6">
                                <h3 className="text-lg font-medium mb-6">
                                    {t('contact')}
                                </h3>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <p className="font-medium">
                                            {t('email')}
                                        </p>
                                        <a href="mailto:visions@napuleth.org">
                                            <p className="text-gray-600">visions@napuleth.org</p>
                                        </a>
                                    </div>
                                    <div>
                                        <p className="font-medium">
                                            Telegram
                                        </p>

                                        <a href="https://t.me/+yAnPodng62NhMGNk"><p className="text-gray-600">napulethvisions</p></a>
                                    </div>
                                    <div>
                                        <p className="font-medium">
                                            Instagram
                                        </p>
                                        <a href="https://www.instagram.com/napuleth.visions/#" target="_blank" rel="noopener noreferrer">
                                            <p className="text-gray-600">napulethvisions</p>
                                        </a>
                                    </div>
                                </div>
                            </Card>

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
            <MobileMenu open={isOpen} onClose={() => setIsOpen(false)} activeItem={'exhibition'} />
        </>
    )
}
