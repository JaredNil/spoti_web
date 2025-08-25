'use client'

import { FC } from 'react'

import { DynamicModuleLoader, ReducerList } from '../(providers)/storeProvider'

import {
	SearchContent,
	getIsLoadingPage,
	searchpageReducer,
} from '@/app/search'
import { useAppSelector } from '@/shared/hooks'

const reducers: ReducerList = {
	searchpage: searchpageReducer,
}

const SearchPage: FC = () => {
	const isLoadingPage = useAppSelector(getIsLoadingPage)

	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className="mb-2 flex flex-col gap-y-6">
				<h1 className="text-3xl font-semibold text-white">Search</h1>
			</div>
			<SearchContent isLoadingPage={isLoadingPage} />
		</DynamicModuleLoader>
	)
}

export default SearchPage
