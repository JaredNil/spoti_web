import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { PlayerSchema } from '../types/playerSchema'

import { ThunkConfig } from '@/app/(providers)/storeProvider/config/store'
import { Track, TrackesHash } from '@/shared/api'
import { cacheHandle } from '@/shared/lib/localstorage'

const initialState: PlayerSchema = {
	isLoading: true,
	error: undefined,
	isActivePlayer: false,

	volume: 100,

	target: undefined,
	queue: [],
	native: [],

	hash: '',
	track: undefined,
	nextTrack: undefined,
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
		onLoadingTrack: (state) => {
			state.isLoading = true
		},
		offLoadingTrack: (state) => {
			state.isLoading = false
		},
		onActivePlayer: (state) => {
			state.isActivePlayer = true
			cacheHandle.set('isActivePlayer', true)
		},
		offActivePlayer: (state) => {
			state.isActivePlayer = false
			cacheHandle.set('isActivePlayer', false)
		},
		setHash: (state, action: PayloadAction<string>) => {
			state.hash = action.payload
		},
		setVolume: (state, action: PayloadAction<number>) => {
			state.volume = action.payload
			if (action.payload) cacheHandle.set('volume', action.payload)
		},
		setNative: (state, action: PayloadAction<TrackesHash>) => {
			state.native = action.payload
			if (action.payload) cacheHandle.set('native', action.payload)
		},
		setQueue: (state, action: PayloadAction<TrackesHash>) => {
			state.native = action.payload
			state.queue = state.native
			if (action.payload) cacheHandle.set('native', action.payload)
			if (action.payload) cacheHandle.set('queue', state.native)
		},
		setTarget: (state, action: PayloadAction<number>) => {
			state.target = action.payload
			if (action.payload) cacheHandle.set('targetQueue', action.payload)
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
		setTrack: (state, action: PayloadAction<Track | null>) => {
			if (action.payload) {
				state.track = action.payload
				cacheHandle.set('track', action.payload)
			}
		},
		setNextTrack: (state, action: PayloadAction<Track | null>) => {
			if (action.payload) {
				state.nextTrack = action.payload
			}
		},
		setTrackPause: (state, action: PayloadAction<Track>) => {
			state.track = action.payload
			state.isRun = false
		},
	},
})

export const { actions: playerAction } = playerSlice
export const { reducer: playerReducer } = playerSlice

export const setAsyncTrack = createAsyncThunk<void, Track, ThunkConfig>(
	'player/setTrackPause',
	async (track, { dispatch }) => {
		await new Promise<void>(() =>
			setTimeout(() => dispatch(playerAction.setTrackPause(track)), 10)
		)
	}
)
export const setAsyncVolume = createAsyncThunk<void, number, ThunkConfig>(
	'player/setTrackVolume',
	async (newVolume, { dispatch }) => {
		await new Promise<void>(() =>
			setTimeout(() => dispatch(playerAction.setVolume(newVolume)), 100)
		)
	}
)
