import sgMail from '@sendgrid/mail'
import { NextRequest, NextResponse } from 'next/server'

// Set up SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

interface EmailBody {
  from: string
  subject: string
  title: string
  image_url: string
  price: string
  desc: string
}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { from, subject, title, image_url, price, desc }: EmailBody = reqBody

    if (!from || !subject || !title || !image_url || !price || !desc)
      return NextResponse.json({
        message:
          'Email, subject, title, image_url, price, and description are all required',
        success: false
      })

    const mailOptions = {
      from: process.env.EMAIL as string,
      to: process.env.EMAIL as string,
      subject,
      text: `Title: ${title}\n\nPrice: ${price}\n\nDescription:\n${desc}\n\nImage: ${image_url}\n\nCustomer Email: ${from}`
    }

    await sgMail.send(mailOptions)

    return NextResponse.json({
      message: 'Order placed successfully',
      success: true
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
