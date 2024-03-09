import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from 'widgets/Header';
import { twMerge } from 'tailwind-merge';
import { userSongs } from 'app/App';
import { AlbumList } from 'entities/Album';
import { FavoriteBlock } from './FavoriteBlock/FavoriteBlock';

const MainPage: React.FC = () => {
	const { t } = useTranslation();
	const [value, setValue] = useState('');

	const onChange = (val: string) => {
		setValue(val);
	};

	return (
		<div className={twMerge(`h-full w-full overflow-hidden overflow-y-auto rounded-lg  bg-neutral-900 `)}>
			<Header>
				<div className="mb-2">
					<h1 className="text-3xl font-semibold text-white">Welcome back, %USER_NAME%</h1>
				</div>
			</Header>

			<div className="mt-2 px-6">
				<FavoriteBlock />

				<div className=" my-2 flex items-center justify-between">
					<h1 className="text-2xl font-semibold text-white">Newest songs</h1>
				</div>

				<AlbumList />
			</div>
		</div>
	);
};

export default MainPage;
