import '../styles/globals.css'
import '../styles/globals-theme.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import React from 'react'
import { Providers } from './providers'
import Navbar from '../components/Navbar'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Bekircan Akyüz - Software Engineer',
  description: 'Software Engineer specializing in creating exceptional digital experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
