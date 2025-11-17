'use client'

import { useState } from 'react'

import { SearchLoading } from './piece/searchLoading'

import { DropdownHeader } from '@/app/playlist/ui/piece/dropdownHeader'
import { Trackes, TrackesHash } from '@/shared/api'
import { useTranslation } from '@/shared/i18n'
import { Icons } from '@/shared/icons'
import { TrackesList } from '@/shared/ui/trackesList/trackesList'

interface SearchViewProps {
	trackesHash: TrackesHash
	isLoading: boolean
	trackes: Trackes
}

export const SearchView: React.FC<SearchViewProps> = ({
	trackesHash,
	isLoading,
	trackes,
}: SearchViewProps) => {
	const [isCompact, setIsList] = useState<boolean>(false)
	const { t } = useTranslation()
	const toggleList = () => setIsList(!isCompact)
	return (
		<div
			className="my-4 flex w-full flex-col bg-[#121212] px-6 py-4
			tracklist__mainWrapper"
		>
			<div className="flex justify-between h-13">
				<div className="flex items-center">
					<DropdownHeader />
				</div>

				<div className="flex cursor-pointer" onClick={toggleList}>
					{!isCompact ? (
						<div className="flex items-center justify-center">
							<span className="mr-2 select-none text-neutral-400">
								{t('listView')}
							</span>
							<Icons
								name="ListBullets"
								size={22}
								classname="text-neutral-100"
							/>
						</div>
					) : (
						<div className="flex items-center justify-center">
							<span className="mr-2 select-none text-neutral-400">
								{t('compactView')}
							</span>
							<Icons
								name="ListLight"
								size={22}
								classname="text-neutral-100"
							/>
						</div>
					)}
				</div>
			</div>

			{isLoading ? (
				<SearchLoading />
			) : (
				<TrackesList
					trackes={trackes}
					isCompact={isCompact}
					relayTrackesId={trackesHash}
					isLoadingTrackes={isLoading}
				/>
			)}
		</div>
	)
}
