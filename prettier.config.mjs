/** @type {import("prettier").Config} */
const config = {
	semi: true,
	trailingComma: 'es5',
	singleQuote: true,
	tabWidth: 12,

	useTabs: false,
	printWidth: 150,
	plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
