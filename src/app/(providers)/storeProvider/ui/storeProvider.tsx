import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { createStore } from '../config/store';
import { StoreConfig } from '../config/types';

const store = createStore({} as StoreConfig);
export type AppStore = typeof store

export const StoreProvider = ({children}: {children: ReactNode}) =>{
  
	return <Provider store={store}>{children}</Provider>;
};
