import { useContext } from 'react';
import { UserContext } from './UserContext';

interface UseInitResult {
	toggleInit: () => void;
	isInit: boolean;
}

export function useUser(): UseInitResult {
	const { isInit, setIsInit } = useContext(UserContext);

	const toggleInit = (): void => {
		setIsInit(true);
	};

	return {
		isInit: isInit || false,
		toggleInit,
	};
}
