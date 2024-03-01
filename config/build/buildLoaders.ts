import { RuleSetRule } from 'webpack';
import { type BuildOptions } from './types/config';
import { buildScssLoader } from './loaders/ScssLoader';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
	const svgLoader = {
		test: /\.svg$/,
		use: [
			{
				loader: '@svgr/webpack',
			},
		],
	};
	const scssLoader = buildScssLoader(isDev);

	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	return [fileLoader, svgLoader, tsLoader, scssLoader];
}
