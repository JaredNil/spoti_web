import { PayloadAction, createSlice } from '@reduxjs/toolkit'

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
})

export const { actions: queuepageAction } = queuepageSlice
export const { reducer: queuepageReducer } = queuepageSlice
