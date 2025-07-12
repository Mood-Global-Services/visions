import a1 from "@/assets/images/artists/AdrianoTenore.webp"
import a2 from "@/assets/images/artists/ClarissaFalco.webp"
import a3 from "@/assets/images/artists/EmilioVavarella.webp"
import a4 from "@/assets/images/artists/LorenzoLunghi.webp"

// Adriano Tenore works
import w1 from "@/assets/images/artworks/AdrianoTenore/1.webp"

// Clarissa Falco
import w2 from "@/assets/images/artworks/ClarissaFalco/1.webp"

// Emilio Vavarella works
import w3 from "@/assets/images/artworks/EmilioVavarella/1.webp"

// Lorenzo Lunghi
import w4 from "@/assets/images/artworks/LorenzoLunghi/1.webp"
import w5 from "@/assets/images/artworks/LorenzoLunghi/2.webp"

export interface Artist {
    id: string
    name: string
    title: string
    description: string
    image: string
    works: number
    detailedWorks: DetailedWork[]
    bio: string
    statement: string
}

export interface DetailedWork {
    id: number
    title: string
    medium: string
    dimensions: string
    year: string
    price: string
    fiatPrice: string
    image: string
    available: boolean
    technique?: string
    provenance?: string
    tokenId?: number
}
export const artists: Artist[] = [
    {
      id: "AdrianoTenore",
      name: "Adriano Tenore",
      title: "Digital Metamorphosis",
      description:
        "Exploring the intersection of traditional Neapolitan art and blockchain technology through immersive digital experiences.",
      image: a1.src,
      works: 1,
      detailedWorks:[
        {
          id: 1,
          title: "Vesuvian Genesis #1",
          medium: "Digital Art, NFT",
          dimensions: "3840 × 2160 px",
          year: "2024",
          price: "0.01",
          fiatPrice: "$4,200",
          image: w1.src,
          available: true,
        },
      ],
      bio: "Naples-born digital artist seamlessly blending Italian heritage with blockchain innovation.",
      statement: "My practice investigates how ancient Mediterranean symbols can find new life through digital transformation. Each piece represents a metamorphosis—from physical to digital, from individual to collective, from past to future.",
    },
    {
      id: "ClarissaFalco",
      name: "Clarissa Falco",
      title: "Crypto Vesuvius",
      description: "Volcanic landscapes reimagined through generative algorithms and smart contract interactions.",
      image: a2.src,
      works: 1,
      detailedWorks:[
        {
          id: 1,
          title: "Dream Of A Synthetic Body#3",
          medium: "Digital Art, NFT",
          dimensions: "150x150x150 cm",
          year: "2024",
          price: "0.01",
          fiatPrice: "$4,000",
          image: w2.src,
          available: true,
          technique: "Plastica, Titanio, Ferro, Alluminio, Schiuma Poliuretanica, Vernice A Base D'acqua",
          provenance: "Studio Clarissa Falco, Savona, Italia",
          tokenId: 1,
        },
      ],
      bio: "Geologist turned digital artist creating stunning volcanic interpretations.",
      statement: "Vesuvius has shaped Naples for millennia. I explore how digital eruptions can reshape our understanding of permanence and change.",
    },
    {
      id: "EmilioVavarella",
      name: "Emilio Vavarella",
      title: "Mediterranean Tokens",
      description: "NFT interpretations of classical Mediterranean motifs with contemporary blockchain aesthetics.",
      image: a3.src,
      works: 1,
      detailedWorks:[
        {
          id: 1,
          title: "Vesuvian Genesis #1",
          medium: "Digital Art, NFT",
          dimensions: "3840 × 2160 px",
          year: "2024",
          price: "0.01",
          fiatPrice: "$4,200",
          image: w3.src,
          available: true,
        },
      ],
      bio: "Contemporary artist exploring cultural heritage through digital transformation.",
      statement: "The Mediterranean is a symbol of unity and diversity. I use digital tokens to explore how these elements can coexist and evolve.",
    },
    {
      id: "LorenzoLunghi",
      name: "Lorenzo Lunghi",
      title: "Decentralized Dreams",
      description: "Abstract compositions inspired by blockchain architecture and decentralized network structures.",
      image: a4.src,
      works: 2,
      detailedWorks:[
        {
          id: 1,
          title: "Spie (Fontana V.2)",
          medium: "Digital Art, NFT",
          dimensions: "40x12x8 cm",
          year: "2024",
          price: "0.01",
          fiatPrice: "$3,500",
          image: w4.src,
          available: true,
          technique: "Vetro Borosilicato, Ossigeno, Alluminio, Plexiglass, Servomotori, Raspberry Pi, Raspberry Modulo, Telecamera 3 Noir, Luce a leD",
          provenance: "Studio Lorenzo Lunghi, Milano, Italia",
          tokenId: 3,
        },
        {
          id: 2,
          title: "Vomito",
          medium: "Generative Art, Smart Contract",
          dimensions: "50x30 cm",
          year: "2024",
          price: "0.01",
          fiatPrice: "$2,500",
          image: w5.src,
          available: true,
          technique: "Peltro, Stagno",
          provenance: "Studio Lorenzo Lunghi, Milano, Italia",
          tokenId: 4,
        },
      ],
      bio: "Abstract artist fascinated by the visual language of decentralized systems.",
      statement: "Decentralized networks are the future of the internet. I use digital art to explore how these systems can create new forms of expression and connection.",
    },
  ]