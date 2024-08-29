import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    console.log('inside send email')
    const reqBody = await request.json()
    const { from, subject, title, image_url, price, desc }: any = reqBody
    console.log('from:', from)
    console.log('subject:', subject)
    console.log('title:', title)
    console.log('image_url:', image_url)
    console.log('price:', price)
    console.log('desc:', desc)

    if (!from || !subject || !title || !image_url || !price || !desc)
      return NextResponse.json({
        message:
          'Email, subject, title, image_url, price, and description are all required',
        success: false
      })

    console.log('Data:', reqBody)

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'official.tanmoychoudhury@gmail.com',
        pass: 'HXwx86bMK9nwVkZ3DhJ9gyTawxpbGF7EGkVrEBvuYacozMQuCfXgZVEJNGRAmNANSovY47qqxUXt3T3m'
      }
    })

    const mailOptions = {
      from: 'official.tanmoychoudhury@gmail.com',
      to: process.env.EMAIL,
      subject,
      text: `Title: ${title}\nPrice: ${price}\nDescription: ${desc}\n Image: ${image_url}`
    }

    console.log('Mail Options:', mailOptions)

    transporter.sendMail(mailOptions, (error, info) => {
      console.log('Inside transporter send mail')
      console.log('Outside Error:', error)
      console.log('Outside Info:', info)
      if (error) {
        return NextResponse.json({
          message: 'Order not placed',
          success: false
        })
      } else {
        console.log('Email sent: ' + info.messageId)
      }
      console.log('After Else')
    })

    return NextResponse.json({
      message: 'Order placed successfully',
      success: true
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
