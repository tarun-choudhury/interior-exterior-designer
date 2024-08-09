import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface ItemCardProps {
  key: string
  title: string
  image_url: string
  price: number
  desc: string
}

const ItemCard = ({ key, title, image_url, price, desc }: ItemCardProps) => {
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
      key={key}
      className="flex w-full flex-col gap-2 p-4 outline outline-1 outline-primary transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="px-2 py-1">
        <div className="group relative">
          <div className="relative -right-2 -top-1 left-2 transition-all group-hover:-translate-x-2 group-hover:translate-y-1 xl:h-40">
            <Image fill alt={title} layout="responsive" src={image_url} />
          </div>
          <div className="absolute -left-2 right-2 top-1 w-full rounded-none border border-custR bg-transparent transition-all group-hover:-translate-y-1 group-hover:translate-x-2 xl:h-40"></div>
        </div>
      </div>
      <p className="text-xl">Rs {price}</p>
      <p className="text-xl">{title}</p>
      <p
        ref={descRef}
        className={`whitespace-pre-line text-xs text-primary-light ${!showMore && 'max-h-16 overflow-hidden'} `}
      >
        {desc}
      </p>
      {showLink && (
        <button
          className="w-fit text-xs text-primary"
          onClick={() => {
            setShowMore(!showMore)
          }}
        >
          {showMore ? 'Show Less' : '...Show More'}
        </button>
      )}
      <div className="p-2 pb-1">
        <button className="group relative w-full">
          <button className="btn btn-lg absolute -right-2 -top-1 left-2 size-full rounded-none bg-custY text-transparent shadow transition-all group-hover:-translate-x-2 group-hover:translate-y-1"></button>
          <button className="btn btn-lg absolute -left-2 right-2 top-1 size-full rounded-none border border-custR bg-transparent transition-all group-hover:-translate-y-1 group-hover:translate-x-2"></button>
          <button className="btn btn-lg w-full rounded-none bg-transparent text-primary">
            Place Order
          </button>
        </button>
      </div>
    </div>
  )
}

export default ItemCard
