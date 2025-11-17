import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { resources } from './resources'
import './types'

// Кастомный детектор для куки
const cookieDetector = {
	name: 'cookieDetector',
	lookup() {
		if (typeof document === 'undefined') return undefined

		const value = `; ${document.cookie}`
		const parts = value.split(`; preferred-language=`)

		if (parts.length === 2) {
			return parts.pop()?.split(';').shift()
		}

		return undefined
	},
	cacheUserLanguage(lng: string) {
		if (typeof document === 'undefined') return

		const expires = new Date()
		expires.setTime(expires.getTime() + 365 * 24 * 60 * 60 * 1000)

		document.cookie = `preferred-language=${lng};expires=${expires.toUTCString()};path=/`
	},
}

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'ru',
		debug: process.env.NODE_ENV === 'development',

		interpolation: {
			escapeValue: false,
		},

		detection: {
			order: ['cookieDetector', 'localStorage', 'navigator', 'htmlTag'],
			caches: ['cookieDetector', 'localStorage'],
		},
	})

// Регистрируем кастомный детектор
i18n.services.languageDetector.addDetector(cookieDetector)

export default i18n
export { useTranslation } from './hooks/useTranslation'
export type { TranslationKey } from './types'
