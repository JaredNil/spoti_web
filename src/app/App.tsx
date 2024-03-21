import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/RouterProvider';

const App: React.FC = () => {
	return (
		<div className={classNames('app', {}, [])}>
			<div className="flex h-full overflow-x-auto">
				<Suspense fallback="">
					<main className="relative flex h-full w-full overflow-y-auto py-2">
						<AppRouter />
					</main>
				</Suspense>
			</div>
		</div>
	);
};

export default App;
