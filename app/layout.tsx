import type { Metadata } from "next"
import "./globals.css"

import { Poppins, Oswald } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
})

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
})

export const metadata: Metadata = {
  title: "Dream Build",
  description: "PC build and peripherals showcase",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${poppins.variable} ${oswald.variable}`}>
      <body className="bg-[#09090b] text-white antialiased font-sans">
        {children}
      </body>
    </html>
  )
}