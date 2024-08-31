import Link from 'next/link'

const WhatDoWeDo = () => {
  return (
    <div className="flex w-full flex-col justify-center gap-10 px-4 py-20 text-30-light lg:gap-10">
      <h1 className="ml-10 font-italic text-4xl text-60-dark md:ml-12 md:text-5xl lg:ml-20 lg:text-6xl xl:ml-24">
        What do we do?
      </h1>
      <p className="md:text-lg lg:text-xl xl:text-2xl">
        We build <span className="text-30">on demand</span> plywood or wooden
        furniture and other room furnishings, painting jobs, renovations, etc.
      </p>
      <p className="md:text-lg lg:text-xl xl:text-2xl">
        For <span className="text-30">more details</span>, visit our{' '}
        <Link
          className="text-60-dark underline underline-offset-8 transition-all hover:text-30"
          href="/contact-us"
        >
          Contact Us
        </Link>{' '}
        page.
      </p>
      <p className="md:text-lg lg:text-xl xl:text-2xl">
        To explore our <span className="text-30">past works</span>, visit our{' '}
        <Link
          className="text-60-dark underline underline-offset-8 transition-all hover:text-30"
          href="/catalogue"
        >
          Catalogue
        </Link>{' '}
        page.
      </p>
    </div>
  )
}

export default WhatDoWeDo
