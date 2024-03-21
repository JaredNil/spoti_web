import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { UploadPage } from 'pages/UploadPage';
import { SearchPage } from 'pages/SearchPage';
import { PlaylistPage } from 'pages/PlaylistPage';
import { IntroPage } from 'pages/IntroPage';
import { AccountPage } from 'pages/AccountPage';

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean;
};

export enum AppRoutes {
	MAIN = 'main',
	SEARCH = 'search',
	// ACCOUNT = 'account',
	// UPLOAD = 'upload',
	// PLAYLIST = 'playlist',
	// INTRO = 'intro',
	// PLAYLIST_ID = 'playlist_id',

	// NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.SEARCH]: '/search',
	// [AppRoutes.ACCOUNT]: '/account',
	// [AppRoutes.UPLOAD]: '/upload',
	// [AppRoutes.INTRO]: '/intro',
	// [AppRoutes.PLAYLIST]: '/playlist',
	// [AppRoutes.PLAYLIST_ID]: '/playlist/',

	// [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />,
		// authOnly: true,
	},
	[AppRoutes.SEARCH]: {
		path: RoutePath.search,
		element: <SearchPage />,
		// authOnly: true,
	},
	// [AppRoutes.ACCOUNT]: {
	// 	path: RoutePath.account,
	// 	element: <AccountPage />,
	// 	// authOnly: true,
	// },

	// [AppRoutes.UPLOAD]: {
	// 	path: RoutePath.upload,
	// 	element: <UploadPage />,
	// 	// authOnly: true,
	// },
	// [AppRoutes.PLAYLIST]: {
	// 	path: RoutePath.playlist,
	// 	element: <PlaylistPage />,
	// 	// authOnly: true,
	// },
	// [AppRoutes.INTRO]: {
	// 	path: RoutePath.intro,
	// 	element: <IntroPage />,
	// },
	// // [AppRoutes.PLAYLIST_ID]: {
	// // 	path: `${RoutePath.playlist_id}:id`,
	// // 	element: <PlaylistPage />,
	// // },

	// [AppRoutes.NOT_FOUND]: {
	// 	path: RoutePath.not_found,
	// 	element: <IntroPage />,
	// },
};
