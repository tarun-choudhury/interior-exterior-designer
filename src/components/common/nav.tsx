'use client'
import useAdminState from '@/context/admin-zustand'
import Link from 'next/link'

import useLogout from '@/hooks/use-logout'

const Nav = () => {
  const { loading, logout } = useLogout()
  const { admin }: any = useAdminState()
  const handleSubmit = async () => {
    console.log('logout/ui')
    await logout()
  }

  return (
    <div className="flex items-center justify-between bg-gray-800 px-6 py-4 text-white">
      <Link className="text-lg font-semibold" href="/">
        Interior Exterior Designer
      </Link>
      <div className="">
        {!admin && (
          <div className="flex gap-4">
            <Link className="hover:text-gray-300" href="/catalogue">
              Catalogue
            </Link>
            <Link className="hover:text-gray-300" href="/about">
              About Us
            </Link>
            <Link className="hover:text-gray-300" href="/contact">
              Contact Us
            </Link>
          </div>
        )}
        {admin && (
          <div className="flex gap-4">
            <Link className="hover:text-gray-300" href="/add-item">
              Add Item
            </Link>
            <Link className="hover:text-gray-300" href="/del-item">
              Delete Item
            </Link>
            <button
              className="btn btn-outline-primary rounded-none"
              onClick={handleSubmit}
            >
              {loading ? 'Loading...' : 'Logout'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Nav