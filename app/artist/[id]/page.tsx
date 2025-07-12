import { artists } from '@/data/artists'
import ArtistClient from '@/components/artistClient'

export default async function ArtistPage({ params }: { params: { id: string } }) {
  const { id } = await params

  const artist = artists.find((a) => a.id === id)

  if (!artist) {
    return <div>Artist not found</div>
  }

  return <ArtistClient artist={artist} />
}
