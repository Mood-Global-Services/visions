import { useEffect, useState } from 'react'

export function useEthConversion() {
  const [eurPerEth, setEurPerEth] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRate() {
      try {
        const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur')
        const data = await res.json()
        setEurPerEth(data.ethereum.eur)
      } catch (err) {
        console.error('Failed to fetch ETH price', err)
      } finally {
        setLoading(false)
      }
    }

    fetchRate()
  }, [])

  return { eurPerEth, loading }
}
