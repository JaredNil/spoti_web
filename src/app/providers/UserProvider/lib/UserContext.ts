import { type MouseEventHandler, createContext } from 'react';

export interface UserContextProps {
	setIsInit: (arg0: boolean) => void;
	isInit: boolean;
}

export const UserContext = createContext<UserContextProps>({
	setIsInit: () => {},
	isInit: false,
});
