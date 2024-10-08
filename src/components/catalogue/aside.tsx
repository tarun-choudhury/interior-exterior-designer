import Link from 'next/link'

import jsonData from '@/assets/json/links.json'

const Aside = () => {
  const links = jsonData.links
  return (
    <div
      className="sticky top-16 hidden w-1/5 flex-col justify-center gap-2 p-4 lg:flex xl:w-1/6"
      style={{
        minHeight: 'calc(100vh - 4rem)',
        maxHeight: 'calc(100vh - 4rem)'
      }}
    >
      {links.map((i) => {
        return (
          <Link
            key={i.index}
            className="w-fit transition-all duration-300 hover:tracking-widest hover:text-30"
            href={i.href}
          >
            {i.title}
          </Link>
        )
      })}
    </div>
  )
}

export default Aside
