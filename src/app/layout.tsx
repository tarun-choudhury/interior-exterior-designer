import type { Metadata } from 'next'
import { Italianno, Julius_Sans_One, Merriweather } from 'next/font/google'
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
const italianno = Italianno({
  weight: '400',
  subsets: ['latin'],
  variable: '--italianno'
})

export const metadata: Metadata = {
  title: 'Interior Exterior Designer',
  description: `Welcome to Interior Exterior Designer, your premier destination for bespoke furniture painting, and renovation services.
With over 18 years of experience, we have established ourselves as a trusted name in the industry, delivering unparalleled craftsmanship and exceptional service. and In service`
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body
        className={`${juliusSansOne.variable} ${merriweather.variable} ${italianno.variable} bg-60-light font-sans text-60-dark`}
      >
        <Nav />
        <div className="flex min-h-screen flex-col justify-between pt-16">
          {children}
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  )
}

export default RootLayout
