'use client'
import { useCallback } from 'react'

export type WaveMode = 'full' | 'window60'

export const useWaveDrawer = (
	peaks: number[],
	duration: number,
	current: number,
	progress: number,
	mode: WaveMode,
	barGap: number,
	color = 'rgba(163,163,163,.7)',
	playedColor = '#22c55e'
) => {
	const WAVEFORM_HEIGHT_RATIO = 0.9 // Какую часть высоты канваса занимает волна (90%)
	const PROGRESS_LINE_COLOR = '#fff' // Цвет линии прогресса
	const PROGRESS_LINE_WIDTH_PX = 2 // Толщина линии прогресса в пикселях
	const MICRO_WAVE_WINDOW_SECONDS_TOTAL = 60 // Общий размер окна в секундах

	return useCallback(
		(ctx: CanvasRenderingContext2D) => {
			const w = ctx.canvas.width / (window.devicePixelRatio || 1)
			const h = ctx.canvas.height / (window.devicePixelRatio || 1)
			ctx.clearRect(0, 0, w, h)

			const bars =
				mode === 'window60'
					? buildMicroWave(
							peaks,
							duration,
							current,
							MICRO_WAVE_WINDOW_SECONDS_TOTAL
						)
					: peaks.map((y, i) => ({ x: i / peaks.length, y }))
			const barW = w / bars.length

			const actualBarWidth = barW - barGap
			const xOffset = barGap / 2

			ctx.fillStyle = color
			bars.forEach(({ x, y }) => {
				const hh = y * h * WAVEFORM_HEIGHT_RATIO
				ctx.fillRect(x * w + xOffset, (h - hh) / 2, actualBarWidth, hh)
			})

			const playedX =
				mode === 'window60'
					? ((current % MICRO_WAVE_WINDOW_SECONDS_TOTAL) /
							MICRO_WAVE_WINDOW_SECONDS_TOTAL) *
						w
					: (progress / 100) * w

			ctx.save()
			ctx.beginPath()
			ctx.rect(0, 0, playedX, h)
			ctx.clip()
			ctx.fillStyle = playedColor
			bars.forEach(({ x, y }) => {
				const hh = y * h * WAVEFORM_HEIGHT_RATIO
				ctx.fillRect(x * w + xOffset, (h - hh) / 2, actualBarWidth, hh)
			})
			ctx.restore()

			ctx.strokeStyle = PROGRESS_LINE_COLOR
			ctx.lineWidth = PROGRESS_LINE_WIDTH_PX
			ctx.beginPath()
			ctx.moveTo(playedX, 0)
			ctx.lineTo(playedX, h)
			ctx.stroke()
		},
		[
			peaks,
			duration,
			current,
			progress,
			mode,
			color,
			playedColor,
			barGap,
			MICRO_WAVE_WINDOW_SECONDS_TOTAL,
		]
	)
}

const buildMicroWave = (
	peaks: number[],
	duration: number,
	current: number,
	windowSecondsTotal: number
) => {
	const total = peaks.length
	const pos = Math.floor((current / duration) * total)
	const halfWindowSeconds = windowSecondsTotal / 2
	const half = Math.floor((halfWindowSeconds / duration) * total)
	const start = Math.max(0, pos - half)
	const end = Math.min(total, pos + half)
	return peaks.slice(start, end).map((y, i) => ({ x: i / (end - start), y }))
}
