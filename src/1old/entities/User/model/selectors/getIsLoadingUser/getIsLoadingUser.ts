import { StateSchema } from 'app/providers/StoreProvider';

export const getIsLoadingUser = (state: StateSchema) => state.user.isLoading;
