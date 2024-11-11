import { memo, Suspense, useEffect } from 'react';

import { Sidebar } from 'widgets/Sidebar';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { Header } from 'widgets/Header';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

// DEMO
// import { authByCookie } from '../entities/User/model/service/authByCookie'; // IN DEMO NOT WORKING


const App: React.FC = memo(() => {
	const { theme } = useTheme();

	const dispatch = useAppDispatch();

	// COOKIE HANDLING NOT WORKING IN DEMO
	useEffect(() => {
		// dispatch(authByCookie());
	}, [dispatch]);

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<div className="flex h-full overflow-x-auto">
					<Sidebar />

					<main className="relative flex h-full w-full overflow-y-auto py-2">
						<Header />

						<AppRouter />
					</main>
					{/* <Player /> */}
				</div>
			</Suspense>
		</div>
	);
});

export default App;
