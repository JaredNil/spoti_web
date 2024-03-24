import { useSelector } from 'react-redux';

import { getUsername } from 'entities/User/model/selectors/getUsername/getUsername';

import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Page from 'shared/ui/Page/Page';

import { useEffect } from 'react';
import { fetchAlbums } from 'entities/Album/model/service/fetchAlbums';
import { StateSchema } from 'app/providers/StoreProvider';
import { AlbumInterface } from 'entities/Album';
import { AlbumListType } from 'pages/MainPage/model/types/AlbumListType';
import { getIsLoadingData } from '../../model/selector/MainpageSelector';
import { mainpageAction, mainpageReducer } from '../../model/slice/mainpageSlice';
import { QuickBar } from '../QuickBar/QuickBar';
import { AlbumListProvider } from '../AlbumListProvider/AlbumListProvider';

const MainPage: React.FC = () => {
	const dispatch = useAppDispatch();

	const username = useSelector(getUsername);

	const isLoadingData = useSelector(getIsLoadingData);

	const commonAlbums = useSelector((state: StateSchema) => state.albums.commonAlbums);
	const userAlbums = useSelector((state: StateSchema) => state.albums.userAlbums);

	const reducers: ReducerList = {
		mainpage: mainpageReducer,
	};

	useEffect(() => {
		setTimeout(() => {
			dispatch(fetchAlbums());
		}, 1000);
	}, [dispatch]);

	useEffect(() => console.log('MAINPAGE_RENDER'), []);

	return (
		<DynamicModuleLoader reducers={reducers}>
			<Page>
				<div className="mb-2">
					<h1 className="relative text-3xl font-semibold text-white">
						Welcome back,
						{` ${username}` || (
							<span
								className="sceletonHeader inline-block h-full w-32
								select-none rounded-lg text-transparent"
							>
								{' '}
								%username%
							</span>
						)}
					</h1>
				</div>

				<div className="mt-2">
					<QuickBar isLoadingData={isLoadingData} />
					<AlbumListProvider
						type={AlbumListType.COMMON}
						isLoadingData={isLoadingData}
						albums={commonAlbums}
					/>
					<AlbumListProvider
						isLoadingData={isLoadingData}
						type={AlbumListType.USER}
						albums={userAlbums}
					/>
				</div>
			</Page>
		</DynamicModuleLoader>
	);
};

export default MainPage;
