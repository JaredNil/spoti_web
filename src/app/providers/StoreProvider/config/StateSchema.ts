import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { NavigateOptions, To } from 'react-router-dom';
import { AxiosInstance } from 'axios';
import { CombinedState } from 'redux';

import { AlbumsSchema } from 'entities/Album';
import { MainpageSchema } from 'pages/MainPage/model/types/MainpageSchema';
import { SearchpageSchema } from 'pages/SearchPage/model/types/SearchpageSchema';
import { UploadpageSchema } from 'pages/UploadPage';
import { UserSchema } from 'entities/User/model/types/user';
import { AuthSchema } from 'features/Auth/model/types/AuthSchema';
import { PlayListPageSchema } from 'pages/PlaylistPage';
import { CurTrackSchema } from 'features/TrackModal/model/types/CurTrack';

export interface StateSchema {
	user: UserSchema;
	albums: AlbumsSchema;

	// async reducer
	auth?: AuthSchema;
	curTrack?: CurTrackSchema;

	// async pages
	mainpage?: MainpageSchema;
	searchpage?: SearchpageSchema;
	uploadpage?: UploadpageSchema;
	playListPage?: PlayListPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction,
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    // true - вмонтирован, false - демонтирован
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

export interface ThunkConfig<T> {
	serializedErrorType: T;
	extra: ThunkExtraArg;
	state: StateSchema;
}

export interface ThunkExtraArg {
	api: AxiosInstance;
	navigate?: (to: To, options?: NavigateOptions) => void;
}
