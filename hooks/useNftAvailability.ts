// hooks/useNftAvailability.ts
'use client'

import { useState, useEffect } from 'react'

export function useNftAvailability(tokenId: number | string) {
  const [loading, setLoading] = useState(true)
  const [available, setAvailable] = useState(false)

  useEffect(() => {
    if (tokenId == null) return
    setLoading(true)
    fetch(`/api/nft-owner?tokenId=${tokenId}`)
      .then((res) => res.json())
      .then((data: { available: boolean }) => {
        setAvailable(!!data.available)
      })
      .catch(() => {
        setAvailable(false)
      })
      .finally(() => setLoading(false))
  }, [tokenId])

  return { loading, available }
}
