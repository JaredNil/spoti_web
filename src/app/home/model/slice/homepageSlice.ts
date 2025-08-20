import { createSlice } from '@reduxjs/toolkit'

import { HomepageSchema } from '../types/homepageSchema'

const initialState: HomepageSchema = {
	isLoadingData: false,
	error: '',
}

export const homepageSlice = createSlice({
	name: 'homepage',
	initialState,
	reducers: {
		onLoadingData: (state) => {
			state.isLoadingData = true
		},
		offLoadingData: (state) => {
			state.isLoadingData = false
		},
	},
	extraReducers: (builder) => {
		// builder.addCase(fetchUserAlbums.pending, (state, action) => {
		// 	state.isLoadingData = true;
		// });
		// builder.addCase(fetchCommonAlbums.pending, (state, action) => {
		// 	state.isLoadingData = true;
		// });
		// builder.addCase(fetchUserAlbums.fulfilled, (state, action) => {
		// 	state.isLoadingData = false;
		// });
		// builder.addCase(fetchCommonAlbums.fulfilled, (state, action) => {
		// 	state.isLoadingData = false;
		// });
		// builder.addCase(fetchCommonAlbums.rejected, (state, action) => {
		// state.error = 'Ошибка загрузки данных с сервера. Перезагрузите страницу или зайдите позже.';
		// toastr.error('Перезагрузите страницу или зайдите позже', 'Ошибка соединения', errorServerToastr);
		// state.isLoadingData = false;
	},
})

export const { actions: homepageAction } = homepageSlice
export const { reducer: homepageReducer } = homepageSlice
