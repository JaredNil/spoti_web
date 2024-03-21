// import { lazy } from 'react';

// export const MainPageAsync = lazy(async () => import('./MainPage'));

import { lazy } from 'react';

console.log('MAINPAGE ASYNC');

export const MainPageAsync = lazy(
	() =>
		new Promise((resolve) => {
			// @ts-ignore
			setTimeout(() => resolve(import('./MainPage')), 1500);
		})
);
