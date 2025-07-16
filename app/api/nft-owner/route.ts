// app/api/nft-owner/route.ts
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const tokenId         = searchParams.get('tokenId')
  const contractAddress = process.env.NEXT_PUBLIC_SEPOLIA_CONTRACT_ADDRESS
  const contractOwner   = process.env.NEXT_PUBLIC_CONTRACT_OWNER_ADDRESS?.toLowerCase()
  const alchemyKey      = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY

  if (!tokenId || !contractAddress || !contractOwner || !alchemyKey) {
    return NextResponse.json({ error: 'Missing query or env vars' }, { status: 400 })
  }

  try {
    // ← switched to v3/getOwnersForNFT
    const url = `https://base-sepolia.g.alchemy.com/nft/v3/${alchemyKey}/getOwnersForNFT?contractAddress=${contractAddress}&tokenId=${tokenId}`

    const res  = await fetch(url)
    const text = await res.text()

    // parse JSON safely
    let json: any
    try {
      json = JSON.parse(text)
    } catch {
      console.error('Non-JSON from Alchemy:', text)
      return NextResponse.json(
        { error: 'Unexpected response from Alchemy' },
        { status: 502 }
      )
    }

    if (!res.ok) {
      console.error('Alchemy v3 API error', res.status, json)
      return NextResponse.json({ error: 'Alchemy API error' }, { status: 502 })
    }

    // v3 still returns an `owners` array
    const onChainOwner = (json.owners?.[0] as string || '').toLowerCase()
    const available    = onChainOwner === contractOwner

    return NextResponse.json({ available })
  } catch (err) {
    console.error('Lookup failed:', err)
    return NextResponse.json({ error: 'Lookup failed' }, { status: 502 })
  }
}
