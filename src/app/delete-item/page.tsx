'use client'

import useGetAllItems from "@/hooks/use-get-all-items"

const DelItem = () => {
  const { loading, items } = useGetAllItems()
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

export default DelItem
