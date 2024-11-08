import { createSlice } from '@reduxjs/toolkit';
import { PlayListPageSchema } from '../types/PlaylistPageSchema';
import { fetchPlaylistTrackes } from '../service/fetchPlaylistTrackes';
import { errorServerToastr } from 'shared/config/toastr/toastr.config';
import { fetchPlaylistData } from '../service/fetchPlaylistData';

const initialState: PlayListPageSchema = {
	isLoadingData: true,
	isLoadingTrackes: true,
	error: '',
	isShowTrackModal: false,
	album: null,
	album_id: null,
	trackes: []
};

export const playListPageSlice = createSlice({
	name: 'playlistpage',
	initialState,
	reducers: {
		showTrackModal: (state) => {
			state.isShowTrackModal = true;
		},
		removeTrackModal: (state) => {
			state.isShowTrackModal = false;
		},
		onLoadingData: (state) => {
			state.isLoadingData = true;
		},
		offLoadingData: (state) => {
			state.isLoadingData = false;
		},
		albumNotFound: (state) =>{
			state.isLoadingData = false,
			state.album = null
		},
		// of dev
		toggleLoadingData: (state) => {
			state.isLoadingData = !state.isLoadingData;
		},

	},
	extraReducers: (builder) => {
		builder.addCase(fetchPlaylistData.pending, (state, action) => {
			state.isLoadingData = true;
		});
		builder.addCase(fetchPlaylistData.fulfilled, (state, action) => {
			state.isLoadingData = false;
			state.album = action.payload;
		});
		builder.addCase(fetchPlaylistData.rejected, (state, action) => {
			toastr.error('Данные плейлиста не найдены. Перезагрузите страницу или зайдите позже', 'Ошибка соединения', errorServerToastr);
			state.album = null;
			state.isLoadingData = false;
		});

		builder.addCase(fetchPlaylistTrackes.pending, (state, action) => {
			state.isLoadingTrackes = true
			state.trackes = []
		});
		builder.addCase(fetchPlaylistTrackes.fulfilled, (state, action) => {
			state.isLoadingTrackes = false
			state.trackes = action.payload
		});
		builder.addCase(fetchPlaylistTrackes.rejected, (state, action) => {
			state.isLoadingTrackes = false
			state.trackes = []
			toastr.error('Данные о треках из плейлиста не найдены. Перезагрузите страницу или зайдите позже', 'Ошибка соединения', errorServerToastr);
		});
	},
});

export const { actions: playListPageAction } = playListPageSlice;
export const { reducer: playListPageReducer } = playListPageSlice;
