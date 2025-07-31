import { StateSchema } from "@/shared/lib/state";

export const getIsLoadingData = (state: StateSchema) => state.homepage?.isLoadingData || false;
export const getErrorLoadingData = (state: StateSchema) => state.homepage?.error || '';
