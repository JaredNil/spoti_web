/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
	AnyAction,
	combineReducers,
	Reducer,
	ReducersMapObject,
} from '@reduxjs/toolkit'

import { MountedReducers, ReducerManager } from './types'

import { StateSchema } from '@/shared/lib/state'

export function createReducerManager(
	initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
	const reducers = { ...initialReducers }

	let combinedReducer = combineReducers(reducers)

	let keysToRemove: string[] = []

	const mountedReducers: MountedReducers = {}
	Object.keys(reducers).forEach((key) => {
		mountedReducers[key as string] = true
	})

	return {
		getReducerMap: () => reducers,
		getMountedReducers: () => mountedReducers,
		reduce: (state: StateSchema | undefined, action: AnyAction) => {
			if (state && keysToRemove.length > 0) {
				state = { ...state }
				keysToRemove.forEach((key) => {
					if (state && state[key]) delete state[key]
				})
				keysToRemove = []
			}
			// @ts-expect-error
			return combinedReducer(state, action)
		},
		add: (key: string, reducer: Reducer) => {
			if (!key || reducers[key]) {
				return
			}
			reducers[key] = reducer
			mountedReducers[key] = true

			combinedReducer = combineReducers(reducers)
		},
		remove: (key: string) => {
			if (!key || !reducers[key]) {
				return
			}
			delete reducers[key]
			keysToRemove.push(key)
			mountedReducers[key] = false

			combinedReducer = combineReducers(reducers)
		},
	}
}
