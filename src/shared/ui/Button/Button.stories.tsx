import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/StyleDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Button, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const FirstStory: Story = {
	args: { children: 'Text', theme: ButtonTheme.CLEAR },
	decorators: [themeDecorator(Theme.LIGHT)],
};

export const SecondStory: Story = {
	args: { children: 'Text', theme: ButtonTheme.CLEAR },
	decorators: [themeDecorator(Theme.DARK)],
};
