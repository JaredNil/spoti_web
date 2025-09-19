'use client'

import { useEffect } from 'react'

import { zw } from '@/shared/lib/log'

export const ServiceWorkerProvider = () => {
	useEffect(() => {
		zw('Service worked started')
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker
				.register('/sw.js')
				.then((reg) => {
					return navigator.serviceWorker.ready
				})
				.then(() => {
					console.log('[SW] ready')
					window.dispatchEvent(new Event('sw-ready'))
				})
				.catch((e) => console.error('[SW]', e))
		}
	}, [])

	return null
}
