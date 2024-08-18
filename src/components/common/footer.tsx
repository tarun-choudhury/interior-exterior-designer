import Link from 'next/link'

import jsonData from '@/assets/json/links.json'
import Dot from '@/assets/svg/dot'

const Footer = () => {
  const links = jsonData.links
  return (
    <footer className="bottom-0 mt-auto w-full bg-60 pt-10 xl:p-0">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">
        <div className="col-span-1 flex flex-col gap-2 px-4 sm:col-span-2 sm:px-10 lg:col-span-3 xl:col-span-2 xl:my-20">
          <Link
            className="text-30 w-fit text-3xl tracking-wider transition-all md:text-3xl lg:mb-2"
            href=""
          >
            Interior Exterior Designer
          </Link>
          <div className="flex items-center px-1 text-sm">
            <Link
              className="hover:text-30 w-fit tracking-wider transition-all"
              href=""
            >
              Facebook
            </Link>
            <Dot />
            <Link
              className="hover:text-30 w-fit tracking-wider transition-all"
              href=""
            >
              IndiaMart
            </Link>
            <Dot />
            <Link
              className="hover:text-30 w-fit tracking-wider transition-all"
              href="https://wa.me/9007992282"
            >
              WhatsApp
            </Link>
          </div>
          <div className="flex flex-col gap-1 px-1 font-mono text-xs font-light lg:text-sm">
            <Link href="mailto:tarun.choudhury@interior-designers.in">
              tarun.choudhury@interior-designers.in
            </Link>
            <Link href="tel:9007992282">+91 90079 92282</Link>
            <Link href="tel:9748113277">+91 97481 13277</Link>
          </div>
        </div>
        <div className="col-span-1 grid grid-cols-2 justify-items-center py-4 text-xs sm:gap-4 sm:pl-10 md:text-sm lg:col-span-3 lg:justify-items-start lg:text-base xl:col-span-2 xl:my-20 xl:p-0">
          <nav className="flex flex-col">
            {links.map((i) => {
              return (
                i.index < 6 && (
                  <Link
                    key={i.index}
                    className="hover:text-30 mb-3 w-fit tracking-wider transition-all md:mb-2"
                    href={i.href}
                  >
                    {i.title}
                  </Link>
                )
              )
            })}
          </nav>

          <nav className="flex flex-col">
            {links.map((i) => {
              return (
                i.index >= 6 && (
                  <Link
                    key={i.index}
                    className="hover:text-30 mb-3 w-fit tracking-wider transition-all md:mb-2"
                    href={i.href}
                  >
                    {i.title}
                  </Link>
                )
              )
            })}
          </nav>
        </div>
        <div className="col-span-1 h-80 sm:size-full lg:col-span-6 lg:h-60 lg:w-full xl:col-span-2 xl:size-full">
          <iframe
            // allowfullscreen=""
            className="size-full"
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14733.687969403227!2d88.41617166996004!3d22.600711685903697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275ff5d7c5509%3A0xad7d469c817a5b3f!2sInteriorexteriordesigner!5e0!3m2!1sen!2sin!4v1723050687541!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
      {/* <p className="text-left text-sm font-medium text-gray-600 md:text-center">
          © Copyright 2020 Skcript Inc. All Rights Reserved.
        </p> */}
    </footer>
  )
}

export default Footer
