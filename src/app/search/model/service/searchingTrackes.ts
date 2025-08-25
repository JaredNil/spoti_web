import { createAsyncThunk } from '@reduxjs/toolkit'

import type { ThunkConfig } from '@/app/(providers)/storeProvider/config/store'
import { TRACKES } from '@/shared/api/cache/TRACKES_CONTENT'
import { Trackes } from '@/shared/api/track'

interface searchingTrackesDto {
	trackes: Trackes
	trackesId: number[]
}

export const searchingTrackes = createAsyncThunk<
	searchingTrackesDto,
	string,
	ThunkConfig<string>
>('searchpage/searchingTrackes', async (searching) => {
	const searchedTrackes = findByReq(TRACKES, searching)
	const trackesId = extractIds(searchedTrackes)

	return { trackes: searchedTrackes, trackesId }
})

export function findByReq(tracks: Trackes, query: string): Trackes {
	if (!query.trim()) return tracks

	const q = query.trim().toLowerCase()

	return tracks.filter(
		(t) =>
			t.title.toLowerCase().includes(q) ||
			t.author.toLowerCase().includes(q)
	)
}
export const extractIds = <T extends { id: number }>(items: T[]): number[] =>
	items.map(({ id }) => id)
