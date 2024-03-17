/* eslint-disable no-underscore-dangle */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { authByCookie } from 'features/Auth';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {
	username: '',
	isLoading: false,
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
	},
	extraReducers: (builder) => {
		builder.addCase(authByCookie.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(authByCookie.fulfilled, (state, action) => {
			state.username = action.payload.username;
			state.isLoading = false;
			state.isInit = true;
		});
		builder.addCase(authByCookie.rejected, (state) => {
			// state.isLoading = false;
			// state.username = '';
		});
	},
});

export const { actions: userAction } = userSlice;
export const { reducer: userReducer } = userSlice;
