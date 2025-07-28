import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import Page from 'shared/ui/Page/Page';

import { TrackViewVender } from 'widgets/TrackListVender';
import { useCallback, useEffect } from 'react';
import { TrackModal } from 'features/TrackModal';
import { playlistPageAction, playlistPageReducer } from '../model/slice/playlistPageSlice';
import { PlaylistTitle } from './PlaylistTitle';
import { fetchPlaylistTrackes } from '../model/service/fetchPlaylistTrackes';
import { fetchPlaylistData } from '../model/service/fetchPlaylistData';
import { getTrackesList, getIsShowTrackModal } from '../model/selector/playlistPageSelector';

const PlaylistPage: React.FC = () => {
	const dispatch = useAppDispatch();
	const { id } = useParams();

	const isShowTrackModal = useSelector(getIsShowTrackModal);
	const trackesId = useSelector(getTrackesList);

	useEffect(() => {
		if (id) dispatch(fetchPlaylistData(Number(id)));
		else dispatch(playlistPageAction.albumNotFound);
	}, [dispatch, id]);
	useEffect(() => {
		if (trackesId) dispatch(fetchPlaylistTrackes(trackesId));
	}, [dispatch, trackesId]);

	const onCloseModal = useCallback(() => {
		dispatch(playlistPageAction.removeTrackModal());
	}, [dispatch]);

	const onShowModal = () => {
		dispatch(playlistPageAction.showTrackModal());
	};

	const reducers: ReducerList = {
		playlistPage: playlistPageReducer,
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
