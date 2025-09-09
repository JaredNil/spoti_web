'use client'

import { FC } from 'react'

import { getIsLoadingPage } from './model/selector/searchpageSelector'
import { searchpageReducer } from './model/slice/searchpageSlice'
import { Search } from './ui/search'

import {
	DynamicModuleLoader,
	ReducerList,
} from '@/app/(providers)/storeProvider'

const reducers: ReducerList = {
	searchpage: searchpageReducer,
}

export default function SearchPage() {
	return (
		<DynamicModuleLoader reducers={reducers}>
			<Search />
		</DynamicModuleLoader>
	)
}
