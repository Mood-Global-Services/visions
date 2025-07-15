// src/components/Sponsors.jsx
import React from 'react'
import Marquee from 'react-fast-marquee'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from "@/components/ui/languageSwitcher"
import i18n from "@/i18n/client"

import TeatroDiSanCarlo   from '@/assets/images/sponsors/SanCarlo.png'
import AssociazioneCivita from '@/assets/images/sponsors/civita.png'
import CommuneDiNapoli    from '@/assets/images/sponsors/commune.webp'
import FondazioneMorraGreco from '@/assets/images/sponsors/FMG_Logo.webp'
import Familiae           from '@/assets/images/sponsors/FAMILIAE.webp'
import FRG from "@/assets/images/sponsors/FRG.webp"

export default function Sponsors() {
  const sponsors = [
    {
      href: 'https://www.teatrodisancarlo.it/',
      src: TeatroDiSanCarlo,
      alt: 'Teatro di San Carlo',
      imgClasses: 'h-32 mx-6'
    },
    {
      href: 'https://www.associazionecivita.it/',
      src: AssociazioneCivita,
      alt: 'Associazione Civita',
      imgClasses: 'h-32 mx-6'
    },
    {
      href: 'https://www.comunenapoli.it/',
      src: CommuneDiNapoli,
      alt: 'Commune Di Napoli',
      imgClasses: 'h-32 mx-6'
    },
    {
      href: 'https://www.fmgreco.it/',
      src: FondazioneMorraGreco,
      alt: 'Fondazione Morra Greco',
      imgClasses: 'h-24 mx-6'
    },
    {
      href: 'https://www.familiae.it/',
      src: Familiae,
      alt: 'Familiae',
      imgClasses: 'h-52 mx-6'
    },
    {
      href: 'https://www.familiae.it/',
      src: FRG,
      alt: 'Familiae',
      imgClasses: 'h-64 mx-4 brightness-0'
    },
  ]

  const { t } = useTranslation()
  if (!i18n || !i18n.isInitialized) return null
  return (
    <div className="relative w-full flex flex-col items-center
                    justify-start gap-0 lg:gap-2
                    px-2 lg:px-4 pb-2 lg:pb-0 pt-0 lg:pt-6
                    overflow-hidden bg-white">

      {/* left fade overlay */}
      <div
        className="absolute left-0 inset-y-0 w-[5vw] lg:w-[6vw]
                   pointer-events-none
                   bg-gradient-to-r from-white to-transparent
                   z-10"
      />

      {/* heading */}
      <h2 className="relative z-20 text-3xl font-semibold">
        {t('patronage')}
      </h2>

      {/* marquee */}
      <div className="w-full relative z-0">
        <Marquee
          speed={30}
          pauseOnHover
          gradient={false}
        >
          {sponsors.map(({ href, src, alt, imgClasses }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-6 flex-shrink-0"
            >
              <img
                src={src.src}
                alt={alt}
                className={`${imgClasses} w-auto`}
              />
            </a>
          ))}
        </Marquee>
      </div>

      {/* right fade overlay */}
      <div
        className="absolute right-0 inset-y-0 w-[5vw] lg:w-[6vw]
                   pointer-events-none
                   bg-gradient-to-l from-white to-transparent
                   z-10"
      />
    </div>
  )
}
