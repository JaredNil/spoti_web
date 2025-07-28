import type { Preview } from '@storybook/react';
import { commonDecorator } from './../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { themeDecorator } from './../../src/shared/config/storybook/StyleDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';
import { routerDecorator } from './../../src/shared/config/storybook/StyleDecorator/RouterDecorator';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	// Default theme app - Theme.LIGHT
	decorators: [
		commonDecorator,
		routerDecorator,
		themeDecorator(Theme.LIGHT),
	],
};

export default preview;
