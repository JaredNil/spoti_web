// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { ThunkConfig } from 'app/providers/StoreProvider';

// IN DEMO NOT WORKING

// import { PlayerSchema } from '../types/PlayerSchema';


// export const fetchPlayerData = createAsyncThunk<Partial<PlayerSchema>, void, ThunkConfig<string>>('player/fetchPlayerData',
	// async (_, thunkAPI) => {
		// const { rejectWithValue, extra, dispatch } = thunkAPI;

		// try {
		// 	const res = await extra.api.get<Partial<PlayerSchema>>('/player', {
		// 		headers: {
		// 			withCredentials: true,
		// 			'Access-Control-Allow-Origin': '*',
		// 			'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
		// 			'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
		// 		},
		// 	});
		// 	dispatch(playerAction.offLoadingData());
		// 	return res.data;
		// } catch (error) {
		// 	return rejectWithValue('error');
		// }
	// });