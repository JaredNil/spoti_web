'use client'
import { AlbumListProvider, QuickBar, BringAuth } from '@/components/homepage';
import { AlbumInterface } from '@/entities/album';
import { userAction } from '@/entities/user';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

enum AlbumListType {
	COMMON = 0,
	USER = 1,
}

const Home: FC = () => {

	// const reducers: ReducerList = {
	// 	homepage: homepageReducer,
	// };

	// const username = useSelector(getUsername);
  const username = useSelector((state: any) => state.user.username);

	// const isLoadingData = useSelector(getIsLoadingData);
  const isLoadingData = false

	// const commonAlbums = useSelector((state: StateSchema) => state.albums.commonAlbums);
	const commonAlbums = [] as AlbumInterface[]
	// const userAlbums = useSelector((state: StateSchema) => state.albums.userAlbums);

	  const userAlbums = [] as AlbumInterface[]

	  const dispatch = useDispatch()

	

	  const clickTest = ()=>{
		console.log('click')
              dispatch(userAction.setUserData({
                username: 'Dem32o',
                isLoading: false,
              }))
            }

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
					            <div onClick={clickTest}>
                {username}
            </div>
				</div>
			</>
	);
};

export default Home;
