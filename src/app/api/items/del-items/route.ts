import { NextRequest, NextResponse } from 'next/server'

import connect from '@/db/db-config'
import Item from '@/models/item'

connect()

export async function POST(request: NextRequest) {
  try {
    console.log('inside DELETE in api items')
    const itemIds = await request.json()
    console.log('itemIds:', itemIds)

    if (!itemIds || itemIds.length === 0) {
      const response = {
        message: 'No items selected',
        success: false
      }
      return NextResponse.json(response)
    }

    console.log('itemIds:', itemIds)

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
