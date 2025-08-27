import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { searchingTrackes } from '../service/searchingTrackes'
import { SearchpageSchema } from '../types/searchpageSchema'

import { Trackes } from '@/shared/api'

const initialState: SearchpageSchema = {
	isLoading: false,
	error: undefined,
	trackes: [],
	trackesId: [],
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
		setSearchTrackesId: (state, action: PayloadAction<number[]>) => {
			state.trackesId = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(searchingTrackes.pending, (state) => {
			// state.isLoading = true
		})
		builder.addCase(searchingTrackes.fulfilled, (state, action) => {
			state.trackes = action.payload.trackes
			state.trackesId = action.payload.trackesId
			state.isLoading = false
		})
		builder.addCase(searchingTrackes.rejected, (state, action) => {
			state.isLoading = false
		})
	},
})

export const { actions: searchpageAction } = searchpageSlice
export const { reducer: searchpageReducer } = searchpageSlice
