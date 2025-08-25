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

			const trackes = orderByIds(await res.json(), queue) as Trackes
			console.log(trackes)
			if (!trackes) {
				throw new Error()
			}
			return trackes
		} catch (error) {
			return rejectWithValue('error')
		}
	}
)

export function orderByIds<T extends { id: number | string }>(
	items: T[],
	ids: (number | string)[]
): T[] {
	const map = new Map(items.map((i) => [i.id, i]))
	return ids.map((id) => map.get(id)).filter(Boolean) as T[]
}
