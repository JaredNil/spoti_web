'use client'
import { ReactNode, useEffect } from 'react'

import { AppDispatch } from '../storeProvider/ui/storeProvider'

import { userSlice } from '@/entities/user/model/slice/userSlice'
import { useAppDispatch } from '@/shared/hooks'
import { cacheHandle, cacheKey, cacheKeys } from '@/shared/lib/localstorage'
import { playerSlice } from '@/widgets/player'
import {
	setAsyncTrack,
	setAsyncVolume,
} from '@/widgets/player/model/slice/playerSlice'

export const CacheProvider = ({ children }: { children: ReactNode }) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		console.warn('localstorage manager work')
		cacheKeys.forEach((cacheKey) => {
			cacheManager(cacheKey, cacheHandle.get(cacheKey), dispatch)
		})
	}, [])

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
			dispatch(setAsyncVolume(cacheData))
			break

		case 'track':
			dispatch(setAsyncTrack(cacheData))
			break
		case 'search':
			if (cacheData) dispatch(userSlice.actions.setSearched(cacheData))
			break
	}
}
