'use client'
import { useParams } from "next/navigation";
import { FC, useEffect } from "react";


import { getAlbum } from "../model/selector/playlistPageSelector";
import { fetchPlaylistData } from "../model/service/fetchPlaylistData";
import { playlistPageReducer } from "../model/slice/playlistPageSlice";
import { PlaylistTitle } from "../ui/playlistTitle";

import { DynamicModuleLoader, ReducerList } from "@/app/(providers)/storeProvider";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";

const reducers: ReducerList = {
	playlistpage: playlistPageReducer,
};

export const  PlaylistPageClient: FC = () => {
    const dispatch = useAppDispatch();
    const {id} = useParams()
	
	// const album = useAppSelector(getAlbum);

	const clickHandler = () => {
		if (id) dispatch(fetchPlaylistData(Number(id)) as any)
	}

	// const isShowTrackModal = useSelector(getIsShowTrackModal);
	// const trackes_id = useSelector(getTrackesList)

    // 	useEffect(()=>{
	// 	if (id) dispatch(fetchPlaylistData(Number(id)))
	// 	else dispatch(playlistPageAction.albumNotFound)
	// },[])
	// // useEffect(()=>{
	// 	if(trackes_id) dispatch(fetchPlaylistTrackes(trackes_id))
	// }, [trackes_id])

	// const onCloseModal = useCallback(() => {
	// 	dispatch(playlistPageAction.removeTrackModal());
	// }, [dispatch]);

	// const onShowModal = useCallback(() => {
	// 	dispatch(playlistPageAction.showTrackModal());
    // }, [dispatch]);

    return (
		<DynamicModuleLoader reducers={reducers}>
				<div className="flex w-full flex-col">
					<p>Playlist: {id}</p>
					<div onClick={clickHandler}>CLICK</div>
					<PlaylistTitle />

					{/* <TrackViewVender onShowModal={onShowModal} /> */}
					{/* {isShowTrackModal && <TrackModal isOpen={isShowTrackModal} onClose={() => onCloseModal()} />} */}
				</div>
		</DynamicModuleLoader>
    );
};
