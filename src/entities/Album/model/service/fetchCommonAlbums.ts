import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AlbumsPost } from '../types/albumsSchema';
import { ALBUMS } from 'json/albums';


export const fetchCommonAlbums = createAsyncThunk<AlbumsPost, void, ThunkConfig<string>>('album/fetchCommonAlbum',
	async (_, thunkAPI) => {
		// const { rejectWithValue, extra, dispatch } = thunkAPI;

		return ALBUMS.filter(album => {
			if (album.user_id===0) return album
		});

		// Для работающего бэкенда
		// try {
		// 	const res = await extra.api.get<AlbumsPost>('/app', {
		// 		headers: {
		// 			withCredentials: true,
		// 			'Access-Control-Allow-Origin': '*',
		// 			'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
		// 			'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
		// 		},
		// 	});
		// 	dispatch(mainpageAction.offLoadingData());
		// 	return res.data;
		// } catch (error) {
		// 	return rejectWithValue('error');
		// }
	});