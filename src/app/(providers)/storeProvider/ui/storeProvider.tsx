import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { createStore } from '../config/store';
import { StoreConfig } from '../config/types';

export const StoreProvider = ({children}: {children: ReactNode}) =>{
  const store = createStore({} as StoreConfig);
	return <Provider store={store}>{children}</Provider>;
};
