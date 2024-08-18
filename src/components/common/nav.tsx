'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import HamburgerMenu from '@/assets/svg/hamburger-menu'
import useLogout from '@/hooks/use-logout'
import clientToken from '@/utils/get-client-token'

import Button from './button'

const Nav = () => {
  const [open, setOpen] = useState(false)
  const { loading, logout } = useLogout()
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    // Set the initial token value
    setToken(clientToken())

    // Listen for changes in the token
    const handleTokenChange = () => {
      setToken(clientToken())
    }

    const interval = setInterval(handleTokenChange, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async () => {
    console.log('logout/ui')
    await logout()
  }

  return (
    <nav className="fixed z-10 flex h-16 w-full items-center justify-between bg-60-light px-4 shadow-sm">
      <Link
        className="text-xl text-30 transition-all duration-300 md:text-3xl md:hover:tracking-widest"
        href="/"
      >
        Interior Exterior Designer
      </Link>
      <div className="flex items-center gap-10">
        <div className="group flex lg:hidden">
          <button
            className={`size-fit p-0 ${open && 'text-30'} active:scale-90`}
            x-spread="trigger"
            onBlur={() => {
              setTimeout(() => {
                setOpen(false)
              }, 100)
            }}
            onClick={() => {
              setTimeout(() => {
                setOpen(!open)
              }, 100)
            }}
          >
            <HamburgerMenu />
          </button>
          <div
            className={`dropdown-list ${!open && 'hidden'} right-4 top-14 space-y-2 rounded-none bg-60-light shadow`}
          >
            {token ? (
              <div className="">
                <Link
                  className="dropdown-item rounded-none text-xs transition-all hover:bg-60 focus:bg-60 focus:text-30 focus:ring-0 active:outline active:outline-1 active:outline-30 sm:text-sm"
                  href="/create-items"
                >
                  Add Item
                </Link>
                <Link
                  className="dropdown-item rounded-none text-xs transition-all hover:bg-60 focus:bg-60 focus:text-30 focus:ring-0 active:outline active:outline-1 active:outline-30 sm:text-sm"
                  href="/delete-items"
                >
                  Delete Item
                </Link>
                <div className="mt-2">
                  <Button
                    loading={loading}
                    onclick={handleSubmit}
                    text="Logout"
                    type="button"
                    width={0}
                  />
                </div>
              </div>
            ) : (
              <div className="">
                <Link
                  className="dropdown-item rounded-none text-xs transition-all hover:bg-60 focus:bg-60 focus:text-30 focus:ring-0 active:outline active:outline-1 active:outline-30 sm:text-sm"
                  href="/catalogue"
                >
                  Catalogue
                </Link>
                <Link
                  className="dropdown-item rounded-none text-xs transition-all hover:bg-60 focus:bg-60 focus:text-30 focus:ring-0 active:outline active:outline-1 active:outline-30 sm:text-sm"
                  href="/know-about-us"
                >
                  About Us
                </Link>
                <Link
                  className="dropdown-item rounded-none text-xs transition-all hover:bg-60 focus:bg-60 focus:text-30 focus:ring-0 active:outline active:outline-1 active:outline-30 sm:text-sm"
                  href="/contact-us"
                >
                  Contact Us
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:block">
          {token ? (
            <div className="flex items-center gap-10">
              <Link
                className="text-lg transition-all hover:text-30"
                href="/create-items"
              >
                Add Item
              </Link>
              <Link
                className="text-lg transition-all hover:text-30"
                href="/delete-items"
              >
                Delete Item
              </Link>
              <Button
                loading={loading}
                onclick={handleSubmit}
                text="Logout"
                type="button"
                width={0}
              />
            </div>
          ) : (
            <div className="flex items-center gap-10">
              <Link
                className="text-lg transition-all hover:text-30"
                href="/catalogue"
              >
                Catalogue
              </Link>
              <Link
                className="text-lg transition-all hover:text-30"
                href="/know-about-us"
              >
                About Us
              </Link>
              <Link
                className="text-lg transition-all hover:text-30"
                href="/contact-us"
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav
