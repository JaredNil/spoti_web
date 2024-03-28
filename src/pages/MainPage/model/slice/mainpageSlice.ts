import toastr from 'toastr';
import { createSlice } from '@reduxjs/toolkit';
import { fetchCommonAlbums, fetchUserAlbums } from 'entities/Album';
import { errorServerToastr } from 'shared/config/toastr/toastr.config';
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
		builder.addCase(fetchUserAlbums.fulfilled, (state, action) => {
			console.log('fetchUserAlbums.fulfilled');
			state.isLoadingData = false;
		});
		builder.addCase(fetchCommonAlbums.fulfilled, (state, action) => {
			console.log('fetchCommonAlbums.fulfilled');
			state.isLoadingData = false;
		});
		builder.addCase(fetchCommonAlbums.rejected, (state, action) => {
			console.log('fetchCommonAlbums.rejected');
			state.error = 'Ошибка загрузки данных с сервера. Перезагрузите страницу или зайдите позже.';

			toastr.error('Перезагрузите страницу или зайдите позже', 'Ошибка соединения', errorServerToastr);

			state.isLoadingData = false;
		});
	},
});

export const { actions: mainpageAction } = mainpageSlice;
export const { reducer: mainpageReducer } = mainpageSlice;
