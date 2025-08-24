import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { QueuepageSchema } from '../types/queuepageSchema'

import { fetchTrackesByClient } from '@/app/queue/model/service/fetchTrackesByClient'
import { Trackes } from '@/shared/api/track'

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
		builder.addCase(fetchTrackesByClient.pending, (state) => {
			state.error = ''
			state.isLoading = true
		})
		builder.addCase(
			fetchTrackesByClient.fulfilled,
			(state, action: PayloadAction<Trackes>) => {
				state.isLoading = false
				state.trackes = action.payload
			}
		)
		// builder.addCase(uploadingFile.rejected, (state) => {
		// 	state.isLoading = false;
		// 	// state.error = action.error;
		// });
	},
})

export const { actions: queuepageAction } = queuepageSlice
export const { reducer: queuepageReducer } = queuepageSlice
