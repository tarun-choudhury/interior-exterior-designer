'use client'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import jsonData from '@/assets/json/links.json'
import Aside from '@/components/catalogue/aside'
import ItemCard from '@/components/catalogue/item-card'
import Search from '@/components/catalogue/search'
import useGetItemsByCat from '@/hooks/use-get-items-by-category'

const Page = () => {
  const links = jsonData.links
  const pathname = usePathname()
  const id = pathname.split('/').pop()
  const { loading, items } = useGetItemsByCat(id)
  const [search, setSearch] = useState('')

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
          {loading ? loading : null}
        </div>
      </div>
    </div>
  )
}

export default Page
