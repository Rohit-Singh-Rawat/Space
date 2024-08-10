import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { Toaster } from '@/components/ui/sonner'
import React from 'react'
import Header from '@/components/layouts/Header'
import { Providers } from './Providers'
import { cath, lombok, neu } from '@/lib/font'
import Footer from '@/components/layouts/Footer'
import ScrollToTopButton from '@/components/shared/ScrollToTop'
import { Analytics } from '@/components/shared/Analytics'

const inter = Inter({ subsets: ['latin'] })

const info = {
  name: 'Rohit Singh Rawat',
  twitter: '@Spacing_Whale',
  description: 'Innovative, skilled software engineer in India.',
  url: 'https://Spacing_Whale.tech',
  image: '/meta/meta.png',
}

export const metadata: Metadata = {
  metadataBase: new URL(info.url),
  title: info.name,
  description: info.description,
  authors: {
    name: info.name,
    url: info.url,
  },
  creator: info.name,
  openGraph: {
    type: 'website',
    url: info.url,
    title: info.name,
    description: info.description,
    images: info.image,
  },
  twitter: {
    card: 'summary_large_image',
    title: info.name,
    description: info.description,
    creator: info.twitter,
    images: info.image,
  },
}

interface ChildrenProps {
  readonly children: React.ReactNode
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${neu.variable} ${inter.className} ${cath.variable} ${lombok.variable}`}
      >
        <Providers>
          <div className="relative dark:bg-black">
            <Header />
            <div className="container mx-auto flex min-h-screen max-w-3xl flex-col px-4 py-5 md:px-16">
              {children}
            </div>
            <ScrollToTopButton />
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
      <Analytics />
    </html>
  )
}
