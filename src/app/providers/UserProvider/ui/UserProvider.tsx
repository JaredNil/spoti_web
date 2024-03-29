import { memo, useMemo, useState } from 'react';
import { UserContext } from '../lib/UserContext';

interface UserProviderProps {
	children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = memo(({ children }: UserProviderProps) => {
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
