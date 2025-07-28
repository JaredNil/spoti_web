import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ALBUMS } from 'content/ALBUMS_CONTENT';
import { TRACKES_CONTENT } from 'content/TRACKES_CONTENT';
import { AlbumInterface } from 'entities/Album';
import { Trackes } from 'entities/Track';


export const fetchPlaylistData = createAsyncThunk<AlbumInterface, number, ThunkConfig<string>>('playListPage/fetchPlaylistData',
	async (albums_id, thunkAPI) => {
		// const { rejectWithValue, extra, dispatch } = thunkAPI;

        return ALBUMS[albums_id]



		// Для работающего бэкенда
		// try {
		// 	const res = await extra.api.get<Trackes>('/album', {
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