
import { combineReducers, EnhancedStore } from '@reduxjs/toolkit';

import { ReducerList, ReducerManager, StaticReducers } from './types';

let keysToRemove: string[] = [];

// export const REDUCER_ADD = 'REDUCER_ADD';
// export const REDUCER_REMOVE = 'REDUCER_REMOVE';

export function createReducerManager(staticReducers: StaticReducers): ReducerManager {
  const reducers = { ...staticReducers };
  let combinedReducer = combineReducers(reducers);

  return {
    getReducerMap: () => reducers,
    reduce: (state, action) => {
      state = { ...state };
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          delete state[key];
        });
        keysToRemove = [];
      }
      return combinedReducer(state, action)},
    add: (key, reducer) => {
      if (!key || reducers[key]) {
        return;
      }
      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },
    remove: (key) => {
      if (!key || !reducers[key]) {
        return;
      }
      keysToRemove.push(key);
      delete reducers[key];
      combinedReducer = combineReducers(reducers);
      
    },
    has: (key) => !!reducers[key],
  };
}

export interface ReduxStoreWithManager extends EnhancedStore {
	reducerManager: ReducerManager;
}