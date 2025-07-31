/* eslint-disable @typescript-eslint/no-empty-object-type */
import { AnyAction, Reducer } from '@reduxjs/toolkit';

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
  reduce: (state: any, action: AnyAction) => any;
  add: (key: string, reducer: DynamicReducer) => void;
  remove: (key: string) => void;
  has: (key: string) => boolean;
}

export interface StaticReducers {
  [key: string]: DynamicReducer;
}

export interface ReducerList{
	[key: string]: Reducer;
};
// export interface RootState {
//   app: any; // замените на реальный тип вашего app состояния
//   user: any; // замените на реальный тип вашего user состояния
  
//   // Динамические редьюсеры (опциональные)
//   [key: string]: any;
// }

// Тип для конфигурации store
export interface StoreConfig {
    initialState?: StateSchema;
    staticReducers: StaticReducers;
    middleware?: any[];
    devTools?: boolean;
}
