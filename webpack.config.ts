import type webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { type BuildEnv, type BuildPaths } from './config/build/types/config';

export default (env: BuildEnv): webpack.Configuration => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
		locales: path.resolve(__dirname, 'public', 'locales'),
		buildLocales: path.resolve(__dirname, 'build', 'locales'),
	};

	const PORT_DEV_SERVER = env.port || 3000;
	const MODE = env.mode || 'development';
	const apiUrl = env.apiUrl || 'http://localhost:8000';
	const isDev = MODE === 'development';

	const config: webpack.Configuration = buildWebpackConfig({
		mode: MODE,
		paths,
		isDev,
		port: PORT_DEV_SERVER,
		apiUrl,
		project: 'frontend',
	});

	return config;
};
