// import { Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit';
// import { StateSchema, ThunkExtraArg } from './StateSchema';
// import { createReducerManager } from './reducerManager';
// import { $api } from 'shared/api/api';
// import { To } from 'history';
// import { NavigateOptions } from 'react-router';
// import { userReducer } from 'entities/User/model/slice/userSlice';
// import { albumReducer } from 'entities/Album/model/slice/albumSlice';

// export function createReduxStore(
// 	initialState?: StateSchema,
// 	asyncReducers?: ReducersMapObject<StateSchema>,
// 	navigate?: (to: To, options?: NavigateOptions) => void
// ) {
// 	const rootReducers: ReducersMapObject<StateSchema> = {
// 		...asyncReducers,
// 		user: userReducer,
// 		albums: albumReducer,
// 	};

// 	const reducerManager = createReducerManager(rootReducers);

// 	const extraArg: ThunkExtraArg = {
// 		api: $api,
// 		navigate,
// 	};

// 	const store = configureStore({
// 		reducer: reducerManager.reduce as Reducer<StateSchema>,
// 		devTools: __IS_DEV__,
// 		preloadedState: initialState,
// 		middleware: (getDefaultMiddleware) =>
// 			getDefaultMiddleware({
// 				thunk: {
// 					extraArgument: extraArg,
// 				},
// 			}),
// 	});

// 	// @ts-ignore
// 	store.reducerManager = reducerManager;

// 	return store;
// }

// export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
