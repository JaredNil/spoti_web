/* eslint-disable @typescript-eslint/no-empty-object-type */
import { AnyAction, Reducer } from '@reduxjs/toolkit';

// Базовые типы для динамических редьюсеров
export interface DynamicReducer<S = any> extends Reducer<S, AnyAction> {}

// Интерфейс для менеджера редьюсеров
export interface ReducerManager {
  getReducerMap: () => Record<string, DynamicReducer>;
  reduce: (state: any, action: AnyAction) => any;
  add: (key: string, reducer: DynamicReducer) => void;
  remove: (key: string) => void;
  has: (key: string) => boolean;
}

// Тип для статических редьюсеров (обязательные)
export interface StaticReducers {
  [key: string]: DynamicReducer;
}

// Тип для RootState с учетом динамических редьюсеров
export interface RootState {
  // Обязательные редьюсеры
  app: any; // замените на реальный тип вашего app состояния
  user: any; // замените на реальный тип вашего user состояния
  
  // Динамические редьюсеры (опциональные)
  [key: string]: any;
}

// Тип для конфигурации store
export interface StoreConfig {
  staticReducers: StaticReducers;
  middleware?: any[];
  devTools?: boolean;
}
