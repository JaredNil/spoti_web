import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { auth } from './auth'
import {
	LANGUAGE_COOKIE_NAME,
	DEFAULT_LANGUAGE,
	SUPPORTED_LANGUAGES,
} from './features/language/model/constants'

const authRoutes = ['/auth/login', '/auth/register', '/auth']

export default auth((req) => {
	const response = handleLanguage(req)

	if (req.auth && authRoutes.includes(req.nextUrl.pathname)) {
		const redirectResponse = NextResponse.redirect(
			new URL('/overview', req.url)
		)
		if (response.headers.get('Set-Cookie')) {
			redirectResponse.headers.set(
				'Set-Cookie',
				response.headers.get('Set-Cookie')!
			)
		}
		return redirectResponse
	}
	if (!req.auth && !authRoutes.includes(req.nextUrl.pathname)) {
		const redirectResponse = NextResponse.redirect(
			new URL('/overview', req.url)
		)
		if (response.headers.get('Set-Cookie')) {
			redirectResponse.headers.set(
				'Set-Cookie',
				response.headers.get('Set-Cookie')!
			)
		}
		return redirectResponse
	}

	return response
})

function handleLanguage(req: NextRequest) {
	const response = NextResponse.next()

	const languageCookie = req.cookies.get(LANGUAGE_COOKIE_NAME)
	let currentLanguage = languageCookie?.value

	if (
		!currentLanguage ||
		!SUPPORTED_LANGUAGES.includes(currentLanguage as any)
	) {
		const acceptLanguage = req.headers.get('Accept-Language')
		const browserLanguage = acceptLanguage?.split(',')[0]?.split('-')[0]

		currentLanguage = SUPPORTED_LANGUAGES.includes(browserLanguage as any)
			? browserLanguage!
			: DEFAULT_LANGUAGE

		response.cookies.set(LANGUAGE_COOKIE_NAME, currentLanguage, {
			maxAge: 365 * 24 * 60 * 60,
			path: '/',
			sameSite: 'lax',
		})
	}

	return response
}

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|_next/image*|favicon.ico|content/.*|favicon/.*|homepage/.*|home/?$|overview).*)',
	],
}
