import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { fetchQueue } from '../service/fetchQueue'
import { QueuepageSchema } from '../types/queuepageSchema'

import { Trackes } from '@/shared/api'

const initialState: QueuepageSchema = {
	isLoading: false,
	trackes: [],
	error: undefined,
}

export const queuepageSlice = createSlice({
	name: 'queuepage',
	initialState,
	reducers: {
		setQueue: (state, action: PayloadAction<Trackes>) => {
			state.trackes = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchQueue.pending, (state) => {
			state.error = ''
			state.isLoading = true
		})
		builder.addCase(
			fetchQueue.fulfilled,
			(state, action: PayloadAction<Trackes>) => {
				state.isLoading = false
				state.trackes = action.payload
			}
		)
	},
})

export const { actions: queuepageAction } = queuepageSlice
export const { reducer: queuepageReducer } = queuepageSlice
