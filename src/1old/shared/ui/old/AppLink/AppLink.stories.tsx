import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/StyleDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
	title: 'shared/AppLink',
	component: AppLink,
	// Common Args
	args: {
		to: '/',
		children: 'text',
	},
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const AppLinkLightPrimary: Story = {
	args: {
		theme: AppLinkTheme.PRIMARY,
	},
};

export const AppLinkLightSecondary: Story = {
	args: {
		theme: AppLinkTheme.SECONDARY,
	},
};

export const AppLinkDarkPrimary: Story = {
	args: {
		theme: AppLinkTheme.PRIMARY,
	},
	decorators: [themeDecorator(Theme.DARK)],
};

export const AppLinkDarkSecondary: Story = {
	args: {
		theme: AppLinkTheme.SECONDARY,
	},
	decorators: [themeDecorator(Theme.DARK)],
};
