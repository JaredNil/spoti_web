'use client'
import { useCallback, useEffect, useState } from 'react'

import {
	LANGUAGE_COOKIE_NAME,
	DEFAULT_LANGUAGE,
	SUPPORTED_LANGUAGES,
	type SupportedLanguage,
} from '../model/constants'

import { getCookie, setCookie } from '@/shared/lib/cookies'

export const useLanguage = () => {
	const [currentLanguage, setCurrentLanguage] =
		useState<SupportedLanguage>(DEFAULT_LANGUAGE)
	const [isLoading, setIsLoading] = useState(true)

	// Инициализация языка из куки или серверного состояния
	useEffect(() => {
		// Проверяем серверное состояние
		const serverLanguage = (window as any)
			.__INITIAL_LANGUAGE__ as SupportedLanguage

		if (serverLanguage && SUPPORTED_LANGUAGES.includes(serverLanguage)) {
			setCurrentLanguage(serverLanguage)
		} else {
			// Fallback к куки
			const savedLanguage = getCookie(
				LANGUAGE_COOKIE_NAME
			) as SupportedLanguage

			if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
				setCurrentLanguage(savedLanguage)
			} else {
				// Определяем язык браузера
				const browserLanguage = navigator.language.split(
					'-'
				)[0] as SupportedLanguage
				const initialLanguage = SUPPORTED_LANGUAGES.includes(
					browserLanguage
				)
					? browserLanguage
					: DEFAULT_LANGUAGE

				setCurrentLanguage(initialLanguage)
				setCookie(LANGUAGE_COOKIE_NAME, initialLanguage)
			}
		}

		setIsLoading(false)
	}, [])

	// Инициализация i18n с сохраненным языком
	useEffect(() => {
		if (isLoading) return

		const initI18n = async () => {
			try {
				// Импортируем i18n
				await import('@/shared/i18n')
				const i18n = (await import('i18next')).default

				// Устанавливаем язык из куки
				await i18n.changeLanguage(currentLanguage)
			} catch (error) {
				console.warn(
					'Failed to initialize i18n with saved language:',
					error
				)
			}
		}

		initI18n()
	}, [currentLanguage, isLoading])

	const changeLanguage = useCallback(async (language: SupportedLanguage) => {
		try {
			// Сохраняем в куки
			setCookie(LANGUAGE_COOKIE_NAME, language)

			// Обновляем состояние
			setCurrentLanguage(language)

			// Обновляем i18n
			const i18n = (await import('i18next')).default
			await i18n.changeLanguage(language)

			// Перезагружаем страницу для применения изменений в SSR компонентах
			window.location.reload()
		} catch (error) {
			console.error('Failed to change language:', error)
		}
	}, [])

	return {
		currentLanguage,
		changeLanguage,
		isLoading,
		supportedLanguages: SUPPORTED_LANGUAGES,
	}
}
