'use client'

const APP_KEY = 'jarefy'

export const cacheKeys = [
	'volume',
	'queue',
	'native',
	'targetQueue',
	'isActivePlayer',
	'track',
	'progress',
	'timer',
] as const

type KeyToUnion<T extends readonly string[]> = T[number]
export type cacheKey = KeyToUnion<typeof cacheKeys>

export const cacheHandle = {
	get<T>(key: cacheKey): T | null {
		if (typeof window === 'undefined') return null
		try {
			const raw = localStorage.getItem(`${APP_KEY}:${key}`)
			return raw ? (JSON.parse(raw) as T) : null
		} catch {
			console.warn('Error with get cached data')
			return null
		}
	},

	set<T>(key: cacheKey, value: T): void {
		if (typeof window === 'undefined') return
		try {
			localStorage.setItem(`${APP_KEY}:${key}`, JSON.stringify(value))
		} catch {
			console.warn('Error with set cached data')
		}
	},

	remove(key: cacheKey): void {
		if (typeof window === 'undefined') return
		localStorage.removeItem(`${APP_KEY}:${key}`)
	},

	clear(): void {
		if (typeof window === 'undefined') return

		Object.keys(localStorage)
			.filter((k) => k.startsWith(APP_KEY))
			.forEach((k) => localStorage.removeItem(k))
	},
}
