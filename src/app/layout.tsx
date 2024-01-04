import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SmoothScrolling from './components/SmoothScrolling.jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'João Hall',
  description: 'Portfólio do João Hall',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  )
}
