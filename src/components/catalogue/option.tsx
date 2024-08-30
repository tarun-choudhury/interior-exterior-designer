import Image from 'next/image'
import Link from 'next/link'

interface OptionProps {
  categoryName: string
  link: string
}

const Option = ({ categoryName, link }: OptionProps) => {
  return (
    <div className="group relative overflow-hidden">
      <Link
        className="flex h-36 sm:h-60 md:h-72 lg:h-80 xl:h-60"
        href={`/catalogue/${link}`}
      >
        <Image
          fill
          alt={categoryName}
          className="scale-110 object-cover text-xs transition duration-300 ease-in-out group-hover:scale-100 group-active:scale-100"
          sizes="(max-width: 1280px) 50vw, 25vw"
          src={`/catalogue images/${categoryName}.webp`}
        />
        <div className="absolute bottom-0 left-0 flex h-0 w-full flex-col justify-end overflow-hidden bg-gradient-to-t from-black px-12 text-center text-sm duration-300 ease-in-out group-hover:h-1/2 group-hover:py-3 md:group-hover:py-6 lg:group-hover:py-8 xl:group-hover:py-6">
          <h1 className="font-medium text-60 md:text-2xl lg:text-3xl xl:text-xl">
            {categoryName}
          </h1>
        </div>
      </Link>
    </div>
  )
}

export default Option
