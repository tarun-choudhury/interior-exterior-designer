"use client"
import Image from 'next/image'

import Button from '@/common/button'

const ContactUs = () => {
  return (
    <div className="flex w-full flex-col items-end bg-60-light md:flex-row">
      {/* Left Side: Contact Info */}
      <div className="flex w-full flex-col gap-10 p-20 pr-0 text-center md:mb-10 md:w-1/2 md:text-left">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl">Contact Us</h1>
          <div className="flex flex-col px-10">
            <p className="">Liked a design?</p>
            <p className="">Want to place a custom order?</p>
            <p className="">Reach out to us via Email or WhatsApp</p>
          </div>
        </div>
        <div className="flex justify-center gap-10 px-6 md:justify-start">
          <Button
            loading={false}
            onclick={() => {}}
            text="Email"
            type="button"
            width={12}
          />
          <Button
            loading={false}
            onclick={() => {}}
            text="WhatsApp"
            type="button"
            width={12}
          />
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="relative h-96 w-1/2 md:visible">
        <Image
          alt="Contact Us Image"
          layout="fill"
          objectFit="cover"
          src="/contact-us.svg"
        />
      </div>
    </div>
  )
}

export default ContactUs
