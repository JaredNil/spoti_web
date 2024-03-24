import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PlayListPageSchema } from '../types/PlayListPageSchema';

const initialState: PlayListPageSchema = {
	isLoadingData: true,
	error: '',
	isShowTrackModal: false,
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
	},
	extraReducers: (builder) => {},
});

export const { actions: playListPageAction } = playListPageSlice;
export const { reducer: playListPageReducer } = playListPageSlice;
