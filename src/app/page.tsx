'use client'
import About from '@/components/home/about'
import CallToAction from '@/components/home/call-to-action'

const Home = () => {
  return (
    <main className="mb-10 flex min-h-screen flex-col items-center justify-between gap-20 p-20">
      Hello World
      <About />
      <CallToAction />
    </main>
  )
}

export default Home
