// import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
// import { AxiosInstance } from 'axios';

// import { OptionalRecord } from './types';
// import { rtkApi } from '../../../../shared/api/rtkApi';


// export interface StateSchema {
// 	// user: UserSchema;
// 	// albums: AlbumsSchema;
// 	// sidebar: SidebarSchema;
// 	// player: PlayerSchema;
// 	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

// 	// async reducer
// 	// auth?: AuthSchema;
// 	// curTrack?: CurTrackSchema;

// 	// async pages
// 	// mainpage?: MainpageSchema;
// 	// searchpage?: SearchpageSchema;
// 	// uploadpage?: UploadpageSchema;
// 	// playListPage?: PlayListPageSchema;
// }

// export type StateSchemaKey = keyof StateSchema;
// export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

// export interface ReducerManager {
// 	getReducerMap: () => ReducersMapObject<StateSchema>;
//     reduce: (
//         state: StateSchema,
//         action: AnyAction,
//     ) => StateSchema;
//     add: (key: StateSchemaKey, reducer: Reducer) => void;
//     remove: (key: StateSchemaKey) => void;
//     // true - вмонтирован, false - демонтирован
//     getMountedReducers: () => MountedReducers;
// }

// export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
// 	reducerManager: ReducerManager;
// }

// export interface ThunkConfig<T> {
// 	serializedErrorType: T;
// 	extra: ThunkExtraArg;
// 	state: StateSchema;
// }

// export interface ThunkExtraArg {
// 	api: AxiosInstance;
// 	navigate?: (to: string, options?: any) => void;
// }
