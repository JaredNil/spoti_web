import { memo, Suspense, useEffect, useState } from 'react';

import { Sidebar } from 'widgets/Sidebar';
import { getIsActivePlayer, Player } from 'widgets/Player';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { Header } from 'widgets/Header';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';
import { twMerge } from 'tailwind-merge';
import { useSelector } from 'react-redux';

// DEMO
// import { authByCookie } from '../entities/User/model/service/authByCookie'; // IN DEMO NOT WORKING


const App: React.FC = memo(() => {
	const { theme } = useTheme();

	const isActivePlayer = useSelector(getIsActivePlayer)

	const dispatch = useAppDispatch();

	// COOKIE HANDLING NOT WORKING IN DEMO
	useEffect(() => {
		// dispatch(authByCookie());
	}, [dispatch]);

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<div className={twMerge("flex overflow-x-auto", 
					(isActivePlayer) ? 'h-full pb-12': 'h-full'
				)}>
					<Sidebar />

					<main className="relative flex h-full w-full overflow-y-auto py-2">
						<Header />
						<AppRouter />
					</main>
				</div>
				{isActivePlayer && <Player />}	
			</Suspense>
		</div>
	);
});

export default App;
