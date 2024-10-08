import { NextRequest, NextResponse } from 'next/server'

import connect from '@/db/db-config'
import Item from '@/models/item'

connect()

export async function GET(request: NextRequest) {
  try {
    const id = request.url.split('/').pop()

    const items = await Item.find({ category: id })

    const response = {
      message: 'Items retrieved successfully',
      success: true,
      items: items
    }

    return NextResponse.json(response)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
