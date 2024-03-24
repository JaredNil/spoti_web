import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchAlbums } from 'entities/Album/model/service/fetchAlbums';
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
		builder.addCase(fetchAlbums.fulfilled, (state, action) => {
			console.log('fetchAlbums.fulfilled');
			state.isLoadingData = false;
		});
	},
});

export const { actions: mainpageAction } = mainpageSlice;
export const { reducer: mainpageReducer } = mainpageSlice;
