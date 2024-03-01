// import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

const PageError: React.FC = () => {
	const { t } = useTranslation();

	const reloadPage = (): void => {
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	};

	return (
		<div className={cls.PageError}>
			<p>{t('Произошла непредвиденная ошибка')}</p>
			<Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
		</div>
	);
};
export default PageError;
