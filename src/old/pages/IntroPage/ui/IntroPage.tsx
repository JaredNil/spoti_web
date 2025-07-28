import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';

import { Header } from 'widgets/Header';

import { getUsername } from '../../../entities/User/model/selectors/getUsername/getUsername';

const IntroPage: React.FC = memo(() => {
	const username = useSelector(getUsername);

	return (
		<div className={twMerge(`h-full w-full overflow-hidden overflow-y-auto rounded-lg  bg-neutral-900 `)}>
			<Header>
				<div className="mb-2">
					<h1 className="text-3xl font-semibold text-white">Welcome back, {username || 'Гость'}</h1>
				</div>
			</Header>

			<div className="mt-2 px-6">START AUTH PAGE DFADSAJIFPSDJFSWRJGF</div>
		</div>
	);
});

export default IntroPage;
