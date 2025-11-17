import { TrackForm } from '../../model/types'

import { Button } from '@/shared/ui/kit/button'
import { useTranslation } from '@/shared/i18n'

export const UploadViewControllers = ({
	track,
	removeTrack,
}: {
	track: TrackForm
	removeTrack: (id: string) => void
}) => {
	const { t } = useTranslation()

	return (
		<div className="w-full flex justify-center items-center gap-6">
			<Button
				type="submit"
				disabled={
					track.status === 'uploading' || track.status === 'success'
				}
				className="px-4 py-2 bg-emerald-500  text-white rounded-md hover:bg-emerald-500/40  disabled:bg-emerald-500/10 disabled:cursor-not-allowed text-sm"
			>
				{t('send')}
			</Button>
			<Button
				type="button"
				onClick={() => removeTrack(track.id)}
				className="px-3 py-2 bg-red-600 hover:bg-red-600/45 rounded-md text-sm"
			>
				{t('delete')}
			</Button>
		</div>
	)
}
