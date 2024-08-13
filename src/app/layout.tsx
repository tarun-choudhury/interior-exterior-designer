import type { Metadata } from 'next'
import { Julius_Sans_One, Merriweather } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import Footer from '@/common/footer'
import Nav from '@/common/nav'
import './globals.css'

const juliusSansOne = Julius_Sans_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--julius-sans-one'
})
const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--merriweather'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body
        className={`${juliusSansOne.variable} ${merriweather.variable} text-60-dark font-sans`}
      >
        <Nav />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}

export default RootLayout
