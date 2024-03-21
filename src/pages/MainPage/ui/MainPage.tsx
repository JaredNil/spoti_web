import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { AlbumList, albumAction, getAlbumCommonData, getAlbumUserData } from 'entities/Album';

import { getUsername } from 'entities/User/model/selectors/getUsername/getUsername';

import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Page from 'shared/ui/Page/Page';

import { getIsLoadingPage } from '../model/selector/MainpageSelector';
import { mainpageReducer } from '../model/slice/mainpageSlice';
import { FavoriteBlock } from './FavoriteBlock/FavoriteBlock';

const MainPage: React.FC = () => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const username = useSelector(getUsername);

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

	useEffect(() => {
		console.log('MAINPAGE RENDER');
	}, []);

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
};

export default MainPage;
