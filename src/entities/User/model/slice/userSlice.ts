/* eslint-disable no-underscore-dangle */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { authByCookie } from 'features/Auth';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {
	username: '',
	isLoading: true,
	isInit: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<UserSchema>) => {
			state.username = action.payload.username;
		},
		initAuthData: (state) => {
			state.isInit = true;
		},

		logout: (state) => {
			state.username = '';
		},
		loading: (state) => {
			state.isLoading = !state.isLoading;
		},
		login: (state) => {
			state.username = 'TEST';
		},
	},
	extraReducers: (builder) => {
		builder.addCase(authByCookie.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(authByCookie.fulfilled, (state, action) => {
			console.log('authByCookie.fulfilled');

			state.username = action.payload.username;
			state.isLoading = false;
		});
		builder.addCase(authByCookie.rejected, (state, action) => {
			console.log('authByCookie.rejected');
			state.isLoading = false;
		});
	},
});

export const { actions: userAction } = userSlice;
export const { reducer: userReducer } = userSlice;
