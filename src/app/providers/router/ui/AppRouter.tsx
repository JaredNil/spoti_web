/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-useless-fragment */
import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';

import { HeaderLoader } from 'shared/ui/HeaderLoader/HeaderLoader';
import { getUsername } from 'entities/User/model/selectors/getUsername/getUsername';
import { RequireAuth } from './RequireAuth';

const AppRouter: React.FC = () => {
	let username = useSelector(getUsername);

	const renderWithWrapper = useCallback(
		(route: AppRoutesProps) => {
			const element = (
				<Suspense fallback={<HeaderLoader className="bg-neutral-900" />}>
					<>{route.element}</>
				</Suspense>
			);
			return (
				<Route
					key={route.path}
					path={route.path}
					element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : <>{element}</>}
				/>
			);
		},
		[username]
	);

	return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default AppRouter;
