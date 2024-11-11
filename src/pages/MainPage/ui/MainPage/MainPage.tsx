import { FC } from 'react';
import { useSelector } from 'react-redux';

import { StateSchema } from 'app/providers/StoreProvider';

import { getUsername } from 'entities/User/model/selectors/getUsername/getUsername';

import { AlbumListType, getIsLoadingData } from 'pages/MainPage';

import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import Page from 'shared/ui/Page/Page';

import { mainpageReducer } from '../../model/slice/mainpageSlice';
import { AlbumListProvider } from '../AlbumListProvider/AlbumListProvider';
import { QuickBar } from '../QuickBar/QuickBar';
import { BringAuth } from '../BringAuth/BringAuth';

const MainPage: FC = () => {

	const reducers: ReducerList = {
		mainpage: mainpageReducer,
	};

	const username = useSelector(getUsername);

	const isLoadingData = useSelector(getIsLoadingData);

	const commonAlbums = useSelector((state: StateSchema) => state.albums.commonAlbums);
	const userAlbums = useSelector((state: StateSchema) => state.albums.userAlbums);

	// DEPRECAT9ED - NOW STARTED FROM SIDEBAR
	// useEffect(() => {
	// 	if (username) {
	// 		dispatch(fetchCommonAlbums())
	// 		dispatch(fetchUserAlbums())
	// 	}
	// 	else dispatch(fetchCommonAlbums());
	// }, [dispatch, username]);

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

					{username ? (
						<AlbumListProvider
							isLoadingData={isLoadingData}
							type={AlbumListType.USER}
							albums={userAlbums}
						/>
					) : (
						<BringAuth isLoadingData={isLoadingData} />
					)}
				</div>
			</Page>
		</DynamicModuleLoader>
	);
};

export default MainPage;
