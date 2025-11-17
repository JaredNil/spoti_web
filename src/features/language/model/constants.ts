export const LANGUAGE_COOKIE_NAME = 'preferred-language'
export const DEFAULT_LANGUAGE = 'ru'
export const SUPPORTED_LANGUAGES = ['en', 'ru'] as const

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]

export const LANGUAGE_LABELS: Record<SupportedLanguage, string> = {
	en: 'English',
	ru: 'Русский',
}
