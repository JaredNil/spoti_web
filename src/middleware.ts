import { jwtVerify } from 'jose'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

const publicRoutes = ['/auth/login', '/auth/register', '/auth', '/', '/home']
const authRoutes = ['/auth/login', '/auth/register', '/auth']

const secret = process.env.AUTH_SECRET

export async function middleware(req: NextRequest) {
	const path = req.nextUrl.pathname
	const isPublicRoute = publicRoutes.includes(path)
	const isPublicContent = req.nextUrl.pathname.startsWith('/content')

	const isAuthRoute = authRoutes.includes(path)

	const token = await getToken({ req, secret })

	console.log('TOKEN', token)

	const sessionCookie = req.cookies.get(
		'__Secure-authjs.session-token'
	)?.value
	const secret2 = new TextEncoder().encode(process.env.AUTH_SECRET!)
	if (sessionCookie) {
		const { payload: token2 } = await jwtVerify(sessionCookie, secret2)
		console.log('TOKEN2', token2)
	}

	if (!isPublicRoute && !token && !isPublicContent) {
		console.log('START LOG')
		console.log('isPublicRoute', isPublicRoute)
		console.log('isPublicContent', isPublicContent)
		console.warn('REDIRECT REQUEST WITHOUT AUTH', path)
		return NextResponse.redirect(new URL('/auth/login', req.nextUrl))
	}
	if (isAuthRoute && token) {
		// redirect from auth pages to content
		console.warn('REDIRECT REQUEST FROM AUTH TO CONTENT', path)
		return NextResponse.redirect(new URL('/home', req.nextUrl))
	}

	return NextResponse.next()
}
export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
