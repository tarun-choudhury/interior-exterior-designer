'use client'
import { usePathname } from 'next/navigation'

import useGetItemsByCat from '@/hooks/use-get-items-by-category'

const Page = () => {
  const pathname = usePathname()
  const id = pathname.split('/').pop()
  const { loading, items } = useGetItemsByCat(id)

  return (
    <div>
      {items.map((item: any) => (
        <div key={item._id}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <p>{item.price}</p>
          <p>{item.category}</p>
        </div>
      ))}
      {loading ? loading : null}
    </div>
  )
}

export default Page
