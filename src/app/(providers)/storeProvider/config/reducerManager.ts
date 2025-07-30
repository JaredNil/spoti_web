import { combineReducers } from '@reduxjs/toolkit';
import { ReducerManager, StaticReducers } from './types';

export function createReducerManager(staticReducers: StaticReducers): ReducerManager {
  const reducers = { ...staticReducers };
  let combinedReducer = combineReducers(reducers);

  return {
    getReducerMap: () => reducers,
    reduce: (state, action) => combinedReducer(state, action),
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
      delete reducers[key];
      combinedReducer = combineReducers(reducers);
    },
    has: (key) => !!reducers[key],
  };
}
