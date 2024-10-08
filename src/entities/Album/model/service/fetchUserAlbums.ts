import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AlbumsPost } from '../types/albumsSchema';
import { ALBUMS } from 'json/albums';


export const fetchUserAlbums = createAsyncThunk<AlbumsPost, void, ThunkConfig<string>>('album/fetchUserAlbums', async (_, thunkAPI) => {
	// const { rejectWithValue, extra } = thunkAPI;


	return ALBUMS.filter(album => {
		if (album.user_id!==0) return album
	});
	
	// Код для бэкенда
	// try {
	// 	const res = await extra.api.get<AlbumsPost>('/album', {
	// 		headers: {
	// 			withCredentials: true,
	// 			'Access-Control-Allow-Origin': '*',
	// 			'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
	// 			'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
	// 		},
	// 	});

	// 	return res.data;
	// } catch (error) {
	// 	return rejectWithValue(error);
	// }
});
