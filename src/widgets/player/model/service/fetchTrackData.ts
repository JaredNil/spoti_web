import { createAsyncThunk } from '@reduxjs/toolkit'

import { TRACKES } from '../../../../shared/api/cache/TRACKES_CONTENT'
import { playerAction } from '../slice/playerSlice'

import { ThunkConfig } from '@/app/(providers)/storeProvider/config/store'
import { Track } from '@/shared/api/track'

export const fetchTrackData = createAsyncThunk<
	Track,
	number,
	ThunkConfig<string>
>('player/fetchTrackById', async (trackId, thunkAPI) => {
	const { dispatch } = thunkAPI

	dispatch(playerAction.setIsRun(true))
	return TRACKES.filter((track) => {
		if (track.id === trackId) return track
	})[0]
})
