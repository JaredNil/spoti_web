import { createSlice } from '@reduxjs/toolkit'

import { fetchPlaylistData } from '../service/fetchPlaylistData'
import { playlistpageSchema } from '../types/playlistpageSchema'

// import { fetchPlaylistData } from '../service/fetchPlaylistData';
// import { fetchPlaylistTrackes } from '../service/fetchPlaylistTrackes';
// import { playlistPageSchema } from '../types/playlistPageSchema';

const initialState: playlistpageSchema = {
	isLoadingData: true,
	isLoadingTrackes: true,
	error: '',
	isShowTrackModal: false,
	album: null,
	album_id: null,
	// trackes: []
}

export const playlistPageSlice = createSlice({
	name: 'playlistPage',
	initialState,
	reducers: {
		showTrackModal: (state) => {
			state.isShowTrackModal = true
		},
		removeTrackModal: (state) => {
			state.isShowTrackModal = false
		},
		onLoadingData: (state) => {
			state.isLoadingData = true
		},
		offLoadingData: (state) => {
			state.isLoadingData = false
		},
		albumNotFound: (state) => {
			state.isLoadingData = false
			state.album = null
		},
		// of dev
		toggleLoadingData: (state) => {
			state.isLoadingData = !state.isLoadingData
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPlaylistData.pending, (state, action) => {
			state.isLoadingData = true
		})
		builder.addCase(fetchPlaylistData.fulfilled, (state, action) => {
			state.isLoadingData = false
			console.log(action.payload)
			// state.album = action.payload;
		})
		builder.addCase(fetchPlaylistData.rejected, (state, action) => {
			// toastr.error('Данные плейлиста не найдены. Перезагрузите страницу или зайдите позже', 'Ошибка соединения', errorServerToastr);
			state.album = null
			state.isLoadingData = false
		})

		// builder.addCase(fetchPlaylistTrackes.pending, (state, action) => {
		// 	state.isLoadingTrackes = true
		// 	state.trackes = []
		// });
		// builder.addCase(fetchPlaylistTrackes.fulfilled, (state, action) => {
		// 	state.isLoadingTrackes = false
		// 	state.trackes = action.payload
		// });
		// builder.addCase(fetchPlaylistTrackes.rejected, (state, action) => {
		// 	state.isLoadingTrackes = false
		// 	state.trackes = []
		// 	toastr.error('Данные о треках из плейлиста не найдены. Перезагрузите страницу или зайдите позже', 'Ошибка соединения', errorServerToastr);
		// });
	},
})

export const { actions: playlistPageAction } = playlistPageSlice
export const { reducer: playlistPageReducer } = playlistPageSlice
