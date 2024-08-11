'use client'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { links } from '@/assets/json/links.json'
import Footer from '@/common/footer'
import Aside from '@/components/catalogue/aside'
import ItemCard from '@/components/catalogue/item-card'
import Search from '@/components/catalogue/search'
import useGetItemsByCat from '@/hooks/use-get-items-by-category'

const Page = () => {
  const pathname = usePathname()
  const id = pathname.split('/').pop()
  const { loading, items } = useGetItemsByCat(id)
  const [search, setSearch] = useState('')

  return (
    <div className="">
      <div className="flex">
        <Aside />
        <div className="mx-4 mb-20 mt-10 flex basis-5/6 flex-col gap-4">
          <div className="flex items-end justify-between">
            <p className="text-xl">
              {links.map((i) => {
                if (i.href.split('/').pop() === id) return i.title
              })}{' '}
              Works ---
            </p>
            <Search setSearch={setSearch} />
          </div>
          <div className="grid h-fit grid-cols-4 gap-4">
            {items
              .filter((item: any) => {
                if (search === '') return item
                else if (
                  item.title.toLowerCase().includes(search.toLowerCase())
                )
                  return item
              })
              .map((item: any) => (
                <>
                  <ItemCard key={item._id} {...item} />
                  <ItemCard key={item._id} {...item} />
                  <ItemCard key={item._id} {...item} />
                  <ItemCard key={item._id} {...item} />
                </>
              ))}
            {loading ? loading : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Page
