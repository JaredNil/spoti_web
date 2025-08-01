/* eslint-disable @typescript-eslint/no-empty-object-type */
import { AnyAction, EnhancedStore, Middleware, Reducer } from '@reduxjs/toolkit';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import { StateSchema } from '@/shared/lib/state';


export type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
export type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
export interface DynamicReducer<S = any> extends Reducer<S, AnyAction> {}

export interface ReducerManager {
  getReducerMap: () => Record<string, DynamicReducer>;
  getMountedReducers: () => MountedReducers;
  reduce: (state: any, action: AnyAction) => any;
  add: (key: string, reducer: DynamicReducer) => void;
  remove: (key: string) => void;
  // has: (key: string) => boolean;
}

export interface StaticReducers {
  [key: string]: DynamicReducer;
}

export interface ReducerList{
	[key: string]: Reducer;
};

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface StoreConfig {
    initialState?: StateSchema;
    staticReducers: StaticReducers;
    middleware?: Middleware;
    devTools?: boolean;
    navigate?: () => AppRouterInstance
}

