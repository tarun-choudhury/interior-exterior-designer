import { NextRequest, NextResponse } from 'next/server'

import connect from '@/db/db-config'
import Item from '@/models/item'

connect()

export async function GET(request: NextRequest) {
  try {
    console.log('Inside GET in api items [id]')
    const id = request.url.split('/').pop()
    console.log('id', id)

    const items = await Item.find({ category: id })
    console.log('Items', items)

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
