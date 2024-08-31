'use client'
import { type EmblaOptionsType } from 'embla-carousel'

import CallToAction from '@/components/home/call-to-action'
import Catchphrase from '@/components/home/catchphrase'
import CustomerBrands from '@/components/home/customer-brands'
import EmblaCarousel from '@/components/home/hero-carousel'
import WhatDoWeDo from '@/components/home/what-do-we-do'

const Home = () => {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
  const SLIDE_COUNT = 12
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <main className="mb-10 min-h-screen">
      <EmblaCarousel options={OPTIONS} slides={SLIDES} />
      <div className="flex flex-col items-center justify-between gap-10 p-4 pt-0 sm:gap-20 sm:p-10 md:p-20 md:pt-0">
        <Catchphrase />
        <CustomerBrands />
        <WhatDoWeDo />
        <CallToAction />
      </div>
    </main>
  )
}

export default Home
