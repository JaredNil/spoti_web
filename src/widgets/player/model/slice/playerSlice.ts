import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { fetchTrackData } from '../service/fetchTrackData'
import { PlayerSchema } from '../types/playerSchema'

import { Track } from '@/shared/api/track'

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

	timer: 0,
	duration: 0,
	progress: 0,
}
export const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		onLoadingData: (state) => {
			state.isLoading = true
		},
		offLoadingData: (state) => {
			state.isLoading = false
		},
		onActivePlayer: (state) => {
			state.isActivePlayer = true
		},
		offActivePlayer: (state) => {
			state.isActivePlayer = false
		},
		setHash: (state, action: PayloadAction<string>) => {
			state.hash = action.payload
		},
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
		setTimer: (state, action: PayloadAction<number>) => {
			state.timer = action.payload
		},
		setDuration: (state, action: PayloadAction<number>) => {
			state.duration = action.payload
		},
		setProgress: (state, action: PayloadAction<number>) => {
			state.progress = action.payload
		},
		setIsRun: (state, action: PayloadAction<boolean>) => {
			state.isRun = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(
			fetchTrackData.fulfilled,
			(state, action: PayloadAction<Track>) => {
				state.isLoadingTrack = false
				state.track = action?.payload
				state.isRun = true
			}
		)
		builder.addCase(fetchTrackData.rejected, (state) => {
			state.isLoadingTrack = true
			state.isRun = false
			// handling new notification
		})
	},
})

export const { actions: playerAction } = playerSlice
export const { reducer: playerReducer } = playerSlice
