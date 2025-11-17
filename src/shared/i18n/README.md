# Интернационализация (i18n)

Этот проект использует react-i18next для поддержки многоязычности.

## Структура файлов

```
src/shared/i18n/
├── index.ts              # Основная конфигурация i18n
├── resources.ts          # Экспорт всех ресурсов
├── types.ts             # TypeScript типы
├── hooks/
│   └── useTranslation.ts # Хук для использования переводов
└── locales/
    ├── ru.ts            # Русские переводы
    └── en.ts            # Английские переводы
```

## Использование

### В компонентах

```tsx
'use client'
import { useTranslation } from '@/shared/i18n'

export const MyComponent = () => {
	const { t } = useTranslation()

	return (
		<div>
			<h1>{t('login')}</h1>
			<p>{t('loginDescription')}</p>
		</div>
	)
}
```

### Переключение языка

```tsx
import { useTranslation } from '@/shared/i18n'

export const LanguageSwitcher = () => {
	const { changeLanguage, currentLanguage } = useTranslation()

	const toggleLanguage = () => {
		const newLanguage = currentLanguage === 'ru' ? 'en' : 'ru'
		changeLanguage(newLanguage)
	}

	return (
		<button onClick={toggleLanguage}>
			{currentLanguage === 'ru' ? 'EN' : 'RU'}
		</button>
	)
}
```

## Добавление новых переводов

1. Добавьте ключ и значение в `src/shared/i18n/locales/ru.ts`
2. Добавьте соответствующий перевод в `src/shared/i18n/locales/en.ts`
3. Используйте в компоненте через `t('yourKey')`

## Поддерживаемые языки

- Русский (ru) - по умолчанию
- Английский (en)

## Автоматическое определение языка

Система автоматически определяет язык пользователя в следующем порядке:

1. Сохраненный в localStorage
2. Язык браузера
3. HTML тег lang
4. Fallback на русский язык
