'use client'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useState } from 'react'

import jsonData from '@/assets/json/links.json'
import { ItemCardSkeleton } from '@/common/skeleton'
import Aside from '@/components/catalogue/aside'
import ItemCard from '@/components/catalogue/item-card'
import Search from '@/components/catalogue/search'
import useGetItemsByCat from '@/hooks/use-get-items-by-category'

interface PageProps {
  params: {
    id: string
  }
}

const Page = ({ params }: PageProps) => {
  const links = jsonData.links
  const { id } = params
  const { loading, items } = useGetItemsByCat(id)
  const [search, setSearch] = useState('')

  if (links.findIndex((i) => i.href === id) === -1) {
    notFound()
  }

  return (
    <div className="bg-60-light md:flex">
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
              <ItemCard key={item._id} {...item} />
            ))}
          {loading ? <ItemCardSkeleton /> : null}
        </div>
        {items.length === 0 && (
          <div className="flex h-40 lg:h-full w-full lg:pb-40 xl:pb-0 flex-col items-center justify-center gap-4">
            <p className="xl:text-xl">No items found</p>
            <p className="xl:text-base">Browse other categories</p>
            <Link
              className="animate-pulse text-primary underline underline-offset-8 lg:hidden"
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
