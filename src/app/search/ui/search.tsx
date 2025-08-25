'use client'
import { useDeferredValue, useEffect, useState } from 'react'

import { SearchView } from './searchView'
import {
	getIsLoadingPage,
	getSearchTrackes,
	getSearchTrackesId,
} from '../model/selector/searchpageSelector'
import { searchingTrackes } from '../model/service/searchingTrackes'

import { getUserSearch } from '@/entities/user'
import { userAction, userSlice } from '@/entities/user/model/slice/userSlice'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { Input } from '@/shared/ui/kit/input'

export const Search: React.FC = () => {
	const dispatch = useAppDispatch()

	const trackes = useAppSelector(getSearchTrackes)
	const trackesId = useAppSelector(getSearchTrackesId)
	const searchInput = useAppSelector(getUserSearch)
	const isLoading = useAppSelector(getIsLoadingPage)
	const deferredQuery = useDeferredValue(searchInput)

	useEffect(() => {
		if (
			deferredQuery.trim() &&
			deferredQuery != '' &&
			deferredQuery.length > 1
		) {
			dispatch(searchingTrackes(deferredQuery.trim()))
		}
	}, [deferredQuery, dispatch])

	return (
		<div className="pt-2 flex flex-col">
			<Input
				type="text"
				value={searchInput}
				onChange={(e) =>
					dispatch(userAction.setSearched(e.target.value))
				}
				className="sceleton xl:w-[50%]"
				placeholder="Scarlxrd...  architect...   genre..."
			/>
			<div className="w-full mt-3 flex flex-col">
				<span className="text-2xl select-none">Результаты поиска:</span>
				{trackes && trackesId && (
					<SearchView
						trackes={trackes}
						trackesId={trackesId}
						isLoading={isLoading}
					/>
				)}
			</div>
		</div>
	)
}
