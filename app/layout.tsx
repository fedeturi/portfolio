import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FEDETURI | Fullstack Dev",
  description:
    "Seasoned developer with more than 5 years of experience. I have built cool stuff for E-Commerce, Fintech, Crypto, Healthtech, and Edtech. Always learning.",
  keywords: [
    "vibe coder",
    "creative developer",
    "frontend development",
    "brutalist design",
    "web development",
    "react developer",
    "nextjs developer",
  ],
  authors: [{ name: "FEDETURI" }],
  creator: "FEDETURI",
  publisher: "FEDETURI",
  generator: "v0.app",
  metadataBase: new URL("https://jess.vc"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jess.vc",
    title: "FEDETURI | Fullstack Dev",
    description:
      "Seasoned developer with more than 5 years of experience. I have built cool stuff for E-Commerce, Fintech, Crypto, Healthtech, and Edtech. Always learning.",
    siteName: "FEDETURI.COM",
    images: [
      {
        url: "/images/me.jpeg",
        width: 1200,
        height: 630,
        alt: "FEDETURI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JESS.VC - Vibe Coder & Creative Developer",
    description:
      "Crafting aesthetic code and brutalist digital experiences. Where technical excellence meets raw creative energy.",
    creator: "@jessvc",
    images: ["/images/me.jpeg"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
