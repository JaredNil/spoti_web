import { Link, type LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';

import { ReactNode, memo } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
	children?: ReactNode;
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = memo((props: AppLinkProps) => {
	const { to, className, children, theme = AppLinkTheme.PRIMARY } = props;

	return (
		<Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
			{children}
		</Link>
	);
});
