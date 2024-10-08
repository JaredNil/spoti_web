import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';
import { $api } from 'shared/api/api';
import { userReducer } from 'entities/User/model/slice/userSlice';
import { albumReducer } from 'entities/Album/model/slice/albumSlice';
import { rtkApi } from 'shared/api/rtkApi';
import { CombinedState, Reducer } from 'redux';


export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		user: userReducer,
		albums: albumReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];




























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
