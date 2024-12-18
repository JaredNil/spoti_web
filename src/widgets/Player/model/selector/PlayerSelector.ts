import { StateSchema } from "app/providers/StoreProvider";

export const getIsLoading = (state: StateSchema) => state.player.isLoading;
export const getIsActivePlayer = (state: StateSchema) => state.player.isActivePlayer;
export const getVolumePlayer = (state: StateSchema) => state.player.volume;

export const getIsRunPlayer = (state: StateSchema) => state.player.isRun
export const getIsLoadingTrack = (state: StateSchema) => state.player.isLoadingTrack

export const getTrack = ( state: StateSchema) => state.player.track
