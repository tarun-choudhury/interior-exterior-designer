import { NextRequest, NextResponse } from 'next/server'

import connect from '@/db/db-config'
import Item from '@/models/item'

connect()

export async function DELETE(request: NextRequest) {
  try {
    const id = request.url.split('/').pop()

    await Item.deleteMany({ _id: { $in: id } })

    const response = {
      message: 'Item deleted successfully',
      success: true
    }
    return NextResponse.json(response)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
