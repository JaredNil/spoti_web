import { cookies } from 'next/headers'

import {
	LANGUAGE_COOKIE_NAME,
	DEFAULT_LANGUAGE,
	SUPPORTED_LANGUAGES,
	type SupportedLanguage,
} from '../model/constants'

export async function getServerLanguage(): Promise<SupportedLanguage> {
	try {
		const cookieStore = await cookies()
		const languageCookie = cookieStore.get(LANGUAGE_COOKIE_NAME)

		if (
			languageCookie?.value &&
			SUPPORTED_LANGUAGES.includes(
				languageCookie.value as SupportedLanguage
			)
		) {
			return languageCookie.value as SupportedLanguage
		}
	} catch (error) {
		console.warn('Failed to read language cookie on server:', error)
	}

	return DEFAULT_LANGUAGE
}
