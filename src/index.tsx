import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { StoreProvider } from 'app/providers/StoreProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemeProvider } from 'app/providers/ThemeProvider';

import 'app/styles/index.scss';

import 'shared/config/i18n/i18n';

import Sidebar from 'widgets/Sidebar/ui/Sidebar';
import App from './app/App';

const root = createRoot(document.getElementById('root')!);

root.render(
	<BrowserRouter>
		{/* <ToasterProvider /> */}
		<StoreProvider>
			{/* <UserProvider> */}
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
			{/* </UserProvider> */}
		</StoreProvider>
	</BrowserRouter>
);
