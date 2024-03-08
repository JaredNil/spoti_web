module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb',
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:prettier/recommended',
		'plugin:storybook/recommended',
	],
	globals: {
		__IS_DEV__: true,
		__API__: true,
	},
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},
	plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
	ignorePatterns: [
		'build/',
		'config/',
		'prettier.config.js',
		'webpack.config.ts',
		'json-server/',
		'tailwind.config.ts',
		'postcss.config.js',
	],
	rules: {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'prefer-const': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-explicit-any': 'error',
		'react/react-in-jsx-scope': 'off',
		'import/prefer-default-export': 'off',
		'import/extensions': 'off',
		'react/function-component-definition': 'off',
		'react/require-default-props': 'off',
		indent: ['error', 'tab'],
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
		'react/jsx-props-no-spreading': 'warn',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'no-param-reassign': 'off',
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
	},
};
