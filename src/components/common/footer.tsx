import Link from 'next/link'

import { links } from '@/json/links.json'
import Dot from 'svg/dot'

const Footer = () => {
  return (
    <footer className="mb-auto w-full bg-custT text-custB">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
        <div className="col-span-2 my-20 flex flex-col gap-2 px-10 md:col-span-2">
          <Link
            className="mb-3 w-fit text-3xl uppercase tracking-wider text-primary transition md:mb-2"
            href=""
          >
            Interior Exterior Designer
          </Link>
          <div className="flex justify-evenly">
            <Link
              className="mb-3 w-fit uppercase tracking-wider transition hover:text-primary md:mb-2"
              href=""
            >
              Instagram
            </Link>
            <Dot />
            <Link
              className="mb-3 w-fit uppercase tracking-wider transition hover:text-primary md:mb-2"
              href=""
            >
              Facebook
            </Link>
            <Dot />
            <Link
              className="mb-3 w-fit uppercase tracking-wider transition hover:text-primary md:mb-2"
              href=""
            >
              IndiaMart
            </Link>
          </div>
          <div className="flex flex-col gap-1 text-xs">
            <p>tarun.choudhury@interior-designers.in</p>
            <p>+91 90079 92282</p>
            <p>+91 97481 13277</p>
          </div>
        </div>
        <nav className="my-20 flex flex-col">
          {links.map((i) => {
            return (
              i.index < 6 && (
                <Link
                  key={i.index}
                  className="mb-3 w-fit uppercase tracking-wider transition hover:text-primary md:mb-2"
                  href={i.href}
                >
                  {i.title}
                </Link>
              )
            )
          })}
        </nav>

        <nav className="my-20 flex flex-col">
          {links.map((i) => {
            return (
              i.index >= 6 && (
                <Link
                  key={i.index}
                  className="mb-3 w-fit uppercase tracking-wider transition hover:text-primary md:mb-2"
                  href={i.href}
                >
                  {i.title}
                </Link>
              )
            )
          })}
        </nav>
        <div className="col-span-2">
          <iframe
            allowfullscreen=""
            className="size-full"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
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
