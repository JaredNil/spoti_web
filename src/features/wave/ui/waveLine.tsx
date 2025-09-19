'use client'

import { useAudioClock } from '../model/hooks/useAudioClock'
import { useCanvas } from '../model/hooks/useCanvas'
import { useWaveDrawer, WaveMode } from '../model/hooks/useWaveDrawer'

type Props = {
	peaks: number[]
	duration: number
	progress?: number
	mode?: WaveMode
	className?: string
}

export const WaveLine = ({
	peaks,
	duration,
	progress = 0,
	mode = 'full',
	className = '',
}: Props) => {
	const current = useAudioClock()
	const draw = useWaveDrawer(peaks, duration, current, progress, mode)
	const canvasRef = useCanvas(draw)

	return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />
}
