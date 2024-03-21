import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppRoutesProps, routeConfig } from '../config/routeConfig';

export const AppRouter: React.FC = () => {
	const renderWithWrapper = useCallback((route: AppRoutesProps) => {
		const element = (
			<Suspense fallback="">
				<div className="page-wrapper">{route.element}</div>
			</Suspense>
		);
		return <Route key={route.path} path={route.path} element={element} />;
	}, []);

	return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
