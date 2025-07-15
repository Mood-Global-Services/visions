// i18n/client.ts
'use client'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend'
import { i18nConfig } from './config'

if (!i18n.isInitialized) {
  i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: i18nConfig.fallbackLng,
      supportedLngs: i18nConfig.supportedLngs,
      ns: [i18nConfig.defaultNS],
      defaultNS: i18nConfig.defaultNS,
      detection: {
        order: ['cookie', 'localStorage', 'navigator'],
        caches: ['cookie'],
      },
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
      react: {
        useSuspense: false,
      },
      lng: undefined, // Optional but clean
    })
}

export default i18n
