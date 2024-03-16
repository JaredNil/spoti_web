/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useCallback, useEffect } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import Sidebar from 'widgets/Sidebar/ui/Sidebar';

import Player from 'widgets/Player/ui/Player';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { authByCookie } from 'features/Auth/model/service/AuthByCookie';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

// import { Navbar } from 'widgets/Navbar';
// import { Sidebar } from 'widgets/Sidebar';

export interface Song {
	id: string;
	user_id: string;
	author: string;
	title: string;
	song_path: string;
	image_path: string;
}

export const userSongs: Song[] = [
	{
		id: '1',
		user_id: '1',
		author: 'JaredN',
		title: '1',
		song_path: 'string',
		image_path: 'string',
	},
	{
		id: '2',
		user_id: '2',
		author: 'JaredN',
		title: '3',
		song_path: 'string',
		image_path: 'string',
	},
	{
		id: '3',
		user_id: '3',
		author: 'JaredN',
		title: '3',
		song_path: 'string',
		image_path: 'string',
	},
];

const App: React.FC = () => {
	const { theme } = useTheme();

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(authByCookie());
	}, [dispatch]);

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<div className="flex h-full">
					<Sidebar />
					<main className="h-full flex-1 overflow-y-auto py-2">
						<AppRouter />
					</main>
					<Player />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
