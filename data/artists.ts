import a1 from "@/assets/images/artists/AdrianoTenore.webp"
import a2 from "@/assets/images/artists/ClarissaFalco.webp"
import a3 from "@/assets/images/artists/EmilioVavarella.webp"
import a4 from "@/assets/images/artists/LorenzoLunghi.webp"

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
}
export const artists: Artist[] = [
    {
      id: "AdrianoTenore",
      name: "Adriano Tenore",
      title: "Digital Metamorphosis",
      description:
        "Exploring the intersection of traditional Neapolitan art and blockchain technology through immersive digital experiences.",
      image: a1.src,
      works: 8,
      detailedWorks:[
        {
          id: 1,
          title: "Vesuvian Genesis #1",
          medium: "Digital Art, NFT",
          dimensions: "3840 × 2160 px",
          year: "2024",
          price: "2.5 ETH",
          fiatPrice: "$4,200",
          image: "/placeholder.svg?height=600&width=800",
          available: true,
        },
        {
          id: 2,
          title: "Mediterranean Cipher",
          medium: "Generative Art, Smart Contract",
          dimensions: "4096 × 4096 px",
          year: "2024",
          price: "1.8 ETH",
          fiatPrice: "$3,000",
          image: "/placeholder.svg?height=600&width=800",
          available: true,
        },
        {
          id: 3,
          title: "Neapolitan Dreams",
          medium: "Digital Collage, Blockchain",
          dimensions: "2048 × 3072 px",
          year: "2024",
          price: "3.2 ETH",
          fiatPrice: "$5,400",
          image: "/placeholder.svg?height=600&width=800",
          available: false,
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
      works: 12,
      detailedWorks:[
        {
          id: 1,
          title: "Vesuvian Genesis #1",
          medium: "Digital Art, NFT",
          dimensions: "3840 × 2160 px",
          year: "2024",
          price: "2.5 ETH",
          fiatPrice: "$4,200",
          image: "/placeholder.svg?height=600&width=800",
          available: true,
        },
        {
          id: 2,
          title: "Mediterranean Cipher",
          medium: "Generative Art, Smart Contract",
          dimensions: "4096 × 4096 px",
          year: "2024",
          price: "1.8 ETH",
          fiatPrice: "$3,000",
          image: "/placeholder.svg?height=600&width=800",
          available: true,
        },
        {
          id: 3,
          title: "Neapolitan Dreams",
          medium: "Digital Collage, Blockchain",
          dimensions: "2048 × 3072 px",
          year: "2024",
          price: "3.2 ETH",
          fiatPrice: "$5,400",
          image: "/placeholder.svg?height=600&width=800",
          available: false,
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
      works: 6,
      detailedWorks:[
        {
          id: 1,
          title: "Vesuvian Genesis #1",
          medium: "Digital Art, NFT",
          dimensions: "3840 × 2160 px",
          year: "2024",
          price: "2.5 ETH",
          fiatPrice: "$4,200",
          image: "/placeholder.svg?height=600&width=800",
          available: true,
        },
        {
          id: 2,
          title: "Mediterranean Cipher",
          medium: "Generative Art, Smart Contract",
          dimensions: "4096 × 4096 px",
          year: "2024",
          price: "1.8 ETH",
          fiatPrice: "$3,000",
          image: "/placeholder.svg?height=600&width=800",
          available: true,
        },
        {
          id: 3,
          title: "Neapolitan Dreams",
          medium: "Digital Collage, Blockchain",
          dimensions: "2048 × 3072 px",
          year: "2024",
          price: "3.2 ETH",
          fiatPrice: "$5,400",
          image: "/placeholder.svg?height=600&width=800",
          available: false,
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
      works: 15,
      detailedWorks:[
        {
          id: 1,
          title: "Vesuvian Genesis #1",
          medium: "Digital Art, NFT",
          dimensions: "3840 × 2160 px",
          year: "2024",
          price: "2.5 ETH",
          fiatPrice: "$4,200",
          image: "/placeholder.svg?height=600&width=800",
          available: true,
        },
        {
          id: 2,
          title: "Mediterranean Cipher",
          medium: "Generative Art, Smart Contract",
          dimensions: "4096 × 4096 px",
          year: "2024",
          price: "1.8 ETH",
          fiatPrice: "$3,000",
          image: "/placeholder.svg?height=600&width=800",
          available: true,
        },
        {
          id: 3,
          title: "Neapolitan Dreams",
          medium: "Digital Collage, Blockchain",
          dimensions: "2048 × 3072 px",
          year: "2024",
          price: "3.2 ETH",
          fiatPrice: "$5,400",
          image: "/placeholder.svg?height=600&width=800",
          available: false,
        },
      ],
      bio: "Abstract artist fascinated by the visual language of decentralized systems.",
      statement: "Decentralized networks are the future of the internet. I use digital art to explore how these systems can create new forms of expression and connection.",
    },
  ]