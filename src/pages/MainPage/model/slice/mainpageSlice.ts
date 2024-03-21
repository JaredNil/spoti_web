import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MainpageSchema } from '../types/MainpageSchema';

const initialState: MainpageSchema = {
	isLoadingData: true,
	error: '',
};

export const mainpageSlice = createSlice({
	name: 'mainpage',
	initialState,
	reducers: {
		onLoadingData: (state) => {
			state.isLoadingData = true;
		},
		offLoadingData: (state) => {
			state.isLoadingData = false;
		},
	},
	extraReducers: (builder) => {
		// builder.addCase(authByCookie.pending, (state) => {
		// 	state.isLoading = true;
		// });
		// builder.addCase(authByCookie.fulfilled, (state, action) => {
		// 	console.log('authByCookie.fulfilled');
		// 	state.username = action.payload.username;
		// 	state.isLoading = false;
		// });
		// builder.addCase(authByCookie.rejected, (state, action) => {
		// 	console.log('authByCookie.rejected');
		// 	state.isLoading = false;
		// });
	},
});

export const { actions: mainpageAction } = mainpageSlice;
export const { reducer: mainpageReducer } = mainpageSlice;
