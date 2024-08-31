import Image from 'next/image'

const CustomerBrands = () => {
  const logoCount = 3
  const logos = Array.from(Array(logoCount).keys())
  return (
    <div className="w-full max-w-7xl space-y-10 p-4 sm:space-y-16 sm:p-10 md:space-y-20 md:p-20">
      <h1 className="text-center tracking-wide text-60-dark sm:text-lg md:text-xl lg:text-2xl">
        We’re proud to have Big Brands as our Clients
      </h1>
      <div className="flex w-full flex-wrap justify-evenly gap-10 sm:gap-10">
        {logos.map((logo) => (
          <div
            key={logo}
            className="relative flex h-20 w-40 items-center justify-center md:h-24 md:w-48 lg:h-32 lg:w-64"
          >
            <Image
              fill
              alt="Customer Logo"
              className="transition-all duration-300 hover:-translate-y-1"
              sizes="(max-width: 640px) 50vw, (max-width: 1224px) 33vw, (max-width: 1280px) 25vw, 20vw"
              src={`/icons/customer-${logo + 1}.svg`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomerBrands
