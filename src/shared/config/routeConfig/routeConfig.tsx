import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import SearchPage from 'pages/SearchPage/ui/SearchPage';
import { UploadPage } from 'pages/UploadPage';
// import { AboutPage } from 'pages/AboutPage';
// import { NotFoundPage } from 'pages/NotFoundPage';
// import { ProfilePage } from 'pages/ProfilePage';
// import { ArticlesPage } from 'pages/ArticlesPage';
// import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean;
};

export enum AppRoutes {
	MAIN = 'main',
	SEARCH = 'search',
	UPLOAD = 'upload',

	NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.SEARCH]: '/search',
	[AppRoutes.UPLOAD]: '/upload',

	[AppRoutes.NOT_FOUND]: '*',
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
	[AppRoutes.UPLOAD]: {
		path: RoutePath.upload,
		element: <UploadPage />,
	},

	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <MainPage />,
	},
};