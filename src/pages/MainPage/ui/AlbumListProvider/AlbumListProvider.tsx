import { AlbumList } from 'entities/Album';

interface AlbumListProviderProps {
	title: string;
	isLoadingData: boolean;
}

export const AlbumListProvider: React.FC<AlbumListProviderProps> = ({ title, isLoadingData }: AlbumListProviderProps) => {
	if (isLoadingData) return <>Sceleton</>;
	return <>DATA</>;
};
