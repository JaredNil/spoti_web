import { StateSchema } from "app/providers/StoreProvider";

export const getIsLoading = (state: StateSchema) => state.player.isLoading;
export const getIsActivePlayer = (state: StateSchema) => state.player.isActivePlayer;
export const getVolumePlayer = (state: StateSchema) => state.player.volume;

export const getIsRunPlayer = (state: StateSchema) => state.player.isRun
export const getIsLoadingTrack = (state: StateSchema) => state.player.isLoadingTrack

export const getTrack = ( state: StateSchema) => state.player.track

export const getPlayerLineData = (state: StateSchema) => { return {
    duration: state.player.duration, 
    timer: state.player.timer, 
    progress: state.player.progress
} }
export const getPlayerQueue = (state: StateSchema) => state.player.queue
export const getPlayerTarget = (state: StateSchema) => state.player.target
