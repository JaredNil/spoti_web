import { createSlice } from '@reduxjs/toolkit';
import { fetchCommonAlbums, fetchUserAlbums } from 'entities/Album';
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
	},
});

export const { actions: mainpageAction } = mainpageSlice;
export const { reducer: mainpageReducer } = mainpageSlice;
