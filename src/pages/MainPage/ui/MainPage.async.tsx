// import { lazy } from 'react';

// export const MainPageAsync = lazy(async () => import('./MainPage'));

import { lazy } from 'react';

export const MainPageAsync = lazy(
	() =>
		new Promise((resolve) => {
			// ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
			// @ts-ignore
			setTimeout(() => resolve(import('./MainPage')), 1500);
		})
);
