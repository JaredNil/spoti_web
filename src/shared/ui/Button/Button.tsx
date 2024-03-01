import { memo, type ButtonHTMLAttributes, ReactNode } from 'react';

import { Mods, classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
	CLEAR = 'clear',
	OUTLINE = 'outline',
	OUTLINE_RED = 'outline_red',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize;
	disabled?: boolean;
	children: ReactNode;
}

export const Button = memo<ButtonProps>((props: ButtonProps) => {
	const { children, className, theme = ButtonTheme.OUTLINE, square, size = ButtonSize.M, disabled = false, ...otherProps } = props;

	const mods: Mods = {
		[cls[theme]]: true,
		[cls.square]: square,
		[cls[size]]: true,
		[cls.disabled]: disabled,
	};

	return (
		<button type="button" className={classNames(cls.Button, mods, [className, theme])} disabled={disabled} {...otherProps}>
			{children}
		</button>
	);
});
