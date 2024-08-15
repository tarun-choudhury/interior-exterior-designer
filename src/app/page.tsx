'use client'
import { type EmblaOptionsType } from 'embla-carousel'

import CallToAction from '@/components/home/call-to-action'
import Catchphrase from '@/components/home/catchphrase'
import CustomerBrands from '@/components/home/customer-brands'
import EmblaCarousel from '@/components/home/hero-carousel'

const Home = () => {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <main className="mb-10 min-h-screen bg-60-light">
      <EmblaCarousel options={OPTIONS} slides={SLIDES} />
      <div className="flex flex-col items-center justify-between gap-20 p-20">
        <Catchphrase />
        <CustomerBrands />
        <CallToAction />
      </div>
    </main>
  )
}

export default Home
