'use client'
import { useLanguageContext } from '@/features/language/ui/languageProvider'
import { Button } from '../kit/button'

export const LanguageSwitcher = () => {
	const { changeLanguage, currentLanguage, isLoading } = useLanguageContext()

	const toggleLanguage = () => {
		const newLanguage = currentLanguage === 'ru' ? 'en' : 'ru'
		changeLanguage(newLanguage)
	}

	if (isLoading) {
		return (
			<Button
				variant="outline"
				size="sm"
				className="text-xs w-12"
				disabled
			>
				...
			</Button>
		)
	}

	return (
		<Button
			onClick={toggleLanguage}
			variant="outline"
			size="sm"
			className="text-xs"
		>
			{currentLanguage === 'ru' ? 'EN' : 'RU'}
		</Button>
	)
}
