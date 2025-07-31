import { StateSchema } from '@/shared/lib/state';

export const getIsShowTrackModal = (state: StateSchema) => state?.playlistpage?.isShowTrackModal;
export const getIsLoadingData = (state: StateSchema) => {
	if (state?.playlistpage?.isLoadingData === undefined) return true;
	return state?.playlistpage?.isLoadingData;
};
export const getIsLoadingTrackes = (state: StateSchema) => {
	if (state?.playlistpage?.isLoadingTrackes === undefined) return true;
	return state?.playlistpage?.isLoadingTrackes;
};
export const getTrackesList = (state: StateSchema) => state?.playlistpage?.album?.trackes_id;
export const getAlbum = (state: StateSchema) => state?.playlistpage?.album;
// export const getTrackes = (state: StateSchema) => state?.playlistPage?.trackes;
export const getAlbumCreationDate = (state: StateSchema) => state?.playlistpage?.album?.creationDate