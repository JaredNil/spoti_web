'use client'
import { useEffect, useState } from 'react'

import { useAppSelector } from '@/shared/hooks'
import { getPlayerLineData } from '@/widgets/player'

export const useAudioClock = () => {
	const { timer } = useAppSelector(getPlayerLineData)
	return timer // секунды
}
