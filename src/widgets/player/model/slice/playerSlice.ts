import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { PlayerSchema } from '../types/playerSchema'

import { Track } from '@/shared/api'
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
			cacheHandle.set('volume', action.payload)
		},
		setNative: (state, action: PayloadAction<number[]>) => {
			state.native = action.payload
			cacheHandle.set('native', action.payload)
		},
		setQueue: (state, action: PayloadAction<number[]>) => {
			state.native = action.payload
			state.queue = state.native
			cacheHandle.set('queue', action.payload)
			cacheHandle.set('native', action.payload)
		},
		setTarget: (state, action: PayloadAction<number>) => {
			state.target = action.payload
			cacheHandle.set('targetQueue', action.payload)
		},
		setTimer: (state, action: PayloadAction<number>) => {
			state.timer = action.payload
			cacheHandle.set('timer', action.payload)
		},
		setDuration: (state, action: PayloadAction<number>) => {
			state.duration = action.payload
		},
		setProgress: (state, action: PayloadAction<number>) => {
			state.progress = action.payload
			cacheHandle.set('progress', action.payload)
		},
		setIsRun: (state, action: PayloadAction<boolean>) => {
			state.isRun = action.payload
		},
		setTrack: (state, action: PayloadAction<Track>) => {
			state.track = action.payload
		},
	},
})

export const { actions: playerAction } = playerSlice
export const { reducer: playerReducer } = playerSlice
