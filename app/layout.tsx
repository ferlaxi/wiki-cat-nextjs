import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wiki Cat',
  description: 'Generated by create next app',
  icons: 'icon.ico'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
