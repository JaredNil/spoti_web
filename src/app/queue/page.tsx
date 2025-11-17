'use client'

import { useCallback } from 'react'

import { useDragQueue } from './hooks/useDragQueue'
import { useQueueActions } from './hooks/useQueueActions'
import { TrackQueue } from './ui/trackQueue'
import { DynamicModuleLoader, ReducerList } from '../(providers)/storeProvider'
import { queuepageReducer } from './model/slices/queuepageSlice'
import { QueueTools } from './ui/queueTools'

import { trackApi } from '@/entities/track/api/trackApi'
import { useAppSelector } from '@/shared/hooks'
import { useTranslation } from '@/shared/i18n'
import {
	getPlayerQueue,
	getPlayerTarget,
	getPlayerNativeQueue,
} from '@/widgets/player'

const reducers: ReducerList = {
	queuepage: queuepageReducer,
}

export default function QueuePage() {
	const { t } = useTranslation()
	const queueHash = useAppSelector(getPlayerQueue)
	const nativeQueueHash = useAppSelector(getPlayerNativeQueue)
	const currentTarget = useAppSelector(getPlayerTarget)

	// Используем native queue для получения данных треков с сервера
	const { useFetchTrackesQuery } = trackApi
	const { data: rawTrackes } = useFetchTrackesQuery(nativeQueueHash)

	// Формируем треки в порядке queue (клиентская переменная)
	const trackes =
		rawTrackes && queueHash
			? (queueHash
					.map((hash) =>
						rawTrackes.find((track) => track.hash === hash)
					)
					.filter(Boolean) as typeof rawTrackes)
			: undefined

	const { updateQueueOrder } = useQueueActions()

	const handleOrderChange = useCallback(
		(newOrder: number[], draggedIndex: number, targetIndex: number) => {
			if (trackes) {
				updateQueueOrder(newOrder, trackes, draggedIndex, targetIndex)
			}
		},
		[updateQueueOrder, trackes]
	)

	const rowHeight = 112 // высота TrackQueue + gap (h-24 = 96px + gap-4 = 16px)
	const isDraggable = true

	const { containerRef } = useDragQueue({
		items: trackes,
		isDraggable,
		rowHeight,
		onOrderChange: handleOrderChange,
	})

	return (
		<DynamicModuleLoader reducers={reducers}>
			<QueueTools />
			<div
				ref={containerRef}
				className="flex flex-col gap-4 pt-2 transition-all"
			>
				{trackes && trackes.length === 0 && (
					<div className="h-80 flex items-center justify-center select-none">
						{t('queueEmpty')}
					</div>
				)}
				{trackes?.map((track, index) => (
					<div key={track.hash} className="relative w-full">
						<div
							className={`text-2xl  text-white select-none
							opacity-0 transition-all duration-400 absolute pb-2
							${currentTarget === index && 'opacity-100 relative pb-0'}`}
						>
							{currentTarget === index && t('currentTrack')}
						</div>
						<TrackQueue
							target={index}
							track={track}
							trackesHash={queueHash}
							isDraggable={isDraggable}
						/>
						<div
							className={`text-2xl  text-white select-none
							opacity-0 transition-all duration-400 absolute pt-2
							${currentTarget === index && 'opacity-100 relative pt-0'}`}
						>
							{currentTarget === index &&
								trackes.length - 1 != currentTarget &&
								t('queue')}
						</div>
					</div>
				))}
			</div>
		</DynamicModuleLoader>
	)
}
