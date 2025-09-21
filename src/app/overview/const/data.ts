import { FcIdea } from 'react-icons/fc'
import {
	FiMusic,
	FiSmartphone,
	FiSearch,
	FiFolder,
	FiUser,
	FiZap,
	FiTool,
	FiCode,
	FiServer,
	FiBarChart2,
	FiShield,
	FiCloud,
	FiPackage,
	FiGitBranch,
	FiLayout,
	FiRss,
	FiAperture,
	FiGlobe,
	FiDatabase,
	FiFeather,
	FiLayers,
	FiSun,
	FiChrome,
	FiKey,
	FiBox,
} from 'react-icons/fi'

export const features = [
	{
		icon: FiMusic,
		title: 'Музыкальный плеер',
		desc: 'Кастомный плеер для быстрой работы с музыкой',
	},
	{
		icon: FcIdea,
		title: 'CDN',
		desc: 'Приложение использует прямой CDN для быстрого доступа к данным',
	},
	{
		icon: FiSmartphone,
		title: 'Адаптивный дизайн',
		desc: 'Для всех устройств',
	},
	{
		icon: FiSearch,
		title: 'Поиск треков и альбомов',
		desc: 'Быстрый и удобный даже для треков с внешних ресурсов',
	},
	{
		icon: FiFolder,
		title: 'Управление плейлистами',
		desc: 'Создание и редактирование',
	},
	{ icon: FiUser, title: 'Система аккаунтов', desc: 'Настройки профиля' },
	{
		icon: FiShield,
		title: 'Авторизация и безопасность',
		desc: 'JWT, JOSE, защита маршрутов, OAuth 2.0 - google, yandex, github',
	},
	{ icon: FiZap, title: 'Современный UI', desc: 'Tailwind CSS + shadcn/ui' },
	{
		icon: FiZap,
		title: 'Высокая производительность',
		desc: 'Next.js, Turbopack',
	},
	{
		icon: FiGlobe,
		title: 'SEO и PWA',
		desc: 'SSR, мета-теги, Service-Worker in available',
	},

	{
		icon: FiLayout,
		title: 'Анимации и переходы',
		desc: 'three.js, GSAP для сложных анимаций',
	},
]

export const techStack = [
	{
		icon: FiCode,
		desc: 'Next.js 15.4.4 - App Router, Server Components, fetch-cache',
	},
	{ icon: FiCode, desc: 'React 19.1.0' },
	{ icon: FiCode, desc: 'TypeScript 5' },
	{ icon: FiCode, desc: 'three.js' },
	{ icon: FiCode, desc: 'Redux Toolkit 2.8.2 + RTK Query' },
	{ icon: FiCode, desc: 'React-Hook-Form + Zod' },
	{ icon: FiCode, desc: 'RxJS(потоковых данных)' },
]

export const uiStack = [
	{ icon: FiShield, desc: 'Tailwind CSS 4 utility-first' },
	{ icon: FiShield, desc: 'shadcn/ui + Radix UI' },
	{ icon: FiMusic, desc: 'React Icons / Lucide' },
	{ icon: FiLayers, desc: 'Sass / SCSS' },
	{ icon: FiLayout, desc: 'Адаптивная верстка + Figma' },
	{
		icon: FiSun,
		desc: 'Тёмная / светлая тема (светлую тему в будущем добавим)',
	},
]

export const devTools = [
	{ icon: FiTool, desc: 'FSD Architech' },
	{ icon: FiTool, desc: 'ESLint + Prettier + TSC' },
	{ icon: FiTool, desc: 'CI/CD pipeline with pyramid testing' },
	{ icon: FiZap, desc: 'Turbopack + Vite' },
	{ icon: FiGitBranch, desc: 'Git + GitHub + GitLab' },
	{ icon: FiPackage, desc: 'npm' },
	{ icon: FiAperture, desc: 'Storybook' },
	{ icon: FiChrome, desc: 'Lighthouse + PWA' },
]

export const testing = [
	{
		icon: FiFeather,
		title: 'Unit',
		desc: 'Unit: Jest + React-Testing-Library',
	},
	{
		icon: FiBox,
		title: 'Regression',
		desc: 'Regression: Storybook + Loki(в будущем)',
	},
	{ icon: FiKey, title: 'Mock', desc: 'Mock: MSW (для будущих фич)' },
]

export const architecture = [
	{
		icon: FiServer,
		title: 'Server-Side Rendering',
		desc: 'App Router, Server Components, SSG, ISR, API Routes',
	},
	{
		icon: FiBarChart2,
		title: 'Производительность',
		desc: 'Code-splitting, оптимизация изображений, fetch-cache',
	},
	{
		icon: FiShield,
		title: 'Масштабируемость',
		desc: 'Feature-Sliced Design (FSD), TypeScript, Docker',
	},
	{ icon: FiShield, title: 'Безопасность', desc: 'JWT, JOSE, HTTPS, env' },
	{
		icon: FiTool,
		title: 'Инструменты',
		desc: 'HMR, ESLint, Prettier, Turbopack',
	},
	{
		icon: FiDatabase,
		title: 'Базы данных',
		desc: 'PostgreSQL, SQL, миграции',
	},
]

export const sections = [
	{
		title: 'Технологический стек приложения',
		type: 'tech',
		items: [
			{ cardTitle: 'Stack app', list: techStack },
			{ cardTitle: 'UI dx', list: uiStack },
			{ cardTitle: 'DevTools', list: devTools },
			{ cardTitle: 'Testing', list: testing },
			{ cardTitle: 'Next logic block', list: [] },
			{ cardTitle: 'Next logic block 2', list: [] },
		],
	},
	{ title: 'Основные возможности', type: 'feature', items: features },
	{
		title: 'Архитектурные преимущества',
		type: 'feature',
		items: architecture,
	},
]
