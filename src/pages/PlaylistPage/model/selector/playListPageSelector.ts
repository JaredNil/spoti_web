import { StateSchema } from 'app/providers/StoreProvider';

export const getIsShowTrackModal = (state: StateSchema) => state.playListPage?.isShowTrackModal;
export const getIsLoadingData = (state: StateSchema) => {
	if (state.playListPage?.isLoadingData === undefined) return true;
	return state.playListPage?.isLoadingData;
};
