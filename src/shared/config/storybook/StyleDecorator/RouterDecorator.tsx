import { BrowserRouter } from 'react-router-dom';

export const routerDecorator = (Story: any) => {
	return (
		<BrowserRouter>
			<Story />
		</BrowserRouter>
	);
};
