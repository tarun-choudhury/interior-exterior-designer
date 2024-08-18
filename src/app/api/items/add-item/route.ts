import { NextRequest, NextResponse } from 'next/server'

import connect from '@/db/db-config'
import Category from '@/models/category'
import Item from '@/models/item'
import uploadImg from 'helpers/upload-img'

connect()

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData()
    const image = form.get('image') as File
    const title = form.get('title') as string
    const price = form.get('price') as unknown as number
    const desc = form.get('desc') as string
    const category = form.get('category') as string

    if (!image || !title || !price || !desc || !category)
      return NextResponse.json({
        message:
          'Image, name, price, description, and category are all required',
        success: false
      })

    const data: any = await uploadImg({ file: image, folder: 'items' })

    let categoryCluster = await Category.findOne({ name: category })

    if (!categoryCluster) {
      categoryCluster = await Category.create({ name: category })
      await categoryCluster.save()
    }

    const item = new Item({
      image_url: data.secure_url,
      public_id: data.public_id,
      title,
      price,
      desc,
      category
    })
    if (item) {
      categoryCluster.items.push(item._id)
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
