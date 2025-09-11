import { useEffect, useRef } from 'react'

import { usePlayer } from './usePlayer'

export const useKeyActivator = () => {
	const { play, pause } = usePlayer()

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			const target = e.target as HTMLElement

			const isInteractive =
				target.tagName === 'INPUT' ||
				target.tagName === 'TEXTAREA' ||
				target.tagName === 'BUTTON' ||
				target.tagName === 'A' ||
				target.isContentEditable

			if (isInteractive) return

			if (e.code === 'Enter' || e.code === 'Space') {
				e.preventDefault()
				play()
			}
			if (e.code === 'Escape') {
				e.preventDefault()
				pause()
			}
		}

		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [play, pause])
}
