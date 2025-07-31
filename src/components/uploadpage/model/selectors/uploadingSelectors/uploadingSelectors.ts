import { StateSchema } from "@/shared/lib/state";

export const getUploadingList = (state: StateSchema) => state?.uploadpage?.isLoading;
export const getIsDragEvent = (state: StateSchema) => state?.uploadpage?.isDragEvent || false;
