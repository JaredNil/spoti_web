import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createStore, staticReducers } from '../config/store';


interface StoreProviderProps {
	children?: ReactNode;
	// initialState?: DeepPartial<StateSchema>;
	// asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props:StoreProviderProps) =>{
	const { children, 
		// initialState, 
		// asyncReducers 
	} = props;

		const store = createStore({staticReducers});

		return <Provider store={store}>{children}</Provider>;
};


		// const store = createReduxStore(
		// 	initialState as StateSchema,
		// 	asyncReducers as ReducersMapObject<StateSchema>
		// );