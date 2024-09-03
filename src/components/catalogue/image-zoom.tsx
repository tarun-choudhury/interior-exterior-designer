import Image from 'next/image'

import XClose from '@/assets/svg/x-close'

interface ImageZoomProps {
  imageZoom: boolean
  imageZoomLink: string
  setImageZoom: (zoom: boolean) => void
}

const ImageZoom = ({
  imageZoom,
  imageZoomLink,
  setImageZoom
}: ImageZoomProps) => {
  return (
    <>
      {imageZoom && (
        <div className="fixed inset-x-0 top-0 z-20 h-screen bg-black/90 p-10">
          <div className="relative size-full">
            <Image
              fill
              alt="title"
              className="object-scale-down"
              quality={100}
              src={imageZoomLink}
            />
            <button
              className="absolute right-0 top-0 block size-10 w-fit stroke-10 transition-all hover:scale-105"
              onClick={() => setImageZoom(false)}
            >
              <XClose stroke="stroke-10" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ImageZoom
