import React from 'react'

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

export { DeleteCardSkeleton }
