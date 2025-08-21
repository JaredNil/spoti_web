// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { ThunkConfig } from 'app/providers/StoreProvider';
// import { TRACKES_CONTENT } from 'content/TRACKES_CONTENT';
// import { Trackes } from 'entities/Track';

// export const searchingTrackes = createAsyncThunk<Trackes, void, ThunkConfig<string>>('searchpage/searchingTrackes',
// 	async (_, thunkAPI) => {
// 		// const { rejectWithValue, extra, dispatch } = thunkAPI;

// 		return TRACKES_CONTENT

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