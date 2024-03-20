import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { SearchPage } from 'pages/SearchPage';

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean;
};

export enum AppRoutes {
	MAIN = 'main',
	SEARCH = 'search',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.SEARCH]: '/search',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />,
	},
	[AppRoutes.SEARCH]: {
		path: RoutePath.search,
		element: <SearchPage />,
	},
};
