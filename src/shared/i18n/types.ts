import { resources } from './resources'

export type TranslationKey = keyof typeof resources.ru.translation

declare module 'react-i18next' {
	interface CustomTypeOptions {
		defaultNS: 'translation'
		resources: typeof resources.ru
	}
}
