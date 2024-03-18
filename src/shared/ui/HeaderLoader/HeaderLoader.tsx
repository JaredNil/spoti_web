import { twMerge } from 'tailwind-merge';

interface HeaderLoaderProps {
	className?: string;
}

export const HeaderLoader: React.FC<HeaderLoaderProps> = ({ className }: HeaderLoaderProps) => {
	return (
		<div className={twMerge(`lds-ring transition-all`, className)}>
			<div />
			<div />
			<div />
			<div />
		</div>
	);
};
