import { NextRequest, NextResponse } from 'next/server'

import connect from '@/db/db-config'
import Category from '@/models/category'
import Item from '@/models/item'

connect()

export async function POST(request: NextRequest) {
  try {
    console.log('Inside POST in api add-item')
    const reqBody = await request.json()
    const { title, price, desc, category } = reqBody
    console.log('reqBody', reqBody)

    if (!title || !price || !desc || !category)
      return NextResponse.json({
        message: 'Name, price, description, and category are required',
        success: false
      })

    let categoryCluster = await Category.findOne({ name: category })

    if (!categoryCluster) {
      categoryCluster = await Category.create({ name: category })
      await categoryCluster.save()
    }

    const item = new Item({
      title,
      price,
      desc,
      category
    })
    console.log('before if in api add-item')
    if (item) {
      categoryCluster.items.push(item._id)
      console.log('Item added')
      await item.save()
      await categoryCluster.save()

      const response = NextResponse.json({
        message: 'Item added successfully',
        success: true
      })

      return response
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
