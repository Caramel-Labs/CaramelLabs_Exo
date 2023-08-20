import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Audiowide } from "next/font/google"
import { Inria_Sans } from "next/font/google"
import { Aoboshi_One } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const audiowide = Audiowide({ weight: ["400"] })
const inriaSans = Inria_Sans({ weight: ["400"] })
const aoboshiOne = Aoboshi_One({ weight: ["400"] })

export const metadata: Metadata = {
  title: "EXO",
  description: "Make space travel great again",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${audiowide.className} ${inriaSans.className} ${aoboshiOne.className}`}
      >
        {children}
      </body>
    </html>
  )
}
