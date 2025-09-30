'use client'

import { useAppSelector } from '@/shared/hooks'
import { getPlayerLineData } from '@/widgets/player'

export const useAudioClock = () => {
	const { timer } = useAppSelector(getPlayerLineData)
	return timer
}
