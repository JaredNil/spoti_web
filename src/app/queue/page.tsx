'use client'

import { TrackQueue } from './ui/trackQueue'
import { DynamicModuleLoader, ReducerList } from '../(providers)/storeProvider'
import { getQueueTrackes } from './model/selectors'
import { queuepageReducer } from './model/slices/queuepageSlice'
import { QueueTools } from './ui/queueTools'

import { trackApi } from '@/entities/track/api/api'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { getPlayerQueue, getPlayerTarget } from '@/widgets/player'

const reducers: ReducerList = {
	queuepage: queuepageReducer,
}

export default function QueuePage() {
	// const dispatch = useAppDispatch()

	// const playerQueue = useAppSelector(getPlayerQueue)
	const trackesId = useAppSelector(getPlayerQueue)
	// const queueTrackes = useAppSelector(getQueueTrackes)
	const currentTarget = useAppSelector(getPlayerTarget)

	const { useFetchTrackesQuery } = trackApi

	const {
		data: trackes,
		isLoading,
		isError,
		error,
	} = useFetchTrackesQuery(trackesId)

	// useEffect(() => {
	// 	dispatch(fetchQueue())
	// }, [dispatch, playerQueue])

	return (
		<DynamicModuleLoader reducers={reducers}>
			<QueueTools />
			<div className="flex flex-col gap-4 pt-2 transition-all">
				{trackes && trackes.length === 0 && (
					<div className="h-80 flex items-center justify-center select-none">
						Очередь пуста
					</div>
				)}
				{trackes?.map((track, index) => (
					<div key={track.id} className="relative w-full">
						<div
							className={`text-2xl  text-white select-none
							opacity-0 transition-all duration-400 absolute pb-2
							${currentTarget === index && 'opacity-100 relative pb-0'}`}
						>
							{currentTarget === index && 'Текущий трек'}
						</div>
						<TrackQueue
							target={index}
							track={track}
							trackesId={trackesId}
						/>
						<div
							className={`text-2xl  text-white select-none
									opacity-0 transition-all duration-400 absolute pt-2
									${currentTarget === index && 'opacity-100 relative pt-0'}`}
						>
							{currentTarget === index &&
								trackes.length - 1 != currentTarget &&
								'Очередь'}
						</div>
					</div>
				))}
			</div>
		</DynamicModuleLoader>
	)
}
