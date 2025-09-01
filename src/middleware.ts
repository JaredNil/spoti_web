import { NextResponse } from 'next/server'

import { auth } from './auth'

export default auth((req) => {
	if (!req.auth) {
		return NextResponse.redirect(new URL('/auth/login', req.url))
	}
})

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|_next/image*|favicon.ico|content/.*|auth/.*|home/?$).*)',
	],
}
