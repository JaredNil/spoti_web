import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';

import { getUserAuthData } from 'entities/User';

import { Header } from 'widgets/Header';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const IntroPage: React.FC = memo(() => {
	const { t } = useTranslation();

	const username = useSelector(getUserAuthData);

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
