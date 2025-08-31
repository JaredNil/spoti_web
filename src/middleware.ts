import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

const publicRoutes = ['/auth/login', '/auth/register', '/auth', '/', '/home']

export async function middleware(req: NextRequest) {
	const path = req.nextUrl.pathname
	const isPublicRoute = publicRoutes.includes(path)
	const isPublicContent = req.nextUrl.pathname.startsWith('/content')

	const token = await getToken({ req, secret: process.env.AUTH_SECRET })

	if (!isPublicRoute && !token && !isPublicContent) {
		console.warn('REDIRECT REQUEST WITHOUT AUTH', path)
		return NextResponse.redirect(new URL('/auth/login', req.nextUrl))
	}

	return NextResponse.next()
}
export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
