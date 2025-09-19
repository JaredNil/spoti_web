'use client'
import { useEffect } from 'react'

import { cachedOrRemote } from '@/app/(providers)/playerProvider/lib/cachedOrRemote'
import { Trackes } from '@/shared/api'
import { ze } from '@/shared/lib/log'

export const prefetchTrackChunk = async (hash: string) => {
	if (!hash || typeof window === 'undefined') return
	if (!navigator.serviceWorker?.controller) return

	const url = cachedOrRemote(hash)
	if (!url) return

	try {
		await fetch(url, { mode: 'cors', credentials: 'same-origin' })
	} catch (e) {
		ze(`Ошибка prefetch chunk ${e}`)
	}
}

export const usePrefetchTrackes = (trackes: Trackes | undefined) => {
	const hashes = trackes
		?.map((t) => t.songLink ?? '')
		.filter(Boolean) as string[]

	useEffect(() => {
		if (!hashes?.length) return
		Promise.all(hashes.map(prefetchTrackChunk)).catch(() =>
			ze('Ошибка prefetch tracks')
		)
	}, [hashes])
}
