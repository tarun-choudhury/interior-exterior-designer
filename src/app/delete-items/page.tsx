'use client'

import Image from 'next/image'
import { useState } from 'react'

import Button from '@/common/button'
import { DeleteCardSkeleton } from '@/common/skeleton'
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

    await delItems({
      itemIds: selectedIds,
      publicIds: selectedPublicIds,
      setSelectedIds
    })
    setReload(!reload)
  }

  return (
    <div className="flex flex-col gap-10 bg-60-light p-20 pb-32">
      <h1 className="ml-10 w-fit text-center text-3xl text-primary-light">
        Delete Multiple Items
      </h1>
      <ul className="flex flex-wrap gap-10">
        {items.map((item: any) => (
          <li
            key={item._id}
            className={`cursor-pointer p-4 outline outline-1 outline-primary ${selectedIds.includes(item._id as never) && 'bg-secondary'}`}
            onClick={() =>
              handleSelect(item._id as never, item.public_id as never)
            }
          >
            <input
              checked={selectedIds.includes(item._id as never)}
              type="checkbox"
            />
            <div className="space-y-1">
              <h1>{item.title}</h1>
              <h1>{item.price}</h1>
              <h1 className="text-sm text-primary">{item.category}</h1>
            </div>
            <div className="relative size-60">
              <Image
                fill
                alt={item.title}
                className="object-cover"
                src={item.image_url}
              />
            </div>
          </li>
        ))}
      </ul>
      {selectedIds.length != 0 && (
        <div className="fixed right-0 top-0 flex w-full items-center justify-end gap-10 bg-60-light px-10 py-2">
          <Button
            loading={delLoading}
            onclick={handleDelete}
            text="Delete Items"
            type="submit"
            width={12}
          />
          <Button
            loading={delLoading}
            onclick={() => {
              setSelectedIds([])
              setSelectedPublicIds([])
            }}
            text="Cancel"
            type="button"
            width={12}
          />
        </div>
      )}
      {getLoading ? <DeleteCardSkeleton /> : null}
    </div>
  )
}

export default DelItem
