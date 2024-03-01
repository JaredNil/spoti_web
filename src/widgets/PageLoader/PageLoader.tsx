import { classNames } from 'shared/lib/classNames/classNames';

interface PageLoaderProps {
	className?: string;
	// theme?: ;
}

const PageLoader: React.FC<PageLoaderProps> = ({ className }: PageLoaderProps) => (
	<div className={classNames('page__loader', {}, [className])}>
		<div className="lds-hourglass" />
	</div>
);

export default PageLoader;
