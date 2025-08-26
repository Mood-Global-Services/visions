import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { useNftAvailability } from "@/hooks/useNftAvailability"
import { useState } from "react"
import { Artist, DetailedWork } from '@/data/artists'
import PurchaseModal from "./purchase-modal"
import { useTranslation } from 'react-i18next'
import i18n from "@/i18n/client"
import { useEthConversion } from '@/hooks/useEthConversion'
import { Loader2 } from "lucide-react"
interface ArtworkCardProps {
    work: DetailedWork
}

const ArtworkCard = ({ work }: ArtworkCardProps) => {
    const { available, loading } = useNftAvailability(work.tokenId as number)
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useTranslation()

    const { eurPerEth, loading: priceLoading } = useEthConversion()

    const fiat = parseFloat(work.fiatPrice.replace('€', '').replace(',', '.')) // if fiatPrice is a string
    const ethFromFiat = eurPerEth ? (fiat / eurPerEth).toFixed(4).toString() : '0.00'

    return (
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
                        {i18n.language == "en" ? work.description : work.descriptionIT}
                    </p>
                    {
                        work.technique && (
                            <p className="text-sm text-gray-500 mb-4">
                                {i18n.language == "en" ? work.technique : work.techniqueIT}
                            </p>
                        )
                    }
                    <div className="flex items-center space-x-2 mb-6">
                        <span className="text-lg font-medium">{ethFromFiat} ETH</span>
                        <span className="text-gray-500">({work.fiatPrice})€</span>
                    </div>
                </div>

                {
                    loading ? (
                        <div className="flex flex-row items-center justify-start h-full">
                            <Loader2 className="w-4 h-4 animate-spin" />
                        </div>
                    ) : (
                        available ? (
                            <PurchaseModal work={work} />
                        ) : (
                            <Button disabled className="bg-gray-100 text-gray-400">{t('sold')}</Button>
                        )
                    )
                }

            </div>
        </div>
    )
}

export default ArtworkCard