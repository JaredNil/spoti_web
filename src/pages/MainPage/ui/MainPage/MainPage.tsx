import { useSelector } from 'react-redux';

import { getUsername } from 'entities/User/model/selectors/getUsername/getUsername';

import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Page from 'shared/ui/Page/Page';

import { useEffect } from 'react';
import { AlbumList } from 'entities/Album';
import { getIsLoadingData } from '../../model/selector/MainpageSelector';
import { mainpageAction, mainpageReducer } from '../../model/slice/mainpageSlice';
import { QuickBar } from '../QuickBar/QuickBar';
import { AlbumListProvider } from '../AlbumListProvider/AlbumListProvider';

const MainPage: React.FC = () => {
	const dispatch = useAppDispatch();

	const username = useSelector(getUsername);

	const isLoadingData = useSelector(getIsLoadingData);

	const reducers: ReducerList = {
		mainpage: mainpageReducer,
	};

	useEffect(() => {
		setTimeout(() => {
			dispatch(mainpageAction.offLoadingData());
		}, 4000);
	}, [isLoadingData, dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
			<Page>
				<div className="mb-2">
					<h1 className="relative text-3xl font-semibold text-white">
						Welcome back,
						{username || (
							<span
								className="sceletonHeader inline-block h-full w-32
								select-none rounded-lg text-transparent"
							>
								%username%
							</span>
						)}
					</h1>
				</div>

				<div className="mt-2">
					<QuickBar isLoadingData={isLoadingData} />
					<AlbumListProvider
						title="Пользовательские плейлисты"
						isLoadingData={isLoadingData}
						// albums={userAlbums}
					/>
					<AlbumListProvider
						isLoadingData={isLoadingData}
						// albums={commonAlbums}
						title="Общие плейлисты"
					/>
				</div>
			</Page>
		</DynamicModuleLoader>
	);
};

export default MainPage;
