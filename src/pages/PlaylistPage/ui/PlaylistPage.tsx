import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import Page from 'shared/ui/Page/Page';

import { playListPageAction, playListPageReducer } from '../model/slice/playlistPageSlice';
import { PlaylistTitle } from './PlaylistTitle';
import {  fetchPlaylistTrackes } from '../model/service/fetchPlaylistTrackes';
import { fetchPlaylistData } from '../model/service/fetchPlaylistData';
import { TrackViewVender } from 'widgets/TrackListVender';
import { useCallback, useEffect } from 'react';
import { getTrackesList, getIsShowTrackModal, getAlbum } from '../model/selector/playlistPageSelector';
import { TrackModal } from 'features/TrackModal';

const PlaylistPage: React.FC = () => {
	const dispatch = useAppDispatch();
	const {id} = useParams();

	const isShowTrackModal = useSelector(getIsShowTrackModal);
	const trackes_id = useSelector(getTrackesList)


	useEffect(()=>{
		if (id) dispatch(fetchPlaylistData(Number(id)))
		else dispatch(playListPageAction.albumNotFound)
	},[])
	useEffect(()=>{
		if(trackes_id) dispatch(fetchPlaylistTrackes(trackes_id))
	}, [trackes_id])

	const onCloseModal = useCallback(() => {
		dispatch(playListPageAction.removeTrackModal());
	}, [dispatch]);

	const onShowModal = (id: number) => {
		dispatch(playListPageAction.showTrackModal());
	};

	const reducers: ReducerList = {
		playListPage: playListPageReducer,
	};

	return (
		<DynamicModuleLoader reducers={reducers}>
			<Page className="flex w-full flex-col">
				<PlaylistTitle />
				<TrackViewVender onShowModal={onShowModal} />
				{isShowTrackModal && <TrackModal isOpen={isShowTrackModal} onClose={() => onCloseModal()} />}
			</Page>
		</DynamicModuleLoader>
	);
};

export default PlaylistPage;
