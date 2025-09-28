import { useCallback, useLayoutEffect, useRef, useState } from 'react'

import type { Track, Trackes } from '@/shared/api'

type RectMap = Record<string, DOMRect>

export function useDragTrackes(
	trackes: Track[] | undefined,
	setTrackes: (t: Track[]) => void
) {
	const containerRef = useRef<HTMLDivElement | null>(null)

	/* drag-стан */
	const [draggedIdx, setDraggedIdx] = useState<number | null>(null)
	const [shift, setShift] = useState({ x: 0, y: 0 })
	const [pos, setPos] = useState({ x: 0, y: 0 })
	const [isReturning, setIsReturning] = useState(false)
	const [homePos, setHomePos] = useState({ x: 0, y: 0 })

	/* FLIP-стан */
	const [isReordering, setIsReordering] = useState(false)
	const nextOrder = useRef<Track[] | null>(null)

	const itemHeightRef = useRef<number>(0)

	/* измеряем высоту 1 строки */
	const measureItemHeight = useCallback(() => {
		const first = containerRef.current?.querySelector(
			'[data-item]'
		) as HTMLDivElement
		if (first) itemHeightRef.current = first.offsetHeight
	}, [])

	/* читаем координаты всех строк */
	const readRects = useCallback((): RectMap => {
		const map: RectMap = {}
		containerRef.current
			?.querySelectorAll<HTMLDivElement>('[data-item]')
			.forEach((n) => {
				const hash = n.dataset.hash!
				map[hash] = n.getBoundingClientRect()
			})
		return map
	}, [])

	/* FLIP: ставим transform к старому месту, потом перерисовываем */
	useLayoutEffect(() => {
		if (!isReordering || !containerRef.current) return

		const nodes =
			containerRef.current.querySelectorAll<HTMLDivElement>('[data-item]')
		const map: RectMap = {}
		nodes.forEach((n) => {
			const hash = n.dataset.hash!
			map[hash] = n.getBoundingClientRect()
		})

		nodes.forEach((n) => {
			const hash = n.dataset.hash!
			const old = map[hash]
			const cur = n.getBoundingClientRect()
			const dx = old.left - cur.left
			const dy = old.top - cur.top
			if (dx === 0 && dy === 0) return
			n.style.transform = `translate(${dx}px, ${dy}px)`
			n.style.transition = 'none'
		})

		/* разрешаем React перерисовать */
		setTrackes(nextOrder.current!)
		nextOrder.current = null
		setIsReordering(false)

		/* снимаем transform плавно */
		requestAnimationFrame(() => {
			nodes.forEach((n) => {
				n.style.transform = ''
				n.style.transition = 'transform 200ms ease'
			})
		})
	}, [isReordering, setTrackes])

	/* начало драга */
	const handleDragStart = useCallback(
		(e: React.MouseEvent<HTMLDivElement>, index: number) => {
			const itemNode = e.currentTarget.closest(
				'[data-item]'
			) as HTMLDivElement
			const itemRect = itemNode.getBoundingClientRect()

			setDraggedIdx(index)
			setShift({
				x: e.clientX - itemRect.left,
				y: e.clientY - itemRect.top,
			})
			setPos({ x: itemRect.left, y: itemRect.top })
			setHomePos({ x: itemRect.left, y: itemRect.top })
			setIsReturning(false)
		},
		[]
	)

	/* движение мыши */
	const handleMouseMove = useCallback(
		(e: React.MouseEvent) => {
			if (draggedIdx === null) return
			setPos({ x: e.clientX - shift.x, y: e.clientY - shift.y })
		},
		[draggedIdx, shift]
	)

	/* уход курсора – возвращаем призрак домой */
	const handleMouseLeave = useCallback(() => {
		if (draggedIdx === null) return
		setIsReturning(true)
		setPos(homePos)
	}, [draggedIdx, homePos])

	/* конец анимации возврата */
	const handleTransitionEnd = useCallback(() => {
		if (!isReturning) return
		setDraggedIdx(null)
		setIsReturning(false)
	}, [isReturning])

	/* отпускание – считаем новый индекс и запускаем FLIP */
	const handleMouseUp = useCallback(() => {
		if (draggedIdx === null || !trackes) return

		const h = itemHeightRef.current
		const rawIndex = Math.round((pos.y - homePos.y + h / 2) / h)
		const newIndex = Math.max(0, Math.min(rawIndex, trackes.length - 1))

		if (newIndex !== draggedIdx) {
			const reordered = [...trackes]
			const [removed] = reordered.splice(draggedIdx, 1)
			reordered.splice(newIndex, 0, removed)
			nextOrder.current = reordered
			setIsReordering(true)
		}

		setDraggedIdx(null)
		setIsReturning(false)
	}, [draggedIdx, pos, trackes, homePos])

	/* хук отдаёт всё, что нужно компоненту */
	return {
		containerRef,
		draggedIdx,
		isReturning,
		pos,
		handleDragStart,
		handleMouseMove,
		handleMouseUp,
		handleMouseLeave,
		handleTransitionEnd,
		measureItemHeight,
	}
}
