import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { createStore } from '../config/store';
import { StoreConfig } from '../config/types';

import { userReducer } from '@/entities/user';
import { rtkApi } from '@/shared/api/rtkApi';

const store = createStore({
	// middleware: [rtkApi.middleware],
	// navigate: () => useRouter(),
} as StoreConfig);
export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch

export const StoreProvider = ({children}: {children: ReactNode}) =>{
  
	return <Provider store={store}>{children}</Provider>;
};
