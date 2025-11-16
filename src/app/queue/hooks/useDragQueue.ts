import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { useCallback, useEffect, useRef } from 'react'

import type { Track } from '@/shared/api'

gsap.registerPlugin(Draggable)

// Определяем интерфейс для опций хука
interface UseDragQueueOptions {
	items: Track[] | undefined
	isDraggable: boolean
	rowHeight: number
	onOrderChange?: (
		newOrder: number[],
		draggedIndex: number,
		targetIndex: number
	) => void
}

export function useDragQueue({
	items,
	isDraggable,
	rowHeight,
	onOrderChange,
}: UseDragQueueOptions) {
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
			// Для queue используем весь элемент трека как trigger, кроме кнопки плеера
			const playButtonElement = row.querySelector('.play-button')
			const heartButtonElement = row.querySelector('[data-heart-button]')

			const drag = Draggable.create(row, {
				type: 'y',
				bounds: containerRef.current!,
				// Исключаем кнопку плеера и лайка из области захвата
				trigger: row,
				onPress(e) {
					// Предотвращаем drag если клик по кнопке плеера или лайка
					if (
						(playButtonElement &&
							playButtonElement.contains(e.target as Node)) ||
						(heartButtonElement &&
							heartButtonElement.contains(e.target as Node))
					) {
						this.endDrag(e)
						return
					}
				},
				onDragStart() {
					gsap.set(row, {
						zIndex: 10,
						scale: 1.02,
						boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
						borderRadius: '8px',
					})
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
							duration: 0.08,
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

					// Очень быстрая анимация возврата
					gsap.to(row, {
						y: 0,
						scale: 1,
						zIndex: 1,
						boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
						duration: 0.1,
						ease: 'power2.out',
					})

					// Быстрая анимация для остальных элементов
					rows.forEach((r) => {
						gsap.to(r, {
							y: 0,
							duration: 0.08,
							ease: 'power2.out',
						})
					})

					if (newIndex !== currentIndex && onOrderChange) {
						const newOrder = [...Array(items.length).keys()]
						const [moved] = newOrder.splice(currentIndex, 1)
						newOrder.splice(newIndex, 0, moved)
						onOrderChange(newOrder, currentIndex, newIndex)
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
