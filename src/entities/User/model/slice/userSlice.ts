/* eslint-disable no-underscore-dangle */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { UserSchema } from '../types/user';

import { authByCookie } from '../service/AuthByCookie';

const initialState: UserSchema = {
	username: '',
	isLoading: true,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserData: (state, action: PayloadAction<UserSchema>) => {
			state.username = action.payload.username;
		},
		logoutUserData: (state) => {
			state.username = '';
		},
		onLoadingUser: (state) => {
			state.isLoading = true;
		},
		offLoadingUser: (state) => {
			state.isLoading = false;
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
