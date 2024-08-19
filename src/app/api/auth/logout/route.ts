import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = NextResponse.json({
      message: 'Logout successful',
      success: true
    })
    response.cookies.set('token', '', {
      httpOnly: true,
      secure: true, // Ensures the cookie is only sent over HTTPS
      sameSite: 'lax', // Controls when the cookie is sent along with requests
      path: '/', // Ensures the cookie is valid across the entire site
      expires: new Date(0)
    })
    return response
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
