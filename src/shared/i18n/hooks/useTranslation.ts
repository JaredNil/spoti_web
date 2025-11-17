'use client'
import { useEffect, useState } from 'react'

// Создаем безопасную обертку для SSR
export const useTranslation = () => {
	const [translations, setTranslations] = useState<{
		t: (key: string) => string
		changeLanguage: (lng: string) => void
		currentLanguage: string
	}>({
		t: (key: string) => key,
		changeLanguage: () => {},
		currentLanguage: 'ru',
	})

	useEffect(() => {
		// Инициализируем i18n только на клиенте
		const initI18n = async () => {
			try {
				// Импортируем i18n конфигурацию
				await import('@/shared/i18n')

				// Получаем прямой доступ к i18n инстансу
				const i18n = (await import('i18next')).default

				// Ждем инициализации
				if (!i18n.isInitialized) {
					await new Promise((resolve) => {
						i18n.on('initialized', resolve)
					})
				}

				setTranslations({
					t: (key: string) => {
						try {
							return i18n.t(key)
						} catch {
							return key
						}
					},
					changeLanguage: (lng: string) => {
						try {
							i18n.changeLanguage(lng)
						} catch {
							// Игнорируем ошибки
						}
					},
					currentLanguage: i18n.language || 'ru',
				})

				// Подписываемся на изменения языка
				const handleLanguageChange = (lng: string) => {
					setTranslations((prev) => ({
						...prev,
						currentLanguage: lng,
					}))
				}

				i18n.on('languageChanged', handleLanguageChange)

				// Очистка при размонтировании
				return () => {
					i18n.off('languageChanged', handleLanguageChange)
				}
			} catch (error) {
				console.warn('Failed to initialize i18n:', error)
			}
		}

		initI18n()
	}, [])

	return translations
}
