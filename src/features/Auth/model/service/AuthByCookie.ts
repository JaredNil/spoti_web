import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { UserSchema, userAction } from 'entities/User';
import { STORAGE_TOKEN_SPOTIFY } from 'shared/config/localstorage';

interface AuthByUsernameProps {
	token: string;
}

export const authByCookie = createAsyncThunk<UserSchema, void, ThunkConfig<string>>('auth/authByUsername', async (_, thunkAPI) => {
	const { rejectWithValue, extra, dispatch } = thunkAPI;
	try {
		const token = localStorage.getItem(STORAGE_TOKEN_SPOTIFY);

		if (!token) {
			dispatch(userAction.setAuthData({ username: undefined }));
		}

		const res = await extra.api.post<UserSchema>(
			'/auth/session',
			{ token },
			{
				headers: {
					withCredentials: true,
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
					'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
				},
			}
		);

		if (!res.data) {
			throw new Error();
		}

		dispatch(userAction.setAuthData(res.data));

		return res.data;
	} catch (error) {
		return rejectWithValue('error');
	}
});
