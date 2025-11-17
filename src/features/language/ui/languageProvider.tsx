'use client'
import { createContext, useContext, ReactNode } from 'react'

import { useLanguage } from '../hooks/useLanguage'
import type { SupportedLanguage } from '../model/constants'

interface LanguageContextType {
	currentLanguage: SupportedLanguage
	changeLanguage: (language: SupportedLanguage) => Promise<void>
	isLoading: boolean
	supportedLanguages: readonly SupportedLanguage[]
}

const LanguageContext = createContext<LanguageContextType | null>(null)

interface LanguageProviderProps {
	children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
	const languageState = useLanguage()

	return (
		<LanguageContext.Provider value={languageState}>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLanguageContext = () => {
	const context = useContext(LanguageContext)

	if (!context) {
		throw new Error(
			'useLanguageContext must be used within LanguageProvider'
		)
	}

	return context
}
