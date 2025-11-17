'use client'
import { useLanguageContext } from './languageProvider'
import { LANGUAGE_LABELS } from '../model/constants'
import { Button } from '@/shared/ui/kit/button'

interface LanguageSwitcherProps {
	className?: string
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
	const { currentLanguage, changeLanguage, supportedLanguages, isLoading } =
		useLanguageContext()

	if (isLoading) {
		return (
			<div className={`flex gap-2 ${className}`}>
				<div className="w-16 h-8 bg-neutral-700 animate-pulse rounded" />
				<div className="w-16 h-8 bg-neutral-700 animate-pulse rounded" />
			</div>
		)
	}

	return (
		<div className={`flex gap-2 ${className}`}>
			{supportedLanguages.map((language) => (
				<Button
					key={language}
					variant={
						currentLanguage === language ? 'default' : 'outline'
					}
					size="sm"
					onClick={() => changeLanguage(language)}
					disabled={currentLanguage === language}
				>
					{LANGUAGE_LABELS[language]}
				</Button>
			))}
		</div>
	)
}
