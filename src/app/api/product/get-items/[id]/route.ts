import { NextRequest, NextResponse } from 'next/server'

import connect from '@/db/db-config'
import Category from '@/models/category'
import Item from '@/models/item'

connect()

export async function GET(request: NextRequest) {
  try {
    console.log('Inside GET in api items')
    const id = request.url.split('/').pop()
    console.log('id', id)

    // const category = await Category.findOne({ name: id })
    // console.log('category', category)
    // // const populatedCategory = await category.populate('items').execPopulate()
    // // console.log('Populated category', populatedCategory)
    // if(!category) {
    //   return NextResponse.json({
    //     message: 'Category not found',
    //     success: false
    //   })
    // }

    const items = await Item.find({ category: id })
    console.log('Items', items)
    // const response = NextResponse.json({
    //   message: 'Items retrieved successfully',
    //   success: true,
    //   items
    // })


    // const itemPromises = category.items.map((itemId: any) => Item.findById(itemId))
    // const items = await Promise.all(itemPromises)

    // // Filter out any null items (in case an item was deleted but reference remains)
    // const validItems = items.filter(item => item !== null)

    // category.items = validItems

    // // Construct the response
    const response = {
    //   // _id: category._id,
    //   // name: category.name,
      message: 'Items retrieved successfully',
      success: true,
      items: items
    }

    return NextResponse.json(response)



    // console.log('category', category)

    // if (category) {
    //   console.log('Category found')
    //   const items = category.items
    //   console.log('Items', items)
    //   const response = NextResponse.json({
    //     message: 'Items retrieved successfully',
    //     success: true,
    //     items
    //   })

    //   return response
    // } else {
    //   const response = NextResponse.json({
    //     message: 'No items found',
    //     success: false
    //   })
    //   return response
    // }
  } catch (error: any) {
    return NextResponse.json({ error: error }, { status: 500 })
  }
}
