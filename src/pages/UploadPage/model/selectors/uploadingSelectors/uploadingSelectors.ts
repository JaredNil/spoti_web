import { StateSchema } from 'app/providers/StoreProvider';

export const getUploadingList = (state: StateSchema) => state.uploading.uploading;
