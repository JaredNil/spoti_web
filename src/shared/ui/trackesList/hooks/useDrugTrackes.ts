// hooks/useDraggable.ts
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { useCallback, useEffect, useRef } from 'react'

import type { Track } from '@/shared/api'

gsap.registerPlugin(Draggable)

// Определяем интерфейс для опций хука
interface UseDraggableOptions {
	items: Track[] | undefined
	isDraggable: boolean
	rowHeight: number
	onOrderChange?: (newOrder: number[]) => void
}

export function useDraggable({
	items,
	isDraggable,
	rowHeight,
	onOrderChange,
}: UseDraggableOptions) {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const dragInstances = useRef<any[]>([])

	const createDraggables = useCallback(() => {
		if (!containerRef.current || !isDraggable || !items) return

		dragInstances.current.forEach((instance) => instance.kill())
		dragInstances.current = []

		const rows = Array.from(
			containerRef.current.querySelectorAll<HTMLDivElement>(
				'[data-draggable]'
			)
		)
		if (!rows.length) return

		rows.forEach((row) => {
			const triggerElement = row.querySelector(
				'.drag-handle'
			) as HTMLElement
			if (!triggerElement) return

			const drag = Draggable.create(row, {
				type: 'y',
				bounds: containerRef.current!,
				trigger: triggerElement,
				onDragStart() {
					gsap.set(row, { zIndex: 10, scale: 1.05 })
				},
				onDrag() {
					const y = this.y
					const currentIndex = Number(row.dataset.index)
					const newIndex = Math.round(
						(y + currentIndex * rowHeight) / rowHeight
					)

					rows.forEach((r) => {
						const idx = Number(r.dataset.index)
						if (idx === currentIndex) return
						const shift =
							idx > currentIndex &&
							newIndex > currentIndex &&
							idx <= newIndex
								? -rowHeight
								: idx < currentIndex &&
									  newIndex < currentIndex &&
									  idx >= newIndex
									? rowHeight
									: 0
						gsap.to(r, {
							y: shift,
							duration: 0.25,
							ease: 'power2.out',
						})
					})
				},
				onDragEnd() {
					const y = this.y
					const currentIndex = Number(row.dataset.index)
					let newIndex = Math.round(
						(y + currentIndex * rowHeight) / rowHeight
					)
					newIndex = Math.max(0, Math.min(rows.length - 1, newIndex))

					gsap.to(row, {
						y: 0,
						scale: 1,
						zIndex: 1,
						duration: 0.3,
						ease: 'power2.out',
					})
					rows.forEach((r) => gsap.to(r, { y: 0, duration: 0.3 }))

					if (newIndex !== currentIndex && onOrderChange) {
						const newOrder = [...Array(items.length).keys()]
						const [moved] = newOrder.splice(currentIndex, 1)
						newOrder.splice(newIndex, 0, moved)
						onOrderChange(newOrder)
					}
				},
			})[0]

			dragInstances.current.push(drag)
		})
	}, [isDraggable, items, rowHeight, onOrderChange])

	useEffect(() => {
		createDraggables()

		return () => {
			dragInstances.current.forEach((instance) => instance.kill())
		}
	}, [createDraggables])

	return {
		containerRef,
	}
}
