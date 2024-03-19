import { MainpageSchema } from '../types/MainpageSchema';

export const getIsLoadingPage = (state: MainpageSchema) => state.isLoading || true;
