'use client'
import { useDeferredValue, useEffect, useState } from 'react'

import { SearchView } from './searchView'
import {
	getIsLoadingPage,
	getSearchTrackes,
	getSearchTrackesHash,
} from '../model/selector/searchpageSelector'
import { searchpageAction } from '../model/slice/searchpageSlice'

import { getUserSearch, metaAction } from '@/entities/meta'
import { useSearchTrackesQuery } from '@/entities/track/api/trackApi'
import { Track } from '@/shared/api'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { Input } from '@/shared/ui/kit/input'
import { PlayButton } from '@/shared/ui/playButton/playButton'

export const Search: React.FC = () => {
	const dispatch = useAppDispatch()

	const trackes = useAppSelector(getSearchTrackes)
	const trackesHash = useAppSelector(getSearchTrackesHash)
	const searchInput = useAppSelector(getUserSearch)
	const isLoading = useAppSelector(getIsLoadingPage)

	const deferredQuery = useDeferredValue(searchInput)

	const { data: searchData } = useSearchTrackesQuery(deferredQuery)

	useEffect(() => {
		if (searchData) dispatch(searchpageAction.setSearchedData(searchData))
	}, [dispatch, searchData])

	const [test, setTest] = useState<Track | null>(null)
	// useEffect(() => {
	// 	dispatch(setAsyncTrack()).then((res) => {
	// 		if (res.payload) setTest(res.payload as Track)
	// 	})
	// }, [dispatch])

	return (
		<div className="pt-2 flex flex-col">
			<Input
				type="text"
				value={searchInput}
				onChange={(e) =>
					dispatch(metaAction.setSearched(e.target.value))
				}
				className="sceleton xl:w-[50%]"
				placeholder="architect..."
			/>
			<div className="w-full mt-3 flex flex-col">
				<span className="text-2xl select-none">Результаты поиска:</span>
				{trackes && trackesHash && (
					<SearchView
						trackes={trackes}
						trackesHash={trackesHash}
						isLoading={isLoading}
					/>
				)}
			</div>
			<div className="w-full mt-3 flex flex-col">
				<span className="text-2xl select-none">TEST:</span>
				{test && <TestTrack track={test} />}
			</div>
		</div>
	)
}

const TestTrack = ({ track }: { track: Track }) => {
	return (
		<div
			className="relative flex items-center justify-between overflow-hidden
				h-auto
				cursor-pointer  gap-x-4  rounded-md
				bg-neutral-100/10  transition hover:bg-neutral-100/20
				md:flex-row flex-col md:h-40 md:pr-4 pt-6 md:pt-0"
		>
			<div
				className="flex h-full  pointer-events-none select-none
					md:flex-row flex-col md:items-end items-center"
			>
				<div className="relative h-full aspect-square "></div>
				<div
					className="md:pl-3 h-full flex flex-col justify-center 
						md:items-start items-center"
				>
					<p className="truncate text-4xl font-medium text-neutral-100 py-2">
						{track.title}
					</p>
					<p className="truncate text-lg text-neutral-400">
						{track.author}
					</p>
				</div>
			</div>
			<div className="w-30 md:w-16 py-16 md:py-0">
				<PlayButton
					relayTrackesId={[track.hash]}
					track={track}
					type="track"
				/>
			</div>
		</div>
	)
}
