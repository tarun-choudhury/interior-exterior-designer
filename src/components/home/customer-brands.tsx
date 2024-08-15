import Image from 'next/image'

const CustomerBrands = () => {
  const logoCount = 3
  const logos = Array.from(Array(logoCount).keys())
  return (
    <div className="w-full max-w-7xl space-y-20 p-20">
      <h1 className="text-center text-2xl tracking-wide text-60-dark">
        We’re proud to have Big Brands as our Clients
      </h1>
      <div className="flex w-full justify-evenly gap-10">
        {logos.map((logo) => (
          <div key={logo} className="flex items-center justify-center">
            <Image
              alt="Customer Logo"
              className="transition-all duration-300 hover:-translate-y-1"
              height={200}
              src={`/icons/customer-${logo + 1}.svg`}
              width={200}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomerBrands
