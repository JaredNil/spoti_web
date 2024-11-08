import { StateSchema } from 'app/providers/StoreProvider';
import { AlbumInterface } from 'entities/Album';

export const getIsShowTrackModal = (state: StateSchema) => state.playListPage?.isShowTrackModal;
export const getIsLoadingData = (state: StateSchema) => {
	if (state.playListPage?.isLoadingData === undefined) return true;
	return state.playListPage?.isLoadingData;
};
export const getIsLoadingTrackes = (state: StateSchema) => {
	if (state.playListPage?.isLoadingTrackes === undefined) return true;
	return state.playListPage?.isLoadingTrackes;
};
export const getTrackesList = (state: StateSchema) => state.playListPage?.album?.trackes_id;
export const getAlbum = (state: StateSchema) => state.playListPage?.album;
export const getTrackes = (state: StateSchema) => state.playListPage?.trackes;
export const getAlbumCreationDate = (state: StateSchema) => state.playListPage?.album?.creationDate