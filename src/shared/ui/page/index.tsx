import { HTMLProps, memo, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface PageProps extends HTMLProps<HTMLDivElement> {
	className?: string;
	children: ReactNode;
}

const Page: React.FC<PageProps> = memo(({ children, className, ...otherProps }: PageProps) => {
	return (
		<div className={twMerge(
			`h-full w-full overflow-hidden
            overflow-y-auto rounded-lg bg-neutral-900 
            px-6 pt-[80px]`,
			className
			)}
			{...otherProps}
		>
			{children}
		</div>
	);
});

export default Page;
