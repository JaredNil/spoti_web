'use client'

import { useEffect, useRef } from 'react'

import { userAction } from '@/entities/user'
import {
	getIsSidebarVisible,
	getSidebarWidth,
} from '@/entities/user/model/selectors/getSidebar'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'

export const SidebarResizer = () => {
	const handleRef = useRef<HTMLDivElement>(null)
	const asideRef = useRef<HTMLElement | null>(null)
	// const [isActive, setIsActive] = useState(false)

	const dispatch = useAppDispatch()

	const sidebarWidth = useAppSelector(getSidebarWidth)
	const isSidebarVisible = useAppSelector(getIsSidebarVisible)

	useEffect(() => {
		asideRef.current = document.querySelector(
			'aside.sidebar'
		) as HTMLElement
	}, [])

	useEffect(() => {
		if (asideRef.current) {
			if (Number(sidebarWidth) < 70) {
				dispatch(userAction.setIsSidebarVisible(false))
			}

			asideRef.current.style.width = `${sidebarWidth}px`
		}
	}, [sidebarWidth, isSidebarVisible, dispatch])

	useEffect(() => {
		if (asideRef.current) {
			if (isSidebarVisible) {
				asideRef.current.style.display = `block`
			} else {
				asideRef.current.style.display = `none`
			}
		}
	}, [isSidebarVisible])

	const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		// setIsActive(true)
		const startX = e.clientX

		const startWidth = handleRef.current?.parentElement?.offsetWidth ?? 0

		const onMouseMove = (moveEvent: MouseEvent) => {
			const deltaX = moveEvent.clientX - startX
			const newWidth = startWidth + deltaX
			// console.log('Δpx:', deltaX, 'new width:', newWidth)
			dispatch(userAction.setSidebarWidth(newWidth.toString()))
		}

		// const onMouseLeave = () => setIsActive(false)

		const onMouseUp = () => {
			// setIsActive(false)
			document.removeEventListener('mousemove', onMouseMove)
			document.removeEventListener('mouseup', onMouseUp)
			// document.removeEventListener('mouseleave', onMouseLeave)
		}
		document.addEventListener('mousemove', onMouseMove)
		document.addEventListener('mouseup', onMouseUp)
		// document.addEventListener('mouseleave', () => setIsActive(false))
	}

	return (
		<div
			className={`absolute right-[-2px] top-0 w-1 h-full
			cursor-e-resize transition-colors
			hidden md:flex
			hover:bg-neutral-400/50`}
			ref={handleRef}
			onMouseDown={onMouseDown}
		></div>
	)
}
