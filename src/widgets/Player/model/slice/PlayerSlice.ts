import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Track } from "entities/Track";

import { PlayerSchema } from '../types/PlayerSchema';
import { fetchTrackData } from '../service/fetchTrackData';
import { randomUUID } from 'crypto';

const initialState: PlayerSchema = {
	isLoading: true,
	error: undefined,
	isActivePlayer: false,

	volume: 100,

	target: null,
	queue: [],
	native: [],

	hash: '',
	track: null,
	isRun: false,
	isLoadingTrack: true, 
};
export const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		onLoadingData: (state) => { state.isLoading = true },
		offLoadingData: (state) => { state.isLoading = false },
		onActivePlayer: (state) => { state.isActivePlayer = true },
		offActivePlayer: (state) => { state.isActivePlayer = false },
		setHash: (state, action: PayloadAction<string>) => { state.hash = action.payload },
		setVolume: (state, action: PayloadAction<number>) => {
			state.volume = action.payload
		},
		setQueue: (state, action: PayloadAction<number[]>) => {
			state.native = action.payload
			state.queue = state.native
		},
		setTarget: (state, action: PayloadAction<number>) => {
			state.target = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchTrackData.fulfilled, (state, action: PayloadAction<Track>) => {
			state.isLoadingTrack = false;
			state.track = action?.payload;
			state.isRun = true;

		})
		builder.addCase(fetchTrackData.rejected, (state) => {
			state.isLoadingTrack = true;
			state.isRun = false;
			// handling new notification
		});
		// builder.addCase(fetchCommonAlbums.fulfilled, (state, action: PayloadAction<AlbumsCollection>) => {
		// 	state.isLoading = false;
		// });
	}
});

export const { actions: playerAction } = playerSlice;
export const { reducer: playerReducer } = playerSlice;


