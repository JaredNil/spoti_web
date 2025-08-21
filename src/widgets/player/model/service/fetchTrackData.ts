import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'

import { Track } from 'entities/Track'
import { TRACKES_CONTENT } from 'content/TRACKES_CONTENT'
import { playerAction } from '../slice/playerSlice'

// DEPRECATED
// interface fetchTrackDto{
//		trackesId: number;
// 		hash: string;
// }

export const fetchTrackData = createAsyncThunk<
	Track,
	number,
	ThunkConfig<string>
>('player/fetchTrackById', async (trackId, thunkAPI) => {
	const { rejectWithValue, extra, dispatch } = thunkAPI

	dispatch(playerAction.setIsRun(true))
	return TRACKES_CONTENT.filter((track) => {
		if (track.id === trackId) return track
	})[0]

	// IN DEMO NOT WORKING

	// try {
	// 	const res = await extra.api.get<Partial<Track>>('/player', {
	// 		headers: {
	// 			withCredentials: true,
	// 			'Access-Control-Allow-Origin': '*',
	// 			'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
	// 			'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
	// 		},
	// 	});
	// 	return res.data;
	// } catch (error) {
	// 	return rejectWithValue('error');
	// }
})
