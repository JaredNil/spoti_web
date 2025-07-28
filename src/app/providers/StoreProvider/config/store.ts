// import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
// import { StateSchema, ThunkExtraArg } from './StateSchema';
// import { createReducerManager } from './reducerManager';
// import { $api } from 'shared/api/api';
// import { userReducer } from 'entities/User/model/slice/userSlice';
// import { albumReducer } from 'entities/Album/model/slice/albumSlice';
// import { rtkApi } from 'shared/api/rtkApi';
// import { CombinedState, Reducer } from 'redux';
// import { sidebarReducer } from 'widgets/Sidebar/model/slice/SidebarSlice';
// import { authReducer } from 'features/Auth';
// import { playerReducer } from 'widgets/Player/model/slice/PlayerSlice';

// export function createReduxStore(
//     initialState?: StateSchema,
//     asyncReducers?: ReducersMapObject<StateSchema>,
// ) {
//     const rootReducers: ReducersMapObject<StateSchema> = {
// 		...asyncReducers,
// 		user: userReducer,
// 		albums: albumReducer,
//         sidebar: sidebarReducer,
//         player: playerReducer,
//         [rtkApi.reducerPath]: rtkApi.reducer,
//     };

//     const reducerManager = createReducerManager(rootReducers);

//     const extraArg: ThunkExtraArg = {
//         api: $api,
//     };

//     const store = configureStore({
//         reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
//         devTools: __IS_DEV__,
//         preloadedState: initialState,
//         middleware: (getDefaultMiddleware) =>
//             getDefaultMiddleware({
//                 thunk: {
//                     extraArgument: extraArg,
//                 },
//             }).concat(rtkApi.middleware),
//     });

//     // @ts-ignore
//     store.reducerManager = reducerManager;

//     return store;
// }

// export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
