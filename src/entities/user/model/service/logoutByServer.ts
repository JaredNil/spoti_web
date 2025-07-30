// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { ThunkConfig } from 'app/providers/StoreProvider';

// import { UserSchema } from '../types/user';

// export const logoutByServer = createAsyncThunk<UserSchema, void, ThunkConfig<string>>('user/logout', async (_, thunkAPI) => {
// 	const { rejectWithValue, extra } = thunkAPI;

// 	console.log('logoutByServer');
// 	try {
// 		const res = await extra.api.post('/auth/signout', {
// 			headers: {
// 				withCredentials: 'include',
// 				'X-Powered-By': 'Express',
// 				'Access-Control-Allow-Origin': '*',
// 				'Access-Control-Allow-Credentials': true,
// 				'cache-control': 'cash',
// 				'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
// 				'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
// 			},
// 		});

// 		if (!res.data) {
// 			throw new Error();
// 		}

// 		return res.data;
// 	} catch (error) {
// 		return rejectWithValue('error');
// 	}
// });
