'use client'
import { FC, useEffect } from 'react';

import { DynamicModuleLoader, ReducerList } from './(providers)/storeProvider';

import { AlbumListProvider, QuickBar, BringAuth } from '@/components/homepage';
import { getIsLoadingData } from '@/components/homepage';
import { homepageAction, homepageReducer } from '@/components/homepage/model/slice/homepageSlice';
import { AlbumInterface } from '@/entities/album';
import { getUsername, userAction } from '@/entities/user';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';

enum AlbumListType {
	COMMON = 0,
	USER = 1,
}
	const reducers: ReducerList = {
		homepage: homepageReducer,
	};

const Home: FC = () => {

  	const username = useAppSelector(getUsername);

	// useEffect(()=>{
	// 	dispatch(homepageAction.onLoadingData())
	// })

  	const isLoadingData = useAppSelector(getIsLoadingData)

	// const commonAlbums = useSelector((state: StateSchema) => state.albums.commonAlbums);
	const commonAlbums = [] as AlbumInterface[]
	// const userAlbums = useSelector((state: StateSchema) => state.albums.userAlbums);

	  const userAlbums = [] as AlbumInterface[]

	  const dispatch = useAppDispatch()

	

	  const clickTest = ()=>{
		console.log('click')
              dispatch(userAction.setUserData({
                username: 'Dem32o',
                isLoading: false,
              }))
            }

	return (
			<DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
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
			</DynamicModuleLoader>
	);
};

export default Home;
