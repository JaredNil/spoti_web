/* eslint-disable no-underscore-dangle */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { authByUsername } from 'features/Auth';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {
	username: undefined,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<UserSchema>) => {
			state.username = action.payload.username;
		},
		// logout: (state) => {
		// 	state.username = 'global';
		// },
	},
	extraReducers: (builder) => {
		builder.addCase(authByUsername.pending, (state) => {
			console.log('authByUsername pending');
			// state.error = undefined;
			// state.isLoading = true;
		});
		builder.addCase(authByUsername.fulfilled, (state) => {
			console.log('authByUsername fulfilled');

			// state.isLoading = false;
		});
		builder.addCase(authByUsername.rejected, (state, action) => {
			console.log('authByUsername rejected');
			// state.isLoading = false;
			// state.error = action.error;
		});
	},
});

export const { actions: userAction } = userSlice;
export const { reducer: userReducer } = userSlice;
