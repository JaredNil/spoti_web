import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
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
