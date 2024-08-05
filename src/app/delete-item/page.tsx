'use client'

import { useState } from 'react'

import useDelItems from '@/hooks/use-del-items'
import useGetAllItems from '@/hooks/use-get-all-items'

const DelItem = () => {
  const [reload, setReload] = useState(false)
  const { loading: getLoading, items } = useGetAllItems(reload)
  const { loading: delLoading, delItems } = useDelItems()
  const [selectedIds, setSelectedIds] = useState([])

  const handleSelect = (id: never) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((i) => i !== id))
    } else {
      setSelectedIds([...selectedIds, id])
    }
  }

  const handleDelete = async () => {
    console.log(selectedIds)
    if (selectedIds.length === 0) return

    await delItems({ itemIds: selectedIds, setSelectedIds })
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
              onChange={() => handleSelect(item._id as never)}
            />
            {item.title} - {item.price} - {item.category}
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
