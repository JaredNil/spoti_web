import { Configuration, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from './../build/types/config';
import { buildScssLoader } from './../build/loaders/ScssLoader';

export default ({ config }): { config: Configuration } => {
	const paths: BuildPaths = {
		src: path.resolve(__dirname, '..', '..', 'src'),
		build: '',
		entry: '',
		html: '',
	};

	config.resolve.modules.push(paths.src);
	config.resolve.extensions.push('.ts', '.tsx');

	// eslint-disable-next-line no-param-reassign
	config.module.rules = config.module.rules.map(
		(rule: RuleSetRule) => {
			if (/svg/.test(rule.test as string)) {
				return {
					...rule,
					exclude: /\.svg$/i,
				};
			}

			return rule;
		}
	);

	config.module.rules.push({
		test: /\.svg$/,
		use: [
			{
				loader: '@svgr/webpack',
			},
		],
	});
	config.module.rules.push(buildScssLoader(true));

	return config;
};
