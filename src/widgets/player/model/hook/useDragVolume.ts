import { useEffect, useState } from 'react'

import { pxToVolume } from '../lib/pxToVolume'

export function useDragVolume(
	ref: React.RefObject<HTMLDivElement | null>,
	onChange: (v: number) => void
) {
	const [drag, setDrag] = useState(false)

	useEffect(() => {
		const el = ref.current
		if (!el) return

		const up = () => setDrag(false)
		const move = (e: MouseEvent) => {
			if (!drag || !ref.current) return
			const rect = ref.current.getBoundingClientRect()
			const px = e.clientX - rect.left
			onChange(pxToVolume(px))
		}
		const leave = () => setDrag(false)

		el.addEventListener('mouseup', up)
		el.addEventListener('mousemove', move)
		el.addEventListener('mouseleave', leave)
		return () => {
			el.removeEventListener('mouseup', up)
			el.removeEventListener('mousemove', move)
			el.removeEventListener('mouseleave', leave)
		}
	}, [drag, onChange, ref])

	return {
		onMouseDown: () => setDrag(true),
	}
}
