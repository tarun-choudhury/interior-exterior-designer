// import Item from "@/models/item";
import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server'

import connect from '@/db/db-config'

connect()

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { email, password } = reqBody

    if (!email || !password)
      return NextResponse.json({
        message: 'Email and password are required',
        success: false
      })
    else if (email != process.env.EMAIL!)
      return NextResponse.json({
        message: 'Incorrect Email',
        success: false
      })
    else if (password !== process.env.PASSWORD!)
      return NextResponse.json({
        message: 'Incorrect Password',
        success: false
      })

    //create token data
    const tokenData = {
      email
    }
    //create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: '1d'
    })

    const response = NextResponse.json({
      message: 'Login successful',
      success: true
    })
    response.cookies.set('token', token)
    return response
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
