import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { Track } from 'entities/Track';
import { TRACKES_CONTENT } from 'content/TRACKES_CONTENT';

interface fetchTrackDto{
	trackesId: number;
	hash: string;
}

export const fetchTrackData = createAsyncThunk<Track, fetchTrackDto, ThunkConfig<string>>('player/fetchTrackById',
	async (action, thunkAPI) => {
		
		const { rejectWithValue, extra, dispatch } = thunkAPI;

		const track = TRACKES_CONTENT.filter((track) => {if (track.id === action.trackesId) return track})[0]
		track.hash = action.hash
		return track
		
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
	});