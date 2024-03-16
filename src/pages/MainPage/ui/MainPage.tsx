import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { useSelector } from 'react-redux';

import { AlbumList, getAlbumCommonData, getAlbumUserData, albumAction } from 'entities/Album';
import { getUserAuthData } from 'entities/User';

import { Header } from 'widgets/Header';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { FavoriteBlock } from './FavoriteBlock/FavoriteBlock';

const MainPage: React.FC = memo(() => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const username = useSelector(getUserAuthData);

	const commonAlbums = useSelector(getAlbumCommonData);
	const userAlbums = useSelector(getAlbumUserData);

	useEffect(() => {
		dispatch(albumAction.update());
		// console.log(commonAlbums);
	}, [dispatch, commonAlbums]);

	return (
		<div className={twMerge(`h-full w-full overflow-hidden overflow-y-auto rounded-lg  bg-neutral-900 `)}>
			<Header>
				<div className="mb-2">
					<h1 className="text-3xl font-semibold text-white">Welcome back, {username || 'Гость'}</h1>
				</div>
			</Header>

			<div className="mt-2 px-6">
				<FavoriteBlock />

				<AlbumList albums={userAlbums} title="Пользовательские плейлисты" />
				<AlbumList albums={commonAlbums} title="Общие плейлисты" />
			</div>
		</div>
	);
});

export default MainPage;
