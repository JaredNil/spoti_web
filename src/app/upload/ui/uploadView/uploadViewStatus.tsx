import { TrackForm } from '../../model/types'

export const UploadViewStatus = ({ track }: { track: TrackForm }) => {
	return (
		<div
			className="flex items-center gap-3 
			absolute bottom-9 right-4"
		>
			{track.status === 'uploading' && (
				<div className="flex items-center gap-2">
					<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-neutral-100"></div>
					<span className="text-sm ">Загрузка...</span>
				</div>
			)}
			{track.status === 'success' && (
				<div className="flex items-center gap-2">
					<svg
						className="w-5 h-5 text-green-500"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fillRule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
							clipRule="evenodd"
						/>
					</svg>
					<span className="text-sm text-green-600">Загружено</span>
				</div>
			)}
			{track.status === 'error' && (
				<div className="flex items-center gap-2">
					<svg
						className="w-5 h-5 text-red-500"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fillRule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
							clipRule="evenodd"
						/>
					</svg>
					<span className="text-sm text-red-600">Ошибка</span>
				</div>
			)}
		</div>
	)
}
