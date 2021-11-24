module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
	},
	plugins: ['@typescript-eslint/eslint-plugin'],
	extends: [
		'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
		'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
		'@nuxtjs/eslint-config-typescript',
		'plugin:nuxt/recommended',
		'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
		'prettier',
	],
	ignorePatterns: ['node_modules/**/*', '.nuxt/**/*'],
	rules: {
		'@typescript-eslint/interface-name-prefix': 0,
		'@typescript-eslint/explicit-function-return-type': 1,
		'@typescript-eslint/explicit-module-boundary-types': 1,
		'@typescript-eslint/no-explicit-any': 1,
		'@typescript-eslint/no-inferrable-types': 0,
		'@typescript-eslint/ban-types': [
			'error',
			{
				types: {
					String: true,
					Boolean: true,
					Number: true,
					Symbol: true,
					'{}': true,
					Object: true,
					object: true,
					Function: true,
				},
				extendDefaults: true,
			},
		],
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
	},
};
