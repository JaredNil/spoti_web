'use client'
import { useParams } from "next/navigation";
import { FC } from "react";


import { DynamicModuleLoader, ReducerList } from "@/app/(providers)/storeProvider";
import { playlistPageReducer, PlaylistTitle } from "@/components/playlistPage";
import { useAppDispatch } from "@/shared/hooks";

const reducers: ReducerList = {
	playlistpage: playlistPageReducer,
};

const PlaylistPage: FC = () => {

    const dispatch = useAppDispatch();
	const {id} = useParams()


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
					<PlaylistTitle />
					{/* <TrackViewVender onShowModal={onShowModal} /> */}
					{/* {isShowTrackModal && <TrackModal isOpen={isShowTrackModal} onClose={() => onCloseModal()} />} */}
				</div>
		</DynamicModuleLoader>
    );
};

export default PlaylistPage
