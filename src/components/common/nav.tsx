'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import useLogout from '@/hooks/use-logout'
import clientToken from '@/utils/get-client-token'

import Button from './button'

const Nav = () => {
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
    <div className="fixed z-10 flex h-16 w-full items-center justify-between bg-60-light px-10 py-4 text-60-dark">
      <Link
        className="text-3xl text-primary transition-all duration-300 hover:tracking-widest"
        href="/"
      >
        Interior Exterior Designer
      </Link>
      <div className="">
        {!token && (
          <div className="flex items-center gap-10">
            <Link
              className="text-lg transition-all hover:text-primary"
              href="/catalogue"
            >
              Catalogue
            </Link>
            <Link
              className="text-lg transition-all hover:text-primary"
              href="/know-about-us"
            >
              About Us
            </Link>
            <Link
              className="text-lg transition-all hover:text-primary"
              href="/contact-us"
            >
              Contact Us
            </Link>
          </div>
        )}
        {token && (
          <div className="flex items-center gap-10">
            <Link
              className="text-lg transition-all hover:text-primary"
              href="/create-items"
            >
              Add Item
            </Link>
            <Link
              className="text-lg transition-all hover:text-primary"
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
        )}
      </div>
    </div>
  )
}

export default Nav
