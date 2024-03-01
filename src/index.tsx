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

export interface Song {
	id: string;
	user_id: string;
	author: string;
	title: string;
	song_path: string;
	image_path: string;
}

const userSongs: Song[] = [
	{
		id: '1',
		user_id: '1',
		author: 'JaredN',
		title: '1',
		song_path: 'string',
		image_path: 'string',
	},
	{
		id: '2',
		user_id: '2',
		author: 'JaredN',
		title: '3',
		song_path: 'string',
		image_path: 'string',
	},
	{
		id: '3',
		user_id: '3',
		author: 'JaredN',
		title: '3',
		song_path: 'string',
		image_path: 'string',
	},
];

root.render(
	<BrowserRouter>
		{/* <ToasterProvider /> */}
		<StoreProvider>
			{/* <UserProvider> */}
			<ErrorBoundary>
				<ThemeProvider>
					<Sidebar songs={userSongs}>
						<App />
					</Sidebar>
				</ThemeProvider>
			</ErrorBoundary>
			{/* </UserProvider> */}
		</StoreProvider>
	</BrowserRouter>
);
