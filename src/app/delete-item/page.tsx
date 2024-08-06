'use client'

import Image from 'next/image'
import { useState } from 'react'

import useDelItems from '@/hooks/use-del-items'
import useGetAllItems from '@/hooks/use-get-all-items'

const DelItem = () => {
  const [reload, setReload] = useState(false)
  const { loading: getLoading, items } = useGetAllItems(reload)
  const { loading: delLoading, delItems } = useDelItems()
  const [selectedIds, setSelectedIds] = useState([])
  const [selectedPublicIds, setSelectedPublicIds] = useState([])

  const handleSelect = (id: never, publicId: never) => {
    if (selectedIds.includes(id) && selectedPublicIds.includes(publicId)) {
      setSelectedIds(selectedIds.filter((i) => i !== id))
      setSelectedPublicIds(selectedPublicIds.filter((i) => i !== publicId))
    } else {
      setSelectedIds([...selectedIds, id])
      setSelectedPublicIds([...selectedPublicIds, publicId])
    }
  }

  const handleDelete = async () => {
    console.log(selectedIds)
    console.log(selectedPublicIds)
    if (selectedIds.length === 0 || selectedPublicIds.length === 0) return

    await delItems({ itemIds: selectedIds, publicIds: selectedPublicIds, setSelectedIds })
    setReload(!reload)
  }

  return (
    <div>
      <h1>Delete Multiple Items</h1>
      <ul>
        {items.map((item: any) => (
          <li key={item._id}>
            <input
              checked={selectedIds.includes(item._id as never)}
              type="checkbox"
              value={item._id}
              onChange={() => handleSelect(item._id as never, item.public_id as never)}
            />
            {item.title} - {item.price} - {item.category}
            <Image
              alt={item.title}
              height={300}
              src={item.image_url}
              width={300}
            />
          </li>
        ))}
      </ul>
      <button type="submit" onClick={handleDelete}>
        {delLoading ? 'loading' : 'Delete Selected Items'}
      </button>
      {getLoading ? 'loading Items' : null}
    </div>
  )
}

export default DelItem
