const RouteLoadingSkeleton = () => {
  return (
    <div className="flex h-96 min-h-80 w-full flex-col items-center justify-center gap-4 p-10 text-center md:h-[calc(100vh-30rem)] lg:h-[calc(100vh-38rem)] xl:h-[calc(100vh-26rem)] xl:gap-6">
      <h1 className="animate-bounce font-italic text-4xl md:text-5xl">
        Loading.....
      </h1>
      <progress
        className="progress text-30 md:w-96 xl:w-96"
        max="100"
      ></progress>
    </div>
  )
}

const ItemCardSkeleton = () => {
  const list = []
  for (let i = 0; i < 12; i++) {
    list.push(
      <div
        key={i}
        className="col-span-1 flex w-full animate-pulse flex-col gap-2 p-6 outline outline-1 outline-60 md:h-[27rem] md:p-4 xl:h-[27rem] 2xl:w-64"
      >
        <div className="h-48 w-full rounded-none bg-60 md:h-40"></div>
        <div className="my-4 space-y-3">
          <div className="h-5 w-28 bg-60"></div>
          <div className="h-5 w-40 bg-60"></div>
          <div className="h-4 w-16 bg-60"></div>
        </div>
        <div className="mt-auto h-12 w-full bg-60"></div>
      </div>
    )
  }
  return list
}

const DeleteCardSkeleton = () => {
  const list = []
  for (let i = 0; i < 7; i++) {
    list.push(
      <li className="flex flex-col justify-end gap-1 p-4">
        <div className="space-y-2 object-bottom">
          <div className="h-5 w-20 animate-pulse bg-60"></div>
          <div className="h-5 w-10 animate-pulse bg-60"></div>
          <div className="h-4 w-16 animate-pulse bg-60"></div>
        </div>
        <div className="size-60 animate-pulse bg-60"></div>
      </li>
    )
  }
  return <ul className="flex flex-wrap gap-10">{list}</ul>
}

export { DeleteCardSkeleton, ItemCardSkeleton, RouteLoadingSkeleton }
