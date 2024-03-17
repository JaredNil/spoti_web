import { useContext } from 'react';
import { UserContext } from './UserContext';

interface UseThemeResult {
	toggleData: () => void;
	isInit: boolean;
}

export function useUser(): UseThemeResult {
	const { isInit, setIsInit } = useContext(UserContext);

	const toggleData = (): void => {
		setIsInit(true);
		console.log('HERE');
	};
	console.log(isInit);
	return {
		isInit: isInit || false,
		toggleData,
	};
}

export default useUser;
