
// import { FC } from 'react';

// import { useDynamicReducer } from './dynamicReducerHooks';
// import { DynamicReducer } from './types';

// export function withDynamicReducer<Props extends object>(
//   key: string,
//   reducer: DynamicReducer,
//   options: { removeOnUnmount?: boolean } = { removeOnUnmount: true }
// ) {
//   return function (Component: FC): FC {
//     const WrappedComponent = (props: Props) => {
//       useDynamicReducer(key, reducer, options);
//       return <Component {...props} />;
//     };

//     WrappedComponent.displayName = `withDynamicReducer(${Component.displayName || Component.name})`;
    
//     return WrappedComponent as FC ;
//   };
// }