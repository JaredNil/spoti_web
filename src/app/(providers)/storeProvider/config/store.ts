import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { createReducerManager } from './reducerManager'

import { metaReducer } from '@/entities/meta'
import { userReducer } from '@/entities/user'
import { authReducer } from '@/features/authModal'
import { $api, rtkApi } from '@/shared/api/api'
import { StateSchema } from '@/shared/lib/state'
import { playerReducer, usePlayer } from '@/widgets/player'

export interface ThunkExtraArg {
	api: typeof $api
}

export interface ThunkConfig {
	// serializedErrorType: T
	extra: ThunkExtraArg
	state: StateSchema
}

export type RootState = ReturnType<
	ReturnType<typeof configureStore>['getState']
>

export function createStore() {
	const reducerManager = createReducerManager({
		user: userReducer,
		player: playerReducer,
		auth: authReducer,
		meta: metaReducer,

		[rtkApi.reducerPath]: rtkApi.reducer,
	})

	const store = configureStore({
		reducer: (state, action) => {
			return reducerManager.reduce(state, action)
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: { api: $api },
				},
			}).concat(rtkApi.middleware),
		devTools: {
			actionsDenylist: [
				'player/setProgress',
				'player/setVolume',
				'player/setTimer',
			],
		},
	})
	;(store as any).reducerManager = reducerManager

	return store
}
