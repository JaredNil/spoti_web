import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { StateSchema } from 'app/providers/StoreProvider';

import { fetchUserAlbums, fetchCommonAlbums } from 'entities/Album';
import { getUsername } from 'entities/User/model/selectors/getUsername/getUsername';

import { AlbumListType, getErrorLoadingData, getIsLoadingData } from 'pages/MainPage';

import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Page from 'shared/ui/Page/Page';

import { Button } from 'shared/ui/Button/Button';
import { mainpageReducer } from '../../model/slice/mainpageSlice';
import { AlbumListProvider } from '../AlbumListProvider/AlbumListProvider';
import { QuickBar } from '../QuickBar/QuickBar';
import { BringAuth } from '../BringAuth/BringAuth';

const MainPage: React.FC = () => {
	const dispatch = useAppDispatch();

	const username = useSelector(getUsername);

	const isLoadingData = useSelector(getIsLoadingData);
	const errorLoadingData = useSelector(getErrorLoadingData);

	const commonAlbums = useSelector((state: StateSchema) => state.albums.commonAlbums);
	const userAlbums = useSelector((state: StateSchema) => state.albums.userAlbums);

	console.log(commonAlbums);
	const reducers: ReducerList = {
		mainpage: mainpageReducer,
	};

	useEffect(() => {
		setTimeout(() => {
			if (username) {
				dispatch(fetchUserAlbums());
			} else {
				dispatch(fetchCommonAlbums());
			}
		}, 1000);
	}, [dispatch, username]);

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
					{errorLoadingData && (
						<Button
							className="my-10 bg-red-600 px-20 font-light text-white"
							onClick={() => window.location.reload()}
						>
							{errorLoadingData}
						</Button>
					)}
					<AlbumListProvider
						type={AlbumListType.COMMON}
						isLoadingData={isLoadingData}
						albums={commonAlbums}
					/>
					{errorLoadingData && (
						<Button
							className="my-10 bg-red-600 px-20 font-light text-white"
							onClick={() => window.location.reload()}
						>
							{errorLoadingData}
						</Button>
					)}
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
