// import { lazy } from 'react';

// export const PlaylistPageAsync = lazy(async () => import('./PlaylistPage'));

import { lazy } from 'react';

export const PlaylistPageAsync = lazy(
	() =>
		new Promise((resolve) => {
			// @ts-ignore
			setTimeout(() => resolve(import('./PlaylistPage')), 400);
		})
);
