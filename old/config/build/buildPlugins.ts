import webpack from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { type BuildOptions } from './types/config';


export function buildPlugins({ apiUrl, paths, isDev, project }: BuildOptions): webpack.WebpackPluginInstance[] {
	const plugins = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
			__API__: JSON.stringify(apiUrl),
			__PROJECT__: JSON.stringify(project),
		}),
		new CopyPlugin({
			patterns: [{ from: paths.locales, to: paths.buildLocales }],
		}),
		// new BundleAnalyzerPlugin({
		// 	openAnalyzer: true,
		// }),
		// new BundleAnalyzerPlugin({
		// 	openAnalyzer: false,
		// 	analyzerPort: 'auto',
		// }),
	];

	if (isDev) {
		plugins.push(new ReactRefreshWebpackPlugin());
		plugins.push(new webpack.HotModuleReplacementPlugin());
		// plugins.push(
		// 	new BundleAnalyzerPlugin({
		// 		openAnalyzer: true,
		// 		analyzerPort: 'auto',
		// 	})
		// );
	}

	return plugins;
}
