import Link from 'next/link'

import { links } from '@/json/links.json'

const Aside = () => {
  return (
    <div
      className="sticky top-12 flex w-1/6 flex-col justify-center gap-2 bg-custT p-4"
      style={{ height: 'calc(100vh - 3rem)' }}
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
