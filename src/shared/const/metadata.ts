import type { Metadata } from 'next'
const baseUrl =
	process.env.NEXT_PUBLIC_SITE_URL || 'https://spoti-web.vercel.app/'

export const createMeta = (params?: {
	title?: string
	description?: string
	path?: string
}): Metadata => ({
	metadataBase: new URL(baseUrl),
	title: params?.title ? `Jarefy - ${params.title}` : 'Jarefy',
	description:
		params?.description ||
		'Jarefy - это музыкальный сервис, который позволяет слушать музыку словно в Spotify, а также слушать музыку, которая была добавлена в избранное.',
	keywords: ['Jarefy', 'Музыка', 'Spotify', 'Искусство'],
	openGraph: {
		title: params?.title || 'Jarefy',
		description:
			params?.description ||
			'Jarefy - это музыкальный сервис, который позволяет слушать музыку словно в Spotify, а также слушать музыку, которая была добавлена в избранное.',
		images: '/favicon/favicon.png',
		url: params?.path ? `${baseUrl}${params.path}` : baseUrl,
		siteName: 'Jarefy',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: params?.title || 'Jarefy',
		description: params?.description || 'Jarefy - музыкальный сервис',
		images: '/favicon/favicon.png',
	},
	icons: {
		icon: '/favicon/favicon.ico',
		apple: '/favicon/favicon.png',
	},
	manifest: '/site.webmanifest',
})
