import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  preload: true,
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  title: "Filipe Monteiro | CEO & Founder of Estoki",
  description:
    "Portfolio of Filipe Monteiro — CEO & Founder of Estoki, a WMS & Logistics SaaS platform. Product vision, technical architecture, team leadership and go-to-market strategy.",
  keywords: [
    "Filipe Monteiro",
    "Python Automation",
    "WMS SaaS",
    "Data Workflows",
    "Logistics",
    "Operations",
    "FastAPI",
    "PostgreSQL",
    "Data Analyst",
    "Fleet Intelligence",
    "Warehouse Management",
  ],
  authors: [{ name: "Filipe Monteiro" }],
  creator: "Filipe Monteiro",
  publisher: "Filipe Monteiro",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={spaceGrotesk.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
