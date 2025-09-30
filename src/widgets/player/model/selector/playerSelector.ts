import { createSelector } from '@reduxjs/toolkit'

import { StateSchema } from '@/shared/lib/state'

export const getIsLoading = (state: StateSchema) => state.player.isLoading
export const getIsActivePlayer = (state: StateSchema) =>
	state.player.isActivePlayer
export const getVolumePlayer = (state: StateSchema) => state.player.volume

export const getIsRunPlayer = (state: StateSchema) => state.player.isRun
export const getIsLoadingTrack = (state: StateSchema) =>
	state.player.isLoadingTrack

export const getTrack = (state: StateSchema) => state.player.track
export const getNextTrack = (state: StateSchema) => state.player.nextTrack

export const getPlayerLineData = createSelector(
	(state: StateSchema) => state.player.duration,
	(state: StateSchema) => state.player.timer,
	(state: StateSchema) => state.player.progress,
	(duration, timer, progress) => ({ duration, timer, progress })
)

export const getPlayerQueue = (state: StateSchema) => state.player.queue
export const getPlayerNativeQueue = (state: StateSchema) => state.player.native
export const getPlayerTarget = (state: StateSchema) => state.player.target
