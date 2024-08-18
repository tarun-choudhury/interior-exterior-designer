import Image from 'next/image'
import { useRouter } from 'next/navigation'

import Button from '@/common/button'

const CallToAction = () => {
  const router = useRouter()
  return (
    <div className="my-20 grid w-full grid-cols-1 items-center gap-6 overflow-visible rounded-none px-4 py-6 outline outline-1 outline-30 sm:my-8 sm:gap-8 sm:px-6 sm:py-8 md:grid-cols-4 md:gap-10 md:px-10 lg:my-12 lg:grid-cols-5 lg:pb-6 lg:pt-12">
      <div className="col-span-1 space-y-2 md:col-span-2 lg:col-span-3">
        <div className="flex flex-col items-center gap-4 md:items-start lg:block">
          <h1 className="text-lg sm:text-xl md:text-2xl">
            Enjoy free delivery{' '}
            <span className="text-nowrap">within 30 km radius.</span>
          </h1>
          <h1 className="mb-2 text-sm sm:text-lg lg:mb-6 xl:mb-8">
            Partner with us for exceptional design solutions.
          </h1>
        </div>
        <div className="mx-auto w-fit md:ml-0 lg:ml-10">
          <Button
            loading={false}
            onclick={() => {
              router.push('mailto:tarun.choudhury@interior-designers.in')
            }}
            text="Work With Us"
            type="button"
            width={12}
          />
        </div>
      </div>
      <div className="relative hidden h-fit w-full md:col-span-2 md:block">
        <div className="absolute -bottom-28 right-0 h-40 w-56 transition-all duration-300 hover:-bottom-20 hover:right-0 lg:-bottom-28 lg:right-2 lg:h-56 lg:w-72 lg:hover:-bottom-24">
          <Image
            fill
            alt="Hello"
            object-fit="cover"
            sizes="(max-width: 1224px) 33vw, 20vw"
            src="/other images/shipping.webp"
          />
        </div>
      </div>
    </div>
  )
}

export default CallToAction
