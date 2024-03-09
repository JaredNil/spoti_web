import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { UploadPage } from 'pages/UploadPage';
import { SearchPage } from 'pages/SearchPage';
import { PlaylistPage } from 'pages/PlaylistPage';

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean;
};

export enum AppRoutes {
	MAIN = 'main',
	SEARCH = 'search',
	UPLOAD = 'upload',
	PLAYLIST = 'playlist',
	// PLAYLIST_ID = 'playlist_id',

	NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.SEARCH]: '/search',
	[AppRoutes.UPLOAD]: '/upload',
	[AppRoutes.PLAYLIST]: '/playlist',
	// [AppRoutes.PLAYLIST_ID]: '/playlist/',

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
	[AppRoutes.PLAYLIST]: {
		path: RoutePath.playlist,
		element: <PlaylistPage />,
	},
	// [AppRoutes.PLAYLIST_ID]: {
	// 	path: `${RoutePath.playlist_id}:id`,
	// 	element: <PlaylistPage />,
	// },

	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <MainPage />,
	},
};
