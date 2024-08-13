import Image from 'next/image'
import Link from 'next/link'

interface OptionProps {
  categoryName: string
}

const Option = ({ categoryName }: OptionProps) => {
  return (
    <div className="group relative overflow-hidden">
      <Link href={`/catalogue/${categoryName}`}>
        <Image
          alt={categoryName}
          className="scale-125 transition duration-300 ease-in-out group-hover:scale-105"
          height={500}
          src={`/images/${categoryName}.png`}
          width={500}
        />
        <div className="absolute bottom-0 left-0 flex h-0 w-full flex-col justify-end overflow-hidden bg-gradient-to-t from-black px-12 text-center text-sm duration-300 ease-in-out group-hover:h-1/2 group-hover:py-4">
          <h3 className="text-xl font-medium text-custT">{categoryName}</h3>
          {/* <p>View our {categoryName} collection</p> */}
        </div>
      </Link>
    </div>
  )
}

export default Option
