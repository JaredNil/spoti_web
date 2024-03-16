import { classNames } from 'shared/lib/classNames/classNames';

interface PageLoaderProps {
	className?: string;
	// theme?: ;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ className }: PageLoaderProps) => (
	<div className={classNames('page__loader', {}, [className])}>
		<div className="lds-hourglass" />
	</div>
);
