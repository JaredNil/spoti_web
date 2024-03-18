import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { AlbumList, getAlbumCommonData, getAlbumUserData, albumAction } from 'entities/Album';
import { getUserAuthData } from 'entities/User';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import Page from 'shared/ui/Page/Page';

import { FavoriteBlock } from './FavoriteBlock/FavoriteBlock';

const MainPage: React.FC = memo(() => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const username = useSelector(getUserAuthData);

	const commonAlbums = useSelector(getAlbumCommonData);
	const userAlbums = useSelector(getAlbumUserData);

	useEffect(() => {
		dispatch(albumAction.update());
	}, [dispatch, commonAlbums]);

	return (
		<Page>
			<div className="mb-2">
				<h1 className="text-3xl font-semibold text-white">Welcome back, {username || 'Гость'}</h1>
			</div>

			<div className="mt-2">
				<FavoriteBlock />

				<AlbumList albums={userAlbums} title="Пользовательские плейлисты" />
				<AlbumList albums={commonAlbums} title="Общие плейлисты" />
			</div>
		</Page>
	);
});

export default MainPage;
