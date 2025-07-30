import { StateSchema } from 'app/providers/StoreProvider';

export const getUsername = (state: StateSchema) => state.user.username;
