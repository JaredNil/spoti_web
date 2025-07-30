// Основные экспорты для системы динамических редьюсеров
export type { RootState, ReducerManager, DynamicReducer } from './config/types';

// export {
//   useDynamicReducer,
//   useDynamicReducers,
//   loadReducerAsync,
// } from './dynamicReducerHooks';

// export {
//   withDynamicReducer,
//   withDynamicReducers,
//   withAsyncReducer,
// } from './withDynamicReducer';

// Утилиты для создания системы
export { createReducerManager } from './config/reducerManager';
export { createStore } from './config/store';
