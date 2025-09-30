'use client'
import { useCallback } from 'react'

export type WaveMode = 'full' | 'window60'

export const useWaveDrawer = (
	peaks: number[],
	duration: number,
	current: number,
	progress: number,
	mode: WaveMode,
	color = 'rgba(163,163,163,.7)',
	playedColor = '#22c55e'
) => {
	return useCallback(
		(ctx: CanvasRenderingContext2D) => {
			const w = ctx.canvas.width / (window.devicePixelRatio || 1)
			const h = ctx.canvas.height / (window.devicePixelRatio || 1)
			ctx.clearRect(0, 0, w, h)

			const bars =
				mode === 'window60'
					? buildMicroWave(peaks, duration, current)
					: peaks.map((y, i) => ({ x: i / peaks.length, y }))
			const barW = w / bars.length

			ctx.fillStyle = color
			bars.forEach(({ x, y }) => {
				const hh = y * h * 0.8
				ctx.fillRect(x * w, (h - hh) / 2, barW, hh)
			})

			const playedX =
				mode === 'window60'
					? ((current % 30) / 60) * w
					: (progress / 100) * w

			ctx.save()
			ctx.beginPath()
			ctx.rect(0, 0, playedX, h)
			ctx.clip()
			ctx.fillStyle = playedColor
			bars.forEach(({ x, y }) => {
				const hh = y * h * 0.8
				ctx.fillRect(x * w, (h - hh) / 2, barW, hh)
			})
			ctx.restore()

			ctx.strokeStyle = '#fff'
			ctx.lineWidth = 2
			ctx.beginPath()
			ctx.moveTo(playedX, 0)
			ctx.lineTo(playedX, h)
			ctx.stroke()
		},
		[peaks, duration, current, progress, mode, color, playedColor]
	)
}

const buildMicroWave = (peaks: number[], duration: number, current: number) => {
	const total = peaks.length
	const pos = Math.floor((current / duration) * total)
	const half = Math.floor((30 / duration) * total)
	const start = Math.max(0, pos - half)
	const end = Math.min(total, pos + half)
	return peaks.slice(start, end).map((y, i) => ({ x: i / (end - start), y }))
}
