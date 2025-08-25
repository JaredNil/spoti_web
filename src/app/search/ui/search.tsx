'use client'

import { FC } from 'react'

import { SearchContent } from './searchContent'

import {
	DynamicModuleLoader,
	ReducerList,
} from '@/app/(providers)/storeProvider'
import {
	SearchContentSkeleton,
	getIsLoadingPage,
	searchpageReducer,
} from '@/app/search'
import { useAppSelector } from '@/shared/hooks'

const reducers: ReducerList = {
	searchpage: searchpageReducer,
}

const SearchClient: FC = () => {
	const isLoadingPage = useAppSelector(getIsLoadingPage)

	return (
		<DynamicModuleLoader reducers={reducers}>
			{isLoadingPage && <SearchContentSkeleton />}
			{!isLoadingPage && <SearchContent />}
		</DynamicModuleLoader>
	)
}

export default SearchClient
