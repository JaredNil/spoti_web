import { TrackForm } from '../../model/types'

export const UploadViewTitle = ({
	track,
	index,
}: {
	track: TrackForm
	index: number
}) => {
	return (
		<>
			<div className="text-base tracking-wider truncate select-none">
				{index + 1 + '. ' + track.file.name}
			</div>
			<div className="absolute bottom-2 left-4 select-none -tracking-tighter text-sm">
				{(track.file.size / 1024 / 1024).toFixed(2)}
				MB
			</div>
			<div className="absolute bottom-2 right-4 select-none -tracking-tighter text-sm">
				{track.file.type}
			</div>
		</>
	)
}
