import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';

import { getUsername } from 'entities/User/model/selectors/getUsername/getUsername';

import { Header } from 'widgets/Header';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const AccountPage: React.FC = memo(() => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const username = useSelector(getUsername);

	return (
		<div className={twMerge(`h-full w-full overflow-hidden overflow-y-auto rounded-lg  bg-neutral-900 `)}>
			<Header>
				<div className="mb-2">
					<h1 className="text-3xl font-semibold text-white">AccountPage</h1>
				</div>
			</Header>

			<div className="mt-2 px-6">AccountPage</div>
		</div>
	);
});

export default AccountPage;
