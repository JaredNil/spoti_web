'use client'

import { FC } from 'react'

// import { DynamicModuleLoader, ReducerList } from '../(providers)/storeProvider'

// import {
//     AlbumListProvider,
//     QuickBar,
//     BringAuth,
//     homepageReducer,
//     getIsLoadingData,
// } from '@/app/home'
// import { getUsername, userAction } from '@/entities/user'
// import { AlbumInterface } from '@/shared/api/album'
// import { useAppDispatch, useAppSelector } from '@/shared/hooks'

// const reducers: ReducerList = {
//     homepage: homepageReducer,
// }

const Home: FC = () => {
    // const username = useAppSelector(getUsername)
    //
    // useEffect(()=>{
    // 	dispatch(homepageAction.onLoadingData())
    // })

    // const isLoadingData = useAppSelector(getIsLoadingData)

    // const commonAlbums = useSelector((state: StateSchema) => state.albums.commonAlbums);
    // const commonAlbums = [] as AlbumInterface[]
    // // const userAlbums = useSelector((state: StateSchema) => state.albums.userAlbums);

    // const userAlbums = [] as AlbumInterface[]

    return (
        // <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
        //     <div className="mb-2">
        //         <h1 className="relative text-3xl font-semibold text-white select-none">
        //             {`Welcome back,  ${username ? username : 'Гость'}`}
        //         </h1>
        //     </div>

        //     <div className="mt-2">
        //         <QuickBar isLoadingData={isLoadingData} />

        //         <AlbumListProvider
        //             type={AlbumListType.COMMON}
        //             isLoadingData={isLoadingData}
        //             albums={commonAlbums}
        //         />

        //         {username ? (
        //             <AlbumListProvider
        //                 isLoadingData={isLoadingData}
        //                 type={AlbumListType.USER}
        //                 albums={userAlbums}
        //             />
        //         ) : (
        //             <BringAuth isLoadingData={isLoadingData} />
        //         )}
        //         <div onClick={clickTest}>{username}</div>
        //     </div>
        // </DynamicModuleLoader>
        <div></div>
    )
}

export default Home
