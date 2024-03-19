import { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit';
import { NavigateOptions, To } from 'react-router-dom';
import { AxiosInstance } from 'axios';

import { UserSchema } from 'entities/User';
import { AlbumSchema } from 'entities/Album';

import { AuthSchema } from 'features/Auth';
import { MainpageSchema } from 'pages/MainPage/model/types/MainpageSchema';
import { SearchpageSchema } from 'pages/SearchPage/model/types/SearchpageSchema';
import { UploadpageSchema } from 'pages/UploadPage';

export interface StateSchema {
	user: UserSchema;
	albums: AlbumSchema;

	// async reducer
	auth?: AuthSchema;

	// async pages
	mainpage?: MainpageSchema;
	searchpage?: SearchpageSchema;
	uploadpage?: UploadpageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: UnknownAction) => StateSchema;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
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
