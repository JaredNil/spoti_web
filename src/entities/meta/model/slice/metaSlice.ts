import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { MetaSchema } from '../types/meta'

import { cacheHandle } from '@/shared/lib/localstorage'

const initialState: MetaSchema = {
	search: '',
	isSidebarVisible: true,
	sidebarWidth: undefined,
	isVisibleModal: false,
}

export const metaSlice = createSlice({
	name: 'meta',
	initialState,
	reducers: {
		setSearched: (state, action: PayloadAction<string>) => {
			state.search = action.payload
			cacheHandle.set('search', action.payload)
		},
		setSidebarWidth: (state, action: PayloadAction<string>) => {
			state.sidebarWidth = action.payload
		},
		setIsSidebarVisible: (state, action: PayloadAction<boolean>) => {
			state.isSidebarVisible = action.payload
		},
		onVisibleModal: (state) => {
			state.isVisibleModal = true
		},
		offVisibleModal: (state) => {
			state.isVisibleModal = false
		},
	},
})

export const { actions: metaAction } = metaSlice
export const { reducer: metaReducer } = metaSlice
