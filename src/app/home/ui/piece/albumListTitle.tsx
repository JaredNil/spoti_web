'use client'
import { useTranslation } from '@/shared/i18n'
import { AlbumListType } from '../albumsVendor'

interface AlbumListTitleProps {
	type: AlbumListType
}

export const AlbumListTitle: React.FC<AlbumListTitleProps> = ({ type }) => {
	const { t } = useTranslation()

	const getTitle = () => {
		if (type === 'COMMON') return 'Common Jarefy playlist'
		else if (type === 'USER') return t('myPlaylist')
		else if (type === 'COMMUNITY') return t('playlistsOtherUsers')
		return t('somePlaylist')
	}

	return (
		<span
			className="mb-3 mt-5 inline-block
			select-none rounded-lg 
			pr-4 text-2xl pointer-events-none"
		>
			{getTitle()}
		</span>
	)
}
