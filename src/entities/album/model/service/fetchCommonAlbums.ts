// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { ThunkConfig } from 'app/providers/StoreProvider';
// import { AlbumsCollection } from '../types/album';
// import { ALBUMS } from 'content/ALBUMS_CONTENT';


// export const fetchCommonAlbums = createAsyncThunk<AlbumsCollection, void, ThunkConfig<string>>('album/fetchCommonAlbum',
// 	async (_, thunkAPI) => {
// 		// const { rejectWithValue, extra, dispatch } = thunkAPI;

// 		return ALBUMS.filter(album => {
// 			if (album.user_id===0) return album
// 		});

// 		// Для работающего бэкенда
// 		// try {
// 		// 	const res = await extra.api.get<AlbumsCollection>('/app', {
// 		// 		headers: {
// 		// 			withCredentials: true,
// 		// 			'Access-Control-Allow-Origin': '*',
// 		// 			'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
// 		// 			'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
// 		// 		},
// 		// 	});
// 		// 	dispatch(mainpageAction.offLoadingData());
// 		// 	return res.data;
// 		// } catch (error) {
// 		// 	return rejectWithValue('error');
// 		// }
// 	});