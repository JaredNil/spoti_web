import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { StoreProvider } from 'app/providers/StoreProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { UserProvider } from 'app/providers/UserProvider';

import 'app/styles/index.scss';

import 'shared/config/i18n/i18n';

import App from './app/App';

const root = createRoot(document.getElementById('root')!);

root.render(
	<BrowserRouter>
		<StoreProvider>
			<ErrorBoundary>
				<ThemeProvider>
					<UserProvider>
						<App />
					</UserProvider>
				</ThemeProvider>
			</ErrorBoundary>
		</StoreProvider>
	</BrowserRouter>
);
