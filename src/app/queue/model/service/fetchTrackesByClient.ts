'use client'

import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/(providers)/storeProvider/config/store'
import { Trackes } from '@/shared/api/track'

export const fetchTrackesByClient = createAsyncThunk<
	Trackes,
	void,
	ThunkConfig<string>
>('queue/fetchTrackesByClient', async (_, thunkAPI) => {
	const { rejectWithValue, dispatch, getState } = thunkAPI
	try {
		console.log('HERERER')
		const state = getState()
		const queue = state.player.queue
		console.log(queue)
		const res = (await fetch(`/api/track?query=${queue.join(',')}`)).json()
		console.log(res)
		// if (!res.body) {
		// 	throw new Error()
		// }
		// return res.body as Trackes
		return [] as Trackes
	} catch (error) {
		return rejectWithValue('error')
	}
})
