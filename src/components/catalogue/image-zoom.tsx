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
        <div className="fixed inset-x-0 top-0 z-20 flex h-screen flex-col items-end gap-4 bg-black/90 p-10 pb-20 md:gap-10 md:pb-[6.5rem]">
          <button
            className="block size-fit transition-all hover:scale-105"
            onClick={() => setImageZoom(false)}
          >
            <XClose stroke="stroke-10" />
          </button>
          <div className="relative size-full">
            <Image
              fill
              alt="title"
              className="object-scale-down"
              quality={100}
              src={imageZoomLink}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ImageZoom
