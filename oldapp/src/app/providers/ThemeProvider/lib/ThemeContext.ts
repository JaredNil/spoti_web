import { type MouseEventHandler, createContext } from 'react';

export enum Theme {
	LIGHT = 'app_light_theme',
	DARK = 'app_dark_theme',
	ORANGE = 'app_orange_theme',
}

export interface ThemeContextProps {
	setTheme?: (theme: Theme) => void;
	theme?: Theme;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
