import { StateSchema } from 'app/providers/StoreProvider';

export const getUploadingList = (state: StateSchema) => state.uploading?.uploading;
export const getIsDragEvent = (state: StateSchema) => state.uploading?.isDragEvent || false;
