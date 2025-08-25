'use client'

import { useEffect } from 'react'

import { TrackByQ } from './ui/trackByQ'
import { DynamicModuleLoader, ReducerList } from '../(providers)/storeProvider'
import { getQueueTrackes } from './model/selectors'
import { queuepageReducer } from './model/slices/queuepageSlice'

import { fetchQueue } from '@/app/queue/model/service/fetchQueue'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'

const reducers: ReducerList = {
	queuepage: queuepageReducer,
}

export default function QueuePage() {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchQueue())
	}, [dispatch])

	const trackes = useAppSelector(getQueueTrackes)

	return (
		<DynamicModuleLoader reducers={reducers}>
			<h1 className="relative text-3xl font-semibold text-white select-none pb-2">
				Queue trackes
			</h1>
			<div className="flex flex-col gap-4">
				{trackes.length === 0 && (
					<div className="h-80 flex items-center justify-center select-none">
						Очередь пуста
					</div>
				)}
				{trackes.map((track) => (
					<TrackByQ key={track.id} track={track} />
				))}
			</div>
		</DynamicModuleLoader>
	)
}
