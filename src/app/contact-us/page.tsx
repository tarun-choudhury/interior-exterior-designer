'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import Button from '@/common/button'

const ContactUs = () => {
  const router = useRouter()
  return (
    <div className="mb-20 flex w-full flex-col items-start bg-60-light sm:mb-0 sm:flex-row">
      {/* Left Side: Contact Info */}
      <div className="flex w-full flex-col gap-4 p-10 pr-0 sm:w-1/2 md:mb-10 md:gap-10 md:text-left xl:p-20">
        <div className="flex flex-col gap-4 md:mt-10 xl:m-0">
          <h1 className="md:text-2xl xl:text-3xl">Contact Us</h1>
          <div className="flex flex-col px-4 text-xs xl:px-10 xl:text-base">
            <p className="">Liked a design?</p>
            <p className="">Want to place a custom order?</p>
            <p className="">Reach out to us via Email or WhatsApp</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 pr-10 md:justify-center xl:flex-row xl:justify-start xl:gap-10 xl:px-6">
          <Button
            loading={false}
            onclick={() => {router.push('mailto:tarun.choudhury@interior-designers.in')}}
            text="Email"
            type="button"
            width={12}
          />
          <Button
            loading={false}
            onclick={() => {router.push('https://wa.me/91 9007992282')}}
            text="WhatsApp"
            type="button"
            width={12}
          />
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="relative hidden h-96 w-1/2 sm:block md:h-[28rem] xl:h-[30rem] 2xl:h-[32rem]">
        <Image
          fill
          alt="Contact Us Image"
          object-fit="cover"
          sizes="50vw"
          src="/other images/contact-us.webp"
        />
      </div>
    </div>
  )
}

export default ContactUs
