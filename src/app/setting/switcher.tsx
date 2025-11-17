'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from '@/shared/i18n'
import { useLanguageContext } from '@/features/language/ui/languageProvider'

type Theme = 'spotify' | 'gradient'

const THEMES: Theme[] = ['spotify', 'gradient']

export default function Switcher({ classname }: { classname?: string }) {
	const [theme, setTheme] = useState<Theme>('spotify')
	const { t } = useTranslation()
	const {
		currentLanguage,
		changeLanguage: changeAppLanguage,
		isLoading,
	} = useLanguageContext()

	useEffect(() => {
		const t = (localStorage.getItem('theme') as Theme) || 'spotify'
		setTheme(t)
		applyTheme(t)
	}, [])

	const applyTheme = (t: Theme) => {
		const root = document.documentElement
		if (t === 'gradient') {
			root.setAttribute('data-theme', 'gradient')
		} else {
			root.removeAttribute('data-theme')
		}
	}

	const handleTheme = (t: Theme) => {
		setTheme(t)
		localStorage.setItem('theme', t)
		applyTheme(t)
	}

	const handleLang = (language: 'ru' | 'en') => {
		changeAppLanguage(language)
	}

	return (
		<div className={`flex flex-wrap h-24 w-full ${classname}`}>
			<div className="w-full sm:w-1/2 py-2 px-10 sm:p-2 h-full ">
				<div
					className="flex flex-col items-start justify-start p-4 h-full w-full
					bg-neutral-700/50 hover:bg-neutral-600/60
					transition"
				>
					<div
						className="text-xs font-semibold uppercase tracking-wider 
					text-neutral-400"
					>
						{t('theme')}
					</div>
					<div className="flex flex-wrap w-full grow justify-center items-center">
						{THEMES.map((themeItem) => (
							<label key={themeItem} className="grow ">
								<div className="inline-flex items-center gap-2 cursor-pointer ">
									<input
										type="radio"
										name="theme"
										checked={theme === themeItem}
										onChange={() => handleTheme(themeItem)}
										className="hidden"
									/>
									<div
										className={`grid place-items-center
										w-4 h-4 rounded-full border-2 transition
										${theme === themeItem ? 'border-green-500' : 'border-neutral-600'}`}
									>
										<span
											className={`w-2 h-2 rounded-full  transition
											${theme === themeItem ? 'bg-green-500' : 'bg-transparent'} `}
										/>
									</div>
									<span className="text-sm capitalize">
										{themeItem}
									</span>
								</div>
							</label>
						))}
					</div>
				</div>
			</div>

			<div className="w-full sm:w-1/2 py-2 px-10 sm:p-2 h-full">
				<div
					className="flex flex-col items-start justify-start p-4 h-full
					bg-neutral-700/50 hover:bg-neutral-600/60
					transition"
				>
					<div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
						{t('language')}
					</div>
					<div className="grow flex gap-2">
						{isLoading ? (
							<div className="flex gap-2">
								<div className="w-12 h-8 bg-neutral-700 animate-pulse rounded" />
								<div className="w-12 h-8 bg-neutral-700 animate-pulse rounded" />
							</div>
						) : (
							<>
								<button
									onClick={() => handleLang('ru')}
									className={`px-3 py-1 rounded-md text-sm transition cursor-pointer
										${currentLanguage === 'ru' ? 'bg-green-500 text-white' : 'bg-neutral-700'}`}
								>
									RU
								</button>
								<button
									onClick={() => handleLang('en')}
									className={`px-3 py-1 rounded-md text-sm transition cursor-pointer
										${currentLanguage === 'en' ? 'bg-green-500 text-white' : 'bg-neutral-700'}`}
								>
									EN
								</button>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
