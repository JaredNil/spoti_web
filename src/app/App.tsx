import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';

// import { Navbar } from 'widgets/Navbar';
// import { Sidebar } from 'widgets/Sidebar';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router/index';
import { useTheme } from './providers/ThemeProvider';

const App: React.FC = () => {
	const { theme } = useTheme();
	const dispatch = useDispatch();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<main className="content">Привет, это spotify</main>
			</Suspense>
		</div>
	);
};

export default App;
