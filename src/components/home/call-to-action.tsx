import Image from 'next/image'

const CallToAction = () => {
  return (
    <section className="relative w-full px-0 py-12 sm:px-20">
      <div className="card card-body grid grid-cols-1 items-center gap-10 overflow-visible rounded-none border-custR px-4 pb-6 pt-12 text-custB md:grid-cols-5 md:px-10 lg:gap-0">
        <div className="col-span-1 md:col-span-3">
          <p className="mb-0 font-serif text-xl font-normal leading-tight lg:text-2xl">
            Enjoy complimentary delivery within 30 km radius.
          </p>
          <p className="mb-8 text-base lg:text-lg">
            Partner with us for exceptional design solutions.
          </p>
          <div className="relative ml-10 w-fit">
            <button className="peer btn btn-lg btn-primary absolute -right-4 -top-2 left-4 w-full rounded-none bg-custY text-custR shadow sm:w-auto">
              Work with us
            </button>
            <button className="btn btn-lg z-50 w-full rounded-none border border-custR text-transparent shadow hover:-translate-y-2 hover:translate-x-4 hover:border hover:border-custR hover:text-transparent peer-hover:-translate-y-2 peer-hover:translate-x-4 sm:w-auto">
              Work with us
            </button>
          </div>
        </div>
        <Image
          alt="Hello"
          className="absolute -bottom-4 right-10"
          height={300}
          src="/shipping.png"
          width={300}
        />
      </div>
    </section>
  )
}

export default CallToAction
