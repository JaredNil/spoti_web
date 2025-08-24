import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: false,
	turbopack: {
		resolveExtensions: [
			'.mdx',
			'.tsx',
			'.ts',
			'.jsx',
			'.js',
			'.mjs',
			'.json',
			'.mp3',
		],
	},
	outputFileTracingExcludes: {
		'*': ['oldapp/**'], // любые пути, которые нужно выкинуть
	},
}

export default nextConfig
