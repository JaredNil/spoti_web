// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { ThunkConfig } from 'app/providers/StoreProvider';
// import { ALBUMS } from 'content/ALBUMS_CONTENT';
// import { TRACKES_CONTENT } from 'content/TRACKES_CONTENT';
// import { Trackes } from 'entities/Track';


// export const fetchPlaylistTrackes = createAsyncThunk<Trackes, number[], ThunkConfig<string>>('playlistPage/fetchPlaylistTrackes',
// 	async (trackesIds, thunkAPI) => {
// 		// const { rejectWithValue, extra, dispatch } = thunkAPI;

// 		const trackes: Trackes = []
// 		// demo realize 
// 		TRACKES_CONTENT.forEach((trackDb) => {

// 			(trackesIds.forEach(track_id => {
// 				if (trackDb.id === track_id) {
// 					trackes.push(trackDb)
// 				}
// 			}))
// 		})
// 		return trackes

// 		// Для работающего бэкенда
// 		// try {
// 		// 	const res = await extra.api.get<Trackes>('/trackes', {
// 		// 		headers: {
// 		// 			withCredentials: true,
// 		// 			'Access-Control-Allow-Origin': '*',
// 		// 			'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
// 		// 			'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
// 		// 		},
// 		// 	});
// 		// 	dispatch(playlistPageSlice.offLoadingData());
// 		// 	return res.data;
// 		// } catch (error) {
// 		// 	return rejectWithValue('error');
// 		// }
// 	});