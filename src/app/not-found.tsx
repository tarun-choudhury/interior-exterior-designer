import Link from 'next/link'

import clientToken from '@/utils/get-client-token'

const NotFound = () => {
  const token = clientToken()
  return (
    <div className="flex h-96 min-h-80 w-full flex-col items-center justify-center gap-10 p-10 text-center md:h-[calc(100vh-30rem)] lg:h-[calc(100vh-38rem)] xl:h-[calc(100vh-26rem)] xl:gap-6">
      <h2 className="xl:text-3xl">OOPSSS!!</h2>
      <p className="text-xs xl:text-xl">
        Looks like the page you are looking for doesn&apos;t exist...
      </p>
      {token ? (
        <Link
          className="text-30 animate-pulse underline underline-offset-8"
          href="/create-items"
        >
          Return to Crate Items
        </Link>
      ) : (
        <Link
          className="text-30 animate-pulse underline underline-offset-8"
          href="/"
        >
          Return to Home
        </Link>
      )}
    </div>
  )
}

export default NotFound
