import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { AlbumList, getAlbumCommonData, getAlbumUserData, albumAction } from 'entities/Album';
import { getUserAuthData } from 'entities/User';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import Page from 'shared/ui/Page/Page';

import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { FavoriteBlock } from './FavoriteBlock/FavoriteBlock';
import { getIsLoadingPage } from '../selector/MainpageSelector';
import { mainpageReducer } from '../slice/mainpageSlice';

const MainPage: React.FC = memo(() => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const username = useSelector(getUserAuthData);

	const isLoadingPage = useSelector(getIsLoadingPage);

	const commonAlbums = useSelector(getAlbumCommonData);
	const userAlbums = useSelector(getAlbumUserData);

	useEffect(() => {
		dispatch(albumAction.update());
	}, [dispatch, commonAlbums]);

	const reducers: ReducerList = {
		mainpage: mainpageReducer,
	};

	const userblock = () => {
		return (
			username || (
				<span
					className="sceletonHeader inline-block h-full w-32
					select-none rounded-lg text-transparent"
				>
					_
				</span>
			)
		);
	};

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
			<Page>
				<div className="mb-2">
					<h1 className="relative text-3xl font-semibold text-white">
						Welcome back, {userblock()}
					</h1>
				</div>

				<div className="mt-2">
					<FavoriteBlock isLoadingPage={isLoadingPage} />

					<AlbumList
						isLoadingPage={isLoadingPage}
						albums={userAlbums}
						title="Пользовательские плейлисты"
					/>
					<AlbumList isLoadingPage={isLoadingPage} albums={commonAlbums} title="Общие плейлисты" />
				</div>
			</Page>
		</DynamicModuleLoader>
	);
});

export default MainPage;
