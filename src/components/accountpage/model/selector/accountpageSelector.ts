import { StateSchema } from '@/shared/lib/state';

export const getIsLoadingPage = (state: StateSchema) => state?.accountPage?.isLoading || true;
