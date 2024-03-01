import { Theme } from './../../../../app/providers/ThemeProvider/lib/ThemeContext';

export const themeDecorator = (theme: Theme) => {
	return (Story: any) => {
		return (
			<div className={`app ${theme}`}>
				{<Story />}
			</div>
		);
	};
};
