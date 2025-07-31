import { Reducer } from '@reduxjs/toolkit';
import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

import { ReduxStoreWithManager } from './reducerManager';
import { ReducerList } from './types';

interface DynamicModuleLoaderProps {
	reducers: ReducerList;
	removeAfterUnmount?: boolean;
	children: ReactNode;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({ reducers, children, removeAfterUnmount = true }: DynamicModuleLoaderProps) => {

	useEffect(()=> console.log('DynamicModuleLoader RENDER'))
	const store = useStore() as ReduxStoreWithManager;
	const dispatch = useDispatch();

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]): void => {
			store.reducerManager.add(name as string, reducer as Reducer);
			dispatch({ type: `@INIT ${name} reducer` });
		});

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name, reducer]) => {
					store.reducerManager.remove(name as string);
					dispatch({
						type: `@DESTROY ${name} reducer`,
					});
				});
			}
		};
	}, []);

	return (
    <>
      {children}
    </>
  );
};


// import { useRef, useEffect } from 'react';
// import { useStore } from 'react-redux';

// import { DynamicReducer } from './types';

// export function useDynamicReducer(
//   key: string,
//   reducer: DynamicReducer,
//   options: { removeOnUnmount?: boolean } = {}
// ) {
//   const store = useStore();
//   const reducerManager = (store as any).reducerManager;
//   const isAdded = useRef(false);

//   useEffect(() => {
//     if (!reducerManager) {
//       console.warn('ReducerManager not found in store');
//       return;
//     }

//     if (!reducerManager.has(key)) {
//       reducerManager.add(key, reducer);
//       isAdded.current = true;
//     }

//     return () => {
//       if (options.removeOnUnmount && isAdded.current) {
//         reducerManager.remove(key);
//         isAdded.current = false;
//       }
//     };
//   }, [key, reducer, reducerManager, options.removeOnUnmount]);
// }
