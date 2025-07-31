import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { SearchpageSchema } from '../types/searchpageSchema';

const initialState: SearchpageSchema = {
	isLoading: true,
	error: undefined,
};

export const searchpageSlice = createSlice({
	name: 'searchpage',
	initialState,
	reducers: {
		onLoadingPage: (state) => {
			state.isLoading = true;
		},
		offLoadingPage: (state) => {
			state.isLoading = false;
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

export const { actions: searchpageAction } = searchpageSlice;
export const { reducer: searchpageReducer } = searchpageSlice;
