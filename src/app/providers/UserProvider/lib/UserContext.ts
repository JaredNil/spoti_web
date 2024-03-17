import { type MouseEventHandler, createContext } from 'react';

export interface UserContextProps {
	setIsInit?: (value: boolean) => void;
	isInit?: boolean;
}

export const UserContext = createContext<UserContextProps>({});
