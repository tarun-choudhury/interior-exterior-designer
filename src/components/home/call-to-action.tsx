import Image from 'next/image'

import Button from '@/common/button'

const CallToAction = () => {
  return (
    <div className="my-12 grid w-full grid-cols-1 items-center gap-10 overflow-visible rounded-none px-4 pb-6 pt-12 outline outline-1 outline-primary md:grid-cols-5 md:px-10 lg:gap-0">
      <div className="col-span-1 space-y-4 md:col-span-3">
        <div className="">
          <h1 className="text-2xl">Enjoy free delivery within 30 km radius.</h1>
          <h1 className="mb-8 text-lg">
            Partner with us for exceptional design solutions.
          </h1>
        </div>
        <div className="ml-10">
          <Button
            loading={false}
            onclick={() => {}}
            text="Work With Us"
            type="button"
            width={12}
          />
        </div>
      </div>
      <div className="relative size-full md:col-span-2">
        <Image
          alt="Hello"
          className="absolute -bottom-10 right-4 transition-all duration-300 hover:-bottom-5 hover:right-0"
          height={300}
          src="/shipping.png"
          width={300}
        />
      </div>
    </div>
  )
}

export default CallToAction
