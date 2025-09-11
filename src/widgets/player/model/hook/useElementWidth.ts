import { RefObject, useEffect, useState } from 'react'

export const useElementWidth = <T extends HTMLElement>(
	ref: RefObject<T | null>
): number => {
	const [width, setWidth] = useState(0)

	useEffect(() => {
		const el = ref.current
		if (!el) return

		const update = () => setWidth(el.clientWidth)
		update() // первое значение

		const observer = new ResizeObserver(update)
		observer.observe(el)

		return () => observer.disconnect()
	}, [ref])

	return width
}
