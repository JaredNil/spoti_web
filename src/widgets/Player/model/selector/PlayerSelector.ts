import { StateSchema } from "app/providers/StoreProvider";

export const getIsLoading = (state: StateSchema) => state.player.isLoading;
export const getIsActivePlayer = (state: StateSchema) => state.player.isActivePlayer;
export const getVolumePlayer = (state: StateSchema) => state.player.volume;
