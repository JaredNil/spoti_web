import { configureStore } from '@reduxjs/toolkit'

import { createReducerManager } from './reducerManager'

import { userReducer } from '@/entities/user'
import { authReducer } from '@/features/auth'
import { $api, rtkApi } from '@/shared/api/rtkApi'
import { StateSchema } from '@/shared/lib/state'
import { playerReducer } from '@/widgets/player'

export interface ThunkExtraArg {
	api: typeof $api
}

export interface ThunkConfig<T> {
	serializedErrorType: T
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
		devTools: true,
	})

	;(store as any).reducerManager = reducerManager

	return store
}
