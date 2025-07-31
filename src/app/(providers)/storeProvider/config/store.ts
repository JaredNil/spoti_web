
import { Action, configureStore } from '@reduxjs/toolkit';

import { createReducerManager } from './reducerManager';
import { StoreConfig } from './types';

import { userReducer } from '@/entities/user';

export const staticReducers = {
  user: userReducer,
};

export function createStore(config: StoreConfig) {
  const reducerManager = createReducerManager(staticReducers);

  const store = configureStore({
    preloadedState: config?.initialState,
    reducer: (state, action) => {
      return reducerManager.reduce(state, action);
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(config.middleware || []),
    devTools: true,
  });

  (store as any).reducerManager = reducerManager;

  return store;
}
