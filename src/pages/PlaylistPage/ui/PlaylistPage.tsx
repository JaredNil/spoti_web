import Page from 'shared/ui/Page/Page';

import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { TrackList } from 'widgets/TrackList';
import { MouseEventHandler, useCallback, useState } from 'react';
import { TrackModal } from 'features/TrackModal';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { playListPageAction, playListPageReducer } from '../model/slice/playListPageSlice';
import { PlaylistTitle } from './PlaylistTitle';
import { getIsShowTrackModal } from '../model/selector/playListPageSelector';

const PlaylistPage: React.FC = () => {
	const par = useParams();
	const dispatch = useAppDispatch();

	const isShowTrackModal = useSelector(getIsShowTrackModal);

	const onCloseModal = useCallback(() => {
		dispatch(playListPageAction.removeTrackModal());
	}, [dispatch]);

	const onShowModal = (id: number) => {
		console.log('onShowModal WORK');
		dispatch(playListPageAction.showTrackModal());
	};

	const reducers: ReducerList = {
		playListPage: playListPageReducer,
	};

	return (
		<DynamicModuleLoader reducers={reducers}>
			<Page className="flex w-full flex-col">
				<PlaylistTitle />
				<button
					className="z-40 mt-4 h-[200px] w-full bg-red-500"
					type="button"
					onClick={() => dispatch(playListPageAction.toggleLoadingData())}
				>
					DASDSADSADADSADS
				</button>
				<TrackList onShowModal={onShowModal} />
				{isShowTrackModal && <TrackModal isOpen={isShowTrackModal} onClose={() => onCloseModal()} />}
			</Page>
		</DynamicModuleLoader>
	);
};

export default PlaylistPage;
