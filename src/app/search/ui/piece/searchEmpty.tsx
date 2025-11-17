import { useTranslation } from '@/shared/i18n'

export const SearchEmpty = () => {
	const { t } = useTranslation()
	return (
		<div className="select-none h-30 flex items-center justify-center text-neutral-400">
			{t('noTracksFound')}
		</div>
	)
}
