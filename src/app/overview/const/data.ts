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
		desc: 'Полный набор функций управления',
	},
	{
		icon: FiSmartphone,
		title: 'Адаптивный дизайн',
		desc: 'Для всех устройств',
	},
	{
		icon: FiSearch,
		title: 'Поиск треков и альбомов',
		desc: 'Быстрый и удобный',
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
		desc: 'JWT, JOSE, защита маршрутов',
	},
	{ icon: FiZap, title: 'Современный UI', desc: 'Tailwind CSS + shadcn/ui' },
	{
		icon: FiZap,
		title: 'Высокая производительность',
		desc: 'Next.js, Turbopack, PPR',
	},
	{
		icon: FiGlobe,
		title: 'SEO и PWA',
		desc: 'SSR, мета-теги, Service-Worker',
	},
	{
		icon: FiRss,
		title: 'WebSockets / WSS',
		desc: 'Real-time уведомления и чаты',
	},
	{
		icon: FiLayout,
		title: 'Анимации и переходы',
		desc: 'GSAP, react-spring',
	},
]

export const techStack = [
	{
		icon: FiCode,
		title: 'Next.js 15.4.4',
		desc: 'App Router, Server Components, fetch-cache, Server Actions, PPR',
	},
	{ icon: FiCode, desc: 'React 19.1.0' },
	{ desc: 'TypeScript 5' },
	{ desc: 'Node.js 20' },
	{ icon: FiDatabase, desc: 'PostgreSQL + SQL' },
	{ icon: FiCode, desc: 'GraphQL + REST API' },
	{ icon: FiCode, desc: 'Redux Toolkit 2.8.2 + RTK Query' },
	{ icon: FiCode, desc: 'TanStack Query' },
	{ icon: FiCode, desc: 'Zustand / RxJS / MobX' },
	{ icon: FiCode, desc: 'React-Hook-Form + Zod' },
]

/* ---------- UI / СТИЛИЗАЦИЯ ---------- */
export const uiStack = [
	{ icon: FiShield, title: 'Tailwind CSS 4', desc: 'utility-first' },
	{ icon: FiShield, desc: 'shadcn/ui + Radix UI' },
	{ icon: FiMusic, desc: 'React Icons / Lucide' },
	{ icon: FiLayers, desc: 'Sass / SCSS' },
	{ icon: FiLayout, desc: 'Адаптивная верстка + Figma' },
	{ icon: FiSun, desc: 'Тёмная / светлая тема' },
]

export const devTools = [
	{ icon: FiTool, desc: 'ESLint + Prettier' },
	{ icon: FiZap, desc: 'Turbopack + Vite' },
	{ icon: FiGitBranch, desc: 'Git + GitHub + GitLab' },
	{ icon: FiPackage, desc: 'npm / yarn / pnpm' },
	{ icon: FiCloud, desc: 'Docker + CI/CD' },
	{ icon: FiAperture, desc: 'Storybook' },
	{ icon: FiChrome, desc: 'Lighthouse + PWA' },
]

export const testing = [
	{ icon: FiFeather, title: 'Unit', desc: 'Jest + React-Testing-Library' },
	{ icon: FiShield, title: 'e2e', desc: 'Playwright / Cypress / Puppeteer' },
	{ icon: FiBox, title: 'Regression', desc: 'Chromatic / Loki' },
	{ icon: FiKey, title: 'Mock', desc: 'MSW (mock-service-worker)' },
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
	{ title: 'Основные возможности', type: 'feature', items: features },
	{
		title: 'Технологический стек',
		type: 'tech',
		items: [{ cardTitle: 'Stack', list: techStack }],
	},
	{
		title: 'UI и стилизация',
		type: 'tech',
		items: [{ cardTitle: 'UI', list: uiStack }],
	},
	{
		title: 'Инструменты разработки',
		type: 'tech',
		items: [{ cardTitle: 'DevTools', list: devTools }],
	},
	{
		title: 'Тестирование',
		type: 'tech',
		items: [{ cardTitle: 'Testing', list: testing }],
	},
	{
		title: 'Архитектурные преимущества',
		type: 'feature',
		items: architecture,
	},
]
