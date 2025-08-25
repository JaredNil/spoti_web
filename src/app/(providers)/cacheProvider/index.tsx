'use client'
import { ReactNode } from 'react'

import { AppDispatch } from '../storeProvider/ui/storeProvider'

import { useAppDispatch } from '@/shared/hooks'
import { cacheHandle, cacheKey, cacheKeys } from '@/shared/lib/localstorage'
import { playerSlice } from '@/widgets/player'

export const CacheProvider = ({ children }: { children: ReactNode }) => {
	const dispatch = useAppDispatch()

	cacheKeys.forEach((cacheKey) => {
		cacheManager(cacheKey, cacheHandle.get(cacheKey), dispatch)
	})

	return <>{children}</>
}

const cacheManager = (
	cacheKey: cacheKey,
	cacheData: any,
	dispatch: AppDispatch
) => {
	switch (cacheKey) {
		case 'isActivePlayer':
			if (cacheData == true) {
				dispatch(playerSlice.actions.onActivePlayer())
			} else {
				dispatch(playerSlice.actions.offActivePlayer())
			}
			break

		case 'native':
			dispatch(playerSlice.actions.setNative(cacheData))
			break

		case 'queue':
			dispatch(playerSlice.actions.setQueue(cacheData))
			break

		case 'targetQueue':
			dispatch(playerSlice.actions.setTarget(cacheData))
			break

		case 'volume':
			dispatch(playerSlice.actions.setVolume(cacheData))
			break

		case 'progress':
			dispatch(playerSlice.actions.setProgress(cacheData))
			break

		case 'track':
			dispatch(playerSlice.actions.setTrack(cacheData))
			break
		case 'timer':
			dispatch(playerSlice.actions.setTimer(cacheData))
			break
	}
}
