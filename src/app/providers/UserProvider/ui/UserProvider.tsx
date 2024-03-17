/* eslint-disable react/jsx-no-useless-fragment */

import { authByCookie } from 'features/Auth';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { UserSchema, getUserInited, userAction } from 'entities/User';
import { useLocation } from 'react-router-dom';
import { StateSchema } from '../../StoreProvider';
import { useUser } from '../lib/useUser';
import { UserContext } from '../lib/UserContext';

interface UserProviderProps {
	children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = memo(({ children }: UserProviderProps) => {
	// const dispatch = useAppDispatch();

	// const location = useLocation();

	// const user = useSelector<StateSchema>((state) => state.user);
	// console.log(location);

	// const { isInit } = user as UserSchema;

	// useEffect(() => {
	// 	dispatch(userAction.initAuthData());
	// }, [dispatch]);
	// useEffect(() => {
	// 	if (!isInit) {
	// dispatch(userAction.initAuthData());
	// 	} else {
	// dispatch(authByCookie());
	// 	}
	// }, [isInit, dispatch]);

	// const { isInitCookie, toggleData } = useUser();

	// toggleData();
	// console.log(toggleData());

	// toggleData();
	// console.log(isInitCookie);

	const [isInit, setIsInit] = useState<boolean>(false);

	const defaultProps = useMemo(
		() => ({
			isInit,
			setIsInit,
		}),
		[isInit]
	);

	return <UserContext.Provider value={defaultProps}>{children}</UserContext.Provider>;
});
