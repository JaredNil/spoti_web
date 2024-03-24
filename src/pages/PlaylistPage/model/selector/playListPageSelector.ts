import { StateSchema } from 'app/providers/StoreProvider';

export const getIsShowTrackModal = (state: StateSchema) => state.playListPage?.isShowTrackModal;
export const getIsLoadingData = (state: StateSchema) => state.playListPage?.isLoadingData;
