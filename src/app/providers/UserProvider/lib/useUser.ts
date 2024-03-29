import { useContext } from 'react';
import { UserContext } from './UserContext';

interface UseInitResult {
	toggleInit: (value: boolean) => void;
	isInit: boolean;
}

export function useUser(): UseInitResult {
	const { isInit, setIsInit } = useContext(UserContext);

	const toggleInit = (value: boolean): void => {
		if (setIsInit) {
			setIsInit(value);
		}
	};

	return {
		isInit: isInit || false,
		toggleInit,
	};
}
