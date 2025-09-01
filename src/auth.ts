import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Yandex from 'next-auth/providers/yandex'

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		Yandex({
			clientId: process.env.YANDEX_CLIENT_ID,
			clientSecret: process.env.YANDEX_CLIENT_SECRET,
		}),
	],
	secret: process.env.AUTH_SECRET,
})
