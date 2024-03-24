import Page from 'shared/ui/Page/Page';

import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { TrackList } from 'widgets/TrackList';
import { playListPageReducer } from '../model/slice/playListPageSlice';
import { PlaylistTitle } from './PlaylistTitle';

const PlaylistPage: React.FC = () => {
	const par = useParams();

	const reducers: ReducerList = {
		playListPage: playListPageReducer,
	};

	return (
		<DynamicModuleLoader reducers={reducers}>
			<Page className="flex w-full flex-col">
				<PlaylistTitle />
				<TrackList />
			</Page>
		</DynamicModuleLoader>
	);
};

export default PlaylistPage;
