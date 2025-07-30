 
import { PayloadAction, createSlice } from '@reduxjs/toolkit';


import { UserSchema } from '../types/user';
// import { logoutByServer } from 'entities/User/model/service/logoutByServer';
// import { authByCookie } from '../service/authByCookie'; // NOT WORKING IN DEMO
// import { authByUsername } from '../service/authByUsername';

const initialState: UserSchema = {
	username: 'Demo',
	isLoading: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserData: (state, action: PayloadAction<UserSchema>) => {
			state.username = action.payload.username;
			state.isLoading = action.payload.isLoading;
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
		// DEMO NOT WORKING
		// builder.addCase(authByCookie.pending, (state) => {
		// 	state.isLoading = true;
		// });
		// builder.addCase(authByCookie.fulfilled, (state, action) => {
		// 	state.username = action.payload.username;
		// 	state.isLoading = false;
		// });
		// builder.addCase(authByCookie.rejected, (state, action) => {
		// 	state.isLoading = false;
		// });

		// builder.addCase(authByUsername.pending, (state) => {
		// 	state.isLoading = true;
		// });
		// builder.addCase(authByUsername.fulfilled, (state, action) => {
		// 	console.log('authByUsername.fulfilled');

		// 	state.username = action.payload.username;
		// 	state.isLoading = false;
		// });
		// builder.addCase(authByUsername.rejected, (state) => {
		// 	console.log('authByUsername.rejected');

		// 	state.username = '';
		// 	state.isLoading = false;
		// });

		// builder.addCase(logoutByServer.pending, (state) => {
		// 	console.log('logoutByServer.pending');
		// 	state.isLoading = true;
		// });
		// builder.addCase(logoutByServer.fulfilled, (state) => {
		// 	console.log('logoutByServer.fulfilled');

		// 	state.username = '';
		// 	state.isLoading = false;
		// });
		// builder.addCase(logoutByServer.rejected, (state) => {
		// 	console.log('logoutByServer.rejected');

		// 	state.username = '';
		// 	state.isLoading = false;
		// });
	},
});

export const { actions: userAction } = userSlice;
export const { reducer: userReducer } = userSlice;
