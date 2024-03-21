import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { UserSchema } from '../types/user';

interface AuthByUsernameProps {
	authUsername: string;
	authPassword: string;
}

export const authByUsername = createAsyncThunk<UserSchema, AuthByUsernameProps, ThunkConfig<string>>(
	'user/authByUsername',
	async ({ authUsername, authPassword }, thunkAPI) => {
		const { rejectWithValue, extra, dispatch } = thunkAPI;
		try {
			const res = await extra.api.post(
				'/auth/signup',
				{
					username: authUsername,
					password: authPassword,
				},
				{
					headers: {
						withCredentials: 'include',

						'X-Powered-By': 'Express',
						'Access-Control-Allow-Origin': '*',
						'Access-Control-Allow-Credentials': true,
						'cache-control': 'cash',
						'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
						'Access-Control-Allow-Headers':
							'Content-Type, Authorization, X-Requested-With',
					},
				}
			);

			if (!res.data) {
				throw new Error();
			}

			return res.data;
		} catch (error) {
			return rejectWithValue('error');
		}
	}
);
