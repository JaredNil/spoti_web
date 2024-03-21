import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
	children?: ReactNode;
	initialState?: StateSchema;
	asyncReducers?: Partial<ReducersMapObject<StateSchema>>;
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
	const navigate = useNavigate();

	const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>, navigate);

	return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
