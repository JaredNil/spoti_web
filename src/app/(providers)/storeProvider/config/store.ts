import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createReducerManager } from './reducerManager';
import { StoreConfig, RootState } from './types';

import { userReducer } from '@/entities/user';

// Статические редьюсеры (примеры)
export const staticReducers = {
  user: userReducer,
};

export function createStore(config: StoreConfig) {
  const reducerManager = createReducerManager(config.staticReducers);

  const store = configureStore({
    reducer: reducerManager.reduce,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(config.middleware || []),
    devTools: true,
  });

  // Добавляем reducerManager в store
  (store as any).reducerManager = reducerManager;

  return store;
}





// Типы для хуков
// export type AppDispatch = typeof store.dispatch;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
