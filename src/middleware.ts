import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isProtectedPath = path === '/create-items' || path === '/delete-items'

  const token = request.cookies.get('token')?.value || 0

  if (isProtectedPath && !token) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }

  if (!isProtectedPath && token) {
    return NextResponse.redirect(new URL('/create-items', request.nextUrl))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/catalogue/:path*',
    '/know-about-us',
    '/contact-us',
    '/login',
    '/create-items',
    '/delete-items'
  ]
}
