import { NextRequest, NextResponse } from 'next/server'

import connect from '@/db/db-config'
import Item from '@/models/item'
import deleteImg from 'helpers/delete-img'

connect()

export async function POST(request: NextRequest) {
  try {
    const { itemIds, publicIds } = await request.json()

    if (
      !itemIds ||
      !publicIds ||
      itemIds.length === 0 ||
      publicIds.length === 0
    ) {
      const response = {
        message: 'No items selected',
        success: false
      }
      return NextResponse.json(response)
    }

    publicIds.forEach(async (public_id: string) => {
      const response = await deleteImg(public_id)
      if (response === 'Image deletion failed') {
        throw new Error('Image deletion failed')
      }
    })

    await Item.deleteMany({ _id: { $in: itemIds } })

    const response = {
      message: 'Items deleted successfully',
      success: true
    }
    return NextResponse.json(response)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
