import type React from "react"
import type { Metadata } from "next"
import { Host_Grotesk } from "next/font/google"
import "./globals.css"

const hostGrotesk = Host_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NapulETH Visions - Digital Art Exhibition",
  description:
    "Contemporary digital art exhibition featuring five visionary artists exploring the convergence of Neapolitan culture and blockchain technology.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${hostGrotesk.className}`}>{children}</body>
    </html>
  )
}
