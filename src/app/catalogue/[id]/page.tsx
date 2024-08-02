'use client'
import { usePathname } from 'next/navigation'

import useGetItem from '@/hooks/use-get-item'

const Page = () => {
  const pathname = usePathname()
  const id = pathname.split('/').pop()
  const { loading, items } = useGetItem(id)

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
