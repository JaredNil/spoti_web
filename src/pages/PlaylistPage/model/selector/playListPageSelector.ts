import { StateSchema } from 'app/providers/StoreProvider';

export const getIsShowTrackModal = (state: StateSchema) => state.playlistPage?.isShowTrackModal;
export const getIsLoadingData = (state: StateSchema) => {
	if (state.playlistPage?.isLoadingData === undefined) return true;
	return state.playlistPage?.isLoadingData;
};
export const getIsLoadingTrackes = (state: StateSchema) => {
	if (state.playlistPage?.isLoadingTrackes === undefined) return true;
	return state.playlistPage?.isLoadingTrackes;
};
export const getTrackesList = (state: StateSchema) => state.playlistPage?.album?.trackes_id;
export const getAlbum = (state: StateSchema) => state.playlistPage?.album;
export const getTrackes = (state: StateSchema) => state.playlistPage?.trackes;
export const getAlbumCreationDate = (state: StateSchema) => state.playlistPage?.album?.creationDate;
