// /* eslint-disable react/jsx-no-useless-fragment */
// import { FC, ReactNode, useEffect } from 'react';
// import { useDispatch, useStore } from 'react-redux';
// import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
// import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
// import { Reducer } from '@reduxjs/toolkit';

// export type ReducerList = {
// 	[name in StateSchemaKey]?: Reducer;
// };

// interface DynamicModuleLoaderProps {
// 	reducers: ReducerList;
// 	removeAfterUnmount?: boolean;
// 	children: ReactNode;
// }

// export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({ reducers, children, removeAfterUnmount = true }: DynamicModuleLoaderProps) => {
// 	const store = useStore() as ReduxStoreWithManager;
// 	const dispatch = useDispatch();

// 	useEffect(() => {
// 		Object.entries(reducers).forEach(([name, reducer]): void => {
// 			store.reducerManager.add(name as StateSchemaKey, reducer as Reducer);
// 			dispatch({ type: `@INIT ${name} reducer` });
// 		});

// 		return () => {
// 			if (removeAfterUnmount) {
// 				Object.entries(reducers).forEach(([name, reducer]) => {
// 					store.reducerManager.remove(name as StateSchemaKey);
// 					dispatch({
// 						type: `@DESTROY ${name} reducer`,
// 					});
// 				});
// 			}
// 		};
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, []);

// 	return <>{children}</>;
// };
