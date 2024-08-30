'use client'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import { toast } from 'react-hot-toast'

import jsonData from '@/assets/json/links.json'
import XClose from '@/assets/svg/x-close'
import Button from '@/common/button'
import { ItemCardSkeleton } from '@/common/skeleton'
import Aside from '@/components/catalogue/aside'
import ItemCard from '@/components/catalogue/item-card'
import Search from '@/components/catalogue/search'
import useUserEmailState from '@/global/user-email-state'
import useGetItemsByCat from '@/hooks/use-get-items-by-category'
import useSendEmail from '@/hooks/use-send-email'

interface PageProps {
  params: {
    id: string
  }
}

const Page = ({ params }: PageProps) => {
  const links = jsonData.links
  const { id } = params
  const { loading, items } = useGetItemsByCat(id)
  const { loading: emailLoading, sendEmail } = useSendEmail()
  const [search, setSearch] = useState('')
  const [popup, setPopup] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [selectedItem, setSelectedItem] = useState({
    title: '',
    image_url: '',
    price: 0,
    desc: ''
  })
  const { email: userEmail, setEmail: setUserEmail }: any = useUserEmailState()

  const handleClick = () => {
    if (email === '') toast.error('Email is required')
    else {
      if (userEmail === '') setUserEmail(email)
      sendEmail({
        from: email,
        subject: 'New Order Confirmation from Website',
        message: selectedItem
      })
      setPopup(false)
    }
  }

  if (links.findIndex((i) => i.href === id) === -1) {
    notFound()
  }

  return (
    <div className="relative bg-60-light md:flex">
      {popup && (
        <div className="fixed top-0 z-10 h-screen w-full bg-60-dark/30"></div>
      )}
      {popup && userEmail === '' && (
        <div className="fixed left-1/2 top-1/3 z-20 w-[26rem] max-w-7xl -translate-x-1/2 -translate-y-1/3 space-y-2 bg-white p-4 shadow-lg outline outline-1 outline-30">
          <button
            className="ml-auto block w-fit transition-all hover:scale-105"
            onClick={() => setPopup(false)}
          >
            <XClose />
          </button>
          <div className="space-y-4 p-6 pt-0">
            <div className="space-y-1">
              <label className="text-sm text-30-light">Your Email</label>
              <input
                required
                className="form-input rounded-none border-30-light font-serif placeholder:font-sans"
                placeholder="Enter your email here"
                type="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </div>
            <div className="flex justify-center py-1">
              <Button
                loading={false}
                onclick={handleClick}
                text="Place Order"
                type="submit"
                width={12}
              />
            </div>
          </div>
        </div>
      )}
      {popup && userEmail !== '' && (
        <div className="fixed left-1/2 top-1/3 z-20 w-[26rem] max-w-7xl -translate-x-1/2 -translate-y-1/3 space-y-4 bg-white p-4 shadow-lg outline outline-1 outline-30">
          <button
            className="ml-auto block w-fit transition-all hover:scale-105"
            onClick={() => setPopup(false)}
          >
            <XClose />
          </button>
          <div className="space-y-4 p-6 pt-0">
            <h1 className="text-center text-xl">Confirm Order?</h1>
            <div className="flex justify-center py-1">
              <Button
                loading={false}
                onclick={handleClick}
                text="Confirm"
                type="submit"
                width={12}
              />
            </div>
          </div>
        </div>
      )}
      <Aside />
      <div className="mx-10 mb-10 flex flex-col gap-10 pb-20 pt-10 md:mx-4 md:basis-full md:py-20 lg:basis-4/5 xl:basis-5/6 xl:gap-10">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h1 className="md:text-2xl lg:text-3xl">
            {links.map((i) => {
              if (i.href.split('/').pop() === id) return i.title
            })}{' '}
            Works -
          </h1>
          <Search setSearch={setSearch} />
        </div>
        <div className="grid h-fit gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-4 xl:grid-cols-4 xl:gap-4 2xl:flex 2xl:flex-wrap">
          {items
            .filter((item: any) => {
              if (search === '') return item
              else if (item.title.toLowerCase().includes(search.toLowerCase()))
                return item
            })
            .map((item: any) => (
              <ItemCard
                key={item._id}
                loading={emailLoading}
                {...item}
                setPopup={setPopup}
                setSelectedItem={setSelectedItem}
                userEmail={userEmail}
              />
            ))}
          {loading ? <ItemCardSkeleton /> : null}
        </div>
        {items.length === 0 && (
          <div className="flex h-40 w-full flex-col items-center justify-center gap-4 lg:h-full lg:pb-40 xl:pb-0">
            <p className="xl:text-xl">No items found</p>
            <p className="xl:text-base">Browse other categories</p>
            <Link
              className="animate-pulse text-30 underline underline-offset-8 lg:hidden"
              href="/catalogue"
            >
              Return to Catalogue
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Page
