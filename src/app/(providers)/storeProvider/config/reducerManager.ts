/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
    AnyAction,
    combineReducers,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';

import { MountedReducers, ReducerManager } from './types';

import { StateSchema } from '@/shared/lib/state';

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: string[] = [];
    
    const mountedReducers: MountedReducers = {};
    Object.keys(reducers).forEach((key) => {
        mountedReducers[key as string] = true;
    });

    return {
        getReducerMap: () => reducers,
        getMountedReducers: () => mountedReducers,
        reduce: (state: StateSchema | undefined, action: AnyAction) => {
            if (!state) return
            if (state && keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    if (state && state[key])  delete state[key];
                });
                keysToRemove = [];
            }
            // @ts-expect-error
            return combinedReducer(state, action);
        },
        add: (key: string, reducer: Reducer) => {
           
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            mountedReducers[key] = true;

            combinedReducer = combineReducers(reducers);
        },
        remove: (key: string) => {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            mountedReducers[key] = false;

            combinedReducer = combineReducers(reducers);
        },
    };
}




// import { combineReducers } from '@reduxjs/toolkit';

// import { ReducerManager, StaticReducers } from './types';

// export const REDUCER_ADD = 'REDUCER_ADD';
// export const REDUCER_REMOVE = 'REDUCER_REMOVE';

// export function createReducerManager(staticReducers: StaticReducers, store?: any): ReducerManager {
//   const reducers = { ...staticReducers };
//   let combinedReducer = combineReducers(reducers);

//   return {
//     getReducerMap: () => reducers,
//     reduce: (state, action) => combinedReducer(state, action),
//     add: (key, reducer) => {
//       if (!key || reducers[key]) {
//         return;
//       }
//       reducers[key] = reducer;
//       combinedReducer = combineReducers(reducers);
      
//       if (store) {
//         console.log(`🔌 Reducer added: ${key}`);
//         store.dispatch({ type: REDUCER_ADD, payload: { key, timestamp: Date.now() } });
//       }
//     },
//     remove: (key) => {
//       if (!key || !reducers[key]) {
//         return;
//       }
//       delete reducers[key];
//       combinedReducer = combineReducers(reducers);
      
//       // Dispatch action об удалении редьюсера
//       if (store) {
//         console.log(`🔌 Reducer removed: ${key}`);
//         store.dispatch({ type: REDUCER_REMOVE, payload: { key, timestamp: Date.now() } });
//       }
//     },
//     has: (key) => !!reducers[key],
//   };
// }
