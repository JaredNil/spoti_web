'use client'

import { FC } from 'react'

import { getIsLoadingPage } from './model/selector/searchpageSelector'
import { searchpageReducer } from './model/slice/searchpageSlice'
import { SearchContentSkeleton } from './ui/piece/searchContentSkeleton'
import { Search } from './ui/search'

import {
	DynamicModuleLoader,
	ReducerList,
} from '@/app/(providers)/storeProvider'
import { useAppSelector } from '@/shared/hooks'

const reducers: ReducerList = {
	searchpage: searchpageReducer,
}

const SearchPage: FC = () => {
	const isLoadingPage = useAppSelector(getIsLoadingPage)

	return (
		<DynamicModuleLoader reducers={reducers}>
			{/* {isLoadingPage && <SearchContentSkeleton />} */}
			<Search />
		</DynamicModuleLoader>
	)
}

export default SearchPage
