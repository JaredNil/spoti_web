import { TrackForm } from '../../model/types'

export const UploadViewProperty = ({
	track,
	updateTrack,
}: {
	track: TrackForm
	updateTrack: (id: string, updates: Partial<TrackForm>) => void
}) => {
	return (
		<div className="flex flex-col font-medium">
			<div className="relative my-4">
				<label
					className="absolute top-[-5px] left-1 tracking-wider text-neutral-400/50
					text-xl font-medium select-none"
				>
					TITLE
				</label>
				<input
					type="text"
					value={track.title}
					onChange={(e) =>
						updateTrack(track.id, {
							title: e.target.value,
						})
					}
					className="w-full px-3 py-2 border-b border-l border-b-gray-300 "
					required
				/>
			</div>
			<div className="relative my-4">
				<label
					className="absolute top-[-5px] left-1 tracking-wider text-neutral-400/50
					text-xl font-medium select-none"
				>
					AUTHOR
				</label>
				<input
					type="text"
					value={track.author}
					onChange={(e) =>
						updateTrack(track.id, {
							author: e.target.value,
						})
					}
					className="w-full px-3 py-2 border-b border-l border-b-gray-300 "
					required
				/>
			</div>
		</div>
	)
}
