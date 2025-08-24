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
}

export default nextConfig
