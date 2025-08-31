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

	const dispatch = useAppDispatch()

	const sidebarWidth = useAppSelector(getSidebarWidth)
	const isSidebarVisible = useAppSelector(getIsSidebarVisible)

	useEffect(() => {
		asideRef.current = document.querySelector(
			'div.sidebar_container'
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
				asideRef.current.style.display = ``
			} else {
				asideRef.current.style.display = `none`
			}
		}
	}, [isSidebarVisible])

	const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		const startX = e.clientX

		const onMouseMove = (moveEvent: MouseEvent) => {
			const startWidth =
				handleRef.current?.parentElement?.clientWidth ?? 0
			const deltaX = moveEvent.clientX - startX
			const newWidth = startWidth + deltaX
			console.log('Δpx:', deltaX, 'new width:', startWidth)
			dispatch(userAction.setSidebarWidth(newWidth.toString()))
		}

		const onMouseUp = () => {
			document.removeEventListener('mousemove', onMouseMove)
			document.removeEventListener('mouseup', onMouseUp)
		}
		document.addEventListener('mousemove', onMouseMove)
		document.addEventListener('mouseup', onMouseUp)
	}

	return (
		<div
			className={`absolute right-[-6px] top-0 w-1 h-full
			cursor-e-resize transition-colors
			hover:bg-neutral-400/50`}
			ref={handleRef}
			onMouseDown={onMouseDown}
		/>
	)
}
