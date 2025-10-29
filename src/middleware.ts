import { NextResponse } from 'next/server'

import { auth } from './auth'

const authRoutes = ['/auth/login', '/auth/register', '/auth']

export default auth((req) => {
	if (req.auth && authRoutes.includes(req.nextUrl.pathname)) {
		return NextResponse.redirect(new URL('/home', req.url))
	}
	if (!req.auth && !authRoutes.includes(req.nextUrl.pathname)) {
		return NextResponse.redirect(new URL('/auth/login', req.url))
	}
})

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|_next/image*|favicon.ico|content/.*|favicon/.*|homepage/.*|home/?$|overview).*)',
	],
}
