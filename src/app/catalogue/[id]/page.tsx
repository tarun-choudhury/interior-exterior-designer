'use client'
import { usePathname } from 'next/navigation'

import Footer from '@/common/footer'
import Aside from '@/components/catalogue/aside'
import ItemCard from '@/components/catalogue/item-card'
import useGetItemsByCat from '@/hooks/use-get-items-by-category'
import { links } from '@/json/links.json'

const Page = () => {
  const pathname = usePathname()
  const id = pathname.split('/').pop()
  const { loading, items } = useGetItemsByCat(id)

  return (
    <div className="">
      <div className="flex">
        <Aside />
        <div className="mx-4 mb-20 mt-10 flex basis-5/6 flex-col gap-4">
          <p className="text-xl">
            {links.map((i) => {
              if (i.href.split('/').pop() === id) return i.title
            })}{' '}
            Works ---
          </p>
          <div className="grid h-fit grid-cols-4 gap-4">
            {items.map((item: any) => (
              <ItemCard key={item._id} {...item} />
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
