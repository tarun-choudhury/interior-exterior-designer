import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import Button from '@/common/button'

interface ItemCardProps {
  key: string
  title: string
  image_url: string
  price: number
  desc: string
  setPopup: (popup: boolean) => void
  setSelectedItem: (item: any) => void
  userEmail: string
}

const ItemCard = ({
  title,
  image_url,
  price,
  desc,
  setPopup,
  setSelectedItem,
  userEmail
}: ItemCardProps) => {
  const descRef = useRef<HTMLParagraphElement>(null)
  const [showMore, setShowMore] = useState(false)
  const [showLink, setShowLink] = useState(false)

  useEffect(() => {
    if (descRef.current) {
      setShowLink(descRef.current.scrollHeight > descRef.current.clientHeight)
    }
  }, [])

  return (
    <div
      className={`flex w-full flex-col gap-2 ${!showMore && 'md:h-[27rem] xl:h-[27rem]'} bg-white p-6 outline outline-1 outline-30 transition-all hover:-translate-y-1 hover:shadow-lg md:p-4 2xl:w-64`}
    >
      <div className="p-1">
        <div className="group relative">
          <div className="relative -right-1 -top-0.5 left-1 h-48 transition-all group-hover:-translate-x-1 group-hover:translate-y-0.5 md:h-40">
            <Image
              fill
              alt={title}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 33vw, (max-width: 1536px) 25vw, 20vw"
              src={image_url}
            />
          </div>
          <div className="absolute -left-1 right-1 top-0.5 h-48 w-full rounded-none border border-30 bg-transparent transition-all group-hover:-translate-y-0.5 group-hover:translate-x-1 md:h-40"></div>
        </div>
      </div>
      <h1 className="md:text-lg lg:text-xl xl:text-lg">Rs {price}</h1>
      <h1 className="md:text-lg lg:text-xl xl:text-lg">{title}</h1>
      <p
        ref={descRef}
        className={`whitespace-pre-line text-xs text-30-light ${!showMore && 'max-h-16 overflow-hidden'} `}
      >
        {desc}
      </p>
      {showLink && (
        <button
          className="w-fit text-xs text-30"
          onClick={() => {
            setShowMore(!showMore)
          }}
        >
          {showMore ? 'Show Less' : '...Show More'}
        </button>
      )}
      <div className="mt-auto">
        <Button
          loading={false}
          onclick={() => {
            console.log('userEmail', userEmail)
            console.log('IMAGE URL', image_url)
            console.log('Type', typeof image_url)
            setSelectedItem({ title, image_url, price, desc })
            setPopup(true)
          }}
          text="Place Order"
          type="button"
          width={0}
        />
      </div>
    </div>
  )
}

export default ItemCard
