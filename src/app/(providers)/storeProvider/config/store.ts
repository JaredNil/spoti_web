
import { Action, configureStore } from '@reduxjs/toolkit';

import { createReducerManager } from './reducerManager';
import { StoreConfig } from './types';

import { userReducer } from '@/entities/user';
import { $api, rtkApi, ThunkExtraArg } from '@/shared/api/rtkApi';

export const staticReducers = {
  user: userReducer,

  [rtkApi.reducerPath]: rtkApi.reducer,
};

export function createStore(config: StoreConfig) {
  const reducerManager = createReducerManager(staticReducers);

  const extraArg: ThunkExtraArg = {
    api: $api,
    // navigate: config.navigate,
  };

  const store = configureStore({
    preloadedState: config?.initialState,
    reducer: (state, action) => {
      return reducerManager.reduce(state, action);
    },
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware({
    //     thunk: {
    //       extraArgument: extraArg,
    //     },
    //   }).concat(config.middleware || []),
    devTools: true,
  });

  (store as any).reducerManager = reducerManager;

  return store;
}
