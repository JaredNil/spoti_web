import { twMerge } from 'tailwind-merge';

interface HeaderLoaderProps {
	className?: string;
}

export const HeaderLoader: React.FC<HeaderLoaderProps> = ({ className }: HeaderLoaderProps) => {
	return (
		<div
			className={twMerge(
				`flex h-full w-full 
				items-center justify-center  
				transition-all`,
				className
			)}
		>
			<div className="lds-ring">
				<div />
				<div />
				<div />
				<div />
			</div>
		</div>
	);
};
