import { Reducer, ReducersMapObject, UnknownAction, combineReducers } from '@reduxjs/toolkit';
import { StateSchema, StateSchemaKey, ReducerManager } from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
	const reducers = { ...initialReducers };

	let combinedReducer = combineReducers(reducers);

	let keysToRemove: Array<StateSchemaKey> = [];

	return {
		getReducerMap: () => reducers,

		reduce: (state, action: UnknownAction) => {
			if (keysToRemove.length > 0) {
				state = { ...state };
				for (let key of keysToRemove) {
					delete state[key];
				}
				keysToRemove = [];
			}
			// @ts-ignore
			return combinedReducer(state, action);
		},

		add: (key: StateSchemaKey, reducer: Reducer) => {
			if (!key || reducers[key]) {
				return;
			}
			reducers[key] = reducer;
			combinedReducer = combineReducers(reducers);
		},

		remove: (key: StateSchemaKey) => {
			if (!key || !reducers[key]) {
				return;
			}
			delete reducers[key];
			keysToRemove.push(key);
			combinedReducer = combineReducers(reducers);
		},
	};
}
