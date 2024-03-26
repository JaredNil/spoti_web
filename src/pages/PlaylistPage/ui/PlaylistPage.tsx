import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { TrackViewVender } from 'widgets/TrackListVender/ui/TrackViewVender';

import { TrackModal } from 'features/TrackModal';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import Page from 'shared/ui/Page/Page';

import { getIsShowTrackModal } from '../model/selector/playListPageSelector';
import { playListPageAction, playListPageReducer } from '../model/slice/playListPageSlice';
import { PlaylistTitle } from './PlaylistTitle';

const PlaylistPage: React.FC = () => {
	const dispatch = useAppDispatch();

	const isShowTrackModal = useSelector(getIsShowTrackModal);

	const onCloseModal = useCallback(() => {
		dispatch(playListPageAction.removeTrackModal());
	}, [dispatch]);

	const par = useParams();
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
				<button
					className="z-40 mt-4 h-[200px] w-full bg-red-500"
					type="button"
					onClick={() => dispatch(playListPageAction.toggleLoadingData())}
				>
					DEV_BUTTON - TOGGLE ISLOADING_STATE
				</button>
				<TrackViewVender onShowModal={onShowModal} />
				{isShowTrackModal && <TrackModal isOpen={isShowTrackModal} onClose={() => onCloseModal()} />}
			</Page>
		</DynamicModuleLoader>
	);
};

export default PlaylistPage;
