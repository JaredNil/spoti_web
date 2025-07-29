import { AlbumListProvider, QuickBar, BringAuth } from '@/components/homepage';
import { AlbumInterface } from '@/entities/album';
import { FC } from 'react';

export enum AlbumListType {
	COMMON = 0,
	USER = 1,
}

const Home: FC = () => {

	// const reducers: ReducerList = {
	// 	homepage: homepageReducer,
	// };

	// const username = useSelector(getUsername);
  const username = 'user'

	// const isLoadingData = useSelector(getIsLoadingData);
  const isLoadingData = false

	// const commonAlbums = useSelector((state: StateSchema) => state.albums.commonAlbums);
  const commonAlbums = [] as AlbumInterface[]
	// const userAlbums = useSelector((state: StateSchema) => state.albums.userAlbums);

	  const userAlbums = [] as AlbumInterface[]

	return (
			<>
				<div className="mb-2">
					<h1 className="relative text-3xl font-semibold text-white select-none">
						{`Welcome back,  ${(username) ? username : 'Гость'}`}
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
			</>
	);
};

export default Home;
