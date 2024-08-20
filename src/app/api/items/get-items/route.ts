import { NextResponse } from 'next/server'

import connect from '@/db/db-config'
import Item from '@/models/item'

connect()

export const revalidate = 1;
export async function GET() {
  try {
    const items = await Item.find()

    if (!items) {
      const response = { message: 'No items found', success: false }
      return NextResponse.json(response)
    }

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
