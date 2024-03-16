/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-useless-fragment */
import { Children, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getUserAuthData } from 'entities/User';

import { PageLoader } from 'widgets/PageLoader/PageLoader';

import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';

import { RequireAuth } from './RequireAuth';

const AppRouter: React.FC = () => {
	let username = useSelector(getUserAuthData);

	const renderWithWrapper = useCallback(
		(route: AppRoutesProps) => {
			const element = (
				<Suspense fallback={<PageLoader />}>
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
