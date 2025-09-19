'use client'
import { useEffect, useRef } from 'react'

export const useCanvas = (
	draw: (ctx: CanvasRenderingContext2D, frame: number) => void
) => {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return
		const ctx = canvas.getContext('2d')
		if (!ctx) return

		let frame = 0
		let rid = 0
		const resize = () => {
			const dpr = window.devicePixelRatio || 1
			const rect = canvas.getBoundingClientRect()
			canvas.width = rect.width * dpr
			canvas.height = rect.height * dpr
			ctx.scale(dpr, dpr)
		}
		resize()
		window.addEventListener('resize', resize)

		const loop = () => {
			rid = requestAnimationFrame(loop)
			draw(ctx, frame++)
		}
		loop()

		return () => {
			cancelAnimationFrame(rid)
			window.removeEventListener('resize', resize)
		}
	}, [draw])

	return canvasRef
}
