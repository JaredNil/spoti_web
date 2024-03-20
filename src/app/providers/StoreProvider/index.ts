import StoreProvider from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';

export { StoreProvider, createReduxStore, AppDispatch };

export type { StateSchema, ReduxStoreWithManager, ThunkExtraArg, ThunkConfig } from './config/StateSchema';
