import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { PlayerSchema } from '../types/PlayerSchema';

const initialState: PlayerSchema = {
	isLoading: true,
	error: undefined,
	isActivePlayer: true,

	volume: 100,

	target: [],
	queue: [],

	isRun: false 
};

export const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		onLoadingData: (state) => { state.isLoading = true },
		offLoadingData: (state) => { state.isLoading = false },
		onActivePlayer: (state) => { state.isActivePlayer = true },
		offActivePlayer: (state) => { state.isActivePlayer = false },
		setVolume: (state, action: PayloadAction<number>) => {
			state.volume = action.payload
		}
	},
	extraReducers: (builder) => {
		// builder.addCase(fetchUserAlbums.fulfilled, (state, action: PayloadAction<AlbumsCollection>) => {
		// 	state.isLoading = false;
		// });
		// builder.addCase(fetchCommonAlbums.fulfilled, (state, action: PayloadAction<AlbumsCollection>) => {
		// 	state.isLoading = false;
		// });
	}
});

export const { actions: playerAction } = playerSlice;
export const { reducer: playerReducer } = playerSlice;


