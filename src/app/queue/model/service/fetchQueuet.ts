'use client'

import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/(providers)/storeProvider/config/store'
import { Trackes } from '@/shared/api/track'

export const fetchQueue = createAsyncThunk<Trackes, void, ThunkConfig<string>>(
	'queue/fetchQueue',
	async (_, thunkAPI) => {
		const { rejectWithValue, dispatch, getState } = thunkAPI
		try {
			const state = getState()
			const queue = state.player.queue
			const res = await fetch(`/api/track?query=${queue.join(',')}`)
			const trackes = (await res.json()) as Trackes
			if (!trackes) {
				throw new Error()
			}
			return trackes
		} catch (error) {
			return rejectWithValue('error')
		}
	}
)
