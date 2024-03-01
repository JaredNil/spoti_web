import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BugButton from 'widgets/PageError/ui/BugButton';

const MainPage: React.FC = () => {
	const { t } = useTranslation();
	const [value, setValue] = useState('');

	const onChange = (val: string) => {
		setValue(val);
	};

	return (
		<div>
			{/* <BugButton /> */}
			{t('Главная_титул')}
		</div>
	);
};

export default MainPage;
