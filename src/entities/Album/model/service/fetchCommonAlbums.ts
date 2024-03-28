import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { mainpageAction } from 'pages/MainPage/model/slice/mainpageSlice';
import { AlbumsPost } from '../types/albumsSchema';

export const fetchCommonAlbums = createAsyncThunk<AlbumsPost, void, ThunkConfig<string>>('album/fetchCommonAlbum', async (_, thunkAPI) => {
	const { rejectWithValue, extra, dispatch } = thunkAPI;

	try {
		const res = await extra.api.get<AlbumsPost>('/app', {
			headers: {
				withCredentials: true,
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
				'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
			},
		});
		dispatch(mainpageAction.offLoadingData());
		return res.data;
	} catch (error) {
		return rejectWithValue('error');
	}
});
