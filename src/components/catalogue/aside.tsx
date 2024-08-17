import Link from 'next/link'

import { links } from '@/assets/json/links.json'

const Aside = () => {
  return (
    <div
      className="sticky top-16 hidden w-1/5 flex-col justify-center gap-2 p-4 lg:flex xl:w-1/6"
      style={{ maxHeight: 'calc(100vh - 4rem)' }}
    >
      {links.map((i) => {
        return (
          <Link
            key={i.index}
            className="w-fit uppercase transition-all duration-300 hover:tracking-widest hover:text-primary"
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
