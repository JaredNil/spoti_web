import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { SearchpageSchema } from '../types/searchpageSchema'

import { Trackes, TrackesHash } from '@/shared/api'

const initialState: SearchpageSchema = {
	isLoading: false,
	error: undefined,
	trackes: [],
	trackesHash: [],
}

export const searchpageSlice = createSlice({
	name: 'searchpage',
	initialState,
	reducers: {
		onLoadingPage: (state) => {
			state.isLoading = true
		},
		offLoadingPage: (state) => {
			state.isLoading = false
		},
		setSearchTrackes: (state, action: PayloadAction<Trackes>) => {
			state.trackes = action.payload
		},
		setSearchTrackesId: (state, action: PayloadAction<TrackesHash>) => {
			state.trackesHash = action.payload
		},
		setSearchedData: (
			state,
			action: PayloadAction<{
				trackes: Trackes
				trackesHash: TrackesHash
			}>
		) => {
			state.trackes = action.payload.trackes
			state.trackesHash = action.payload.trackesHash
		},
	},
})

export const { actions: searchpageAction } = searchpageSlice
export const { reducer: searchpageReducer } = searchpageSlice
