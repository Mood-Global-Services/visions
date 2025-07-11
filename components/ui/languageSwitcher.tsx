"use client"
import '@/i18n/client'
import { useTranslation } from "react-i18next"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation()

  return (
    <div>
      <Select value={i18n.language} onValueChange={(value) => i18n.changeLanguage(value)}>
        <SelectTrigger className="border-none outline-none ring-0 focus:outline-none focus:ring-0 focus:border-none active:border-none active:outline-none active:ring-0 shadow-none bg-transparent p-1 h-auto">
          <SelectValue placeholder={t('language')} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">{t('english')}</SelectItem>
          <SelectItem value="it">{t('italian')}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default LanguageSwitcher

