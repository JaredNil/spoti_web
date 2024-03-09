import { useTranslation } from 'react-i18next';

import { Header } from 'widgets/Header';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAlbumCommonData } from 'entities/Album/model/selectors/getAlbumData';
import { TrackList } from 'widgets/TrackList';
import { PlaylistTitle } from './PlaylistTitle';

const PlaylistPage: React.FC = () => {
	const data = useSelector(getAlbumCommonData)[0];
	const { author, href, title, imagePath, id } = data;

	return (
		<div className="h-full w-full overflow-y-auto rounded-lg  bg-neutral-900">
			<Header />
			<PlaylistTitle imagePath={imagePath} title={title} author={author} />
			<TrackList id={id} />
		</div>
	);
};

export default PlaylistPage;
