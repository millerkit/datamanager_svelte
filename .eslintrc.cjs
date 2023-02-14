module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'airbnb-typescript',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:eslint-comments/recommended',
		'plugin:promise/recommended',
		'plugin:import/recommended',
		'prettier',
	],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript'),
		'import/resolver': {
			'eslint-import-resolver-custom-alias': {
				'alias': {
					'$lib':'./src/lib',
					'$app':'./.svelte-kit/runtime/app',
					'@sveltejs':'./.svelte-kit/dev'
				},
				'extensions': ['.js','.ts']
			},
		}
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
	},
	rules: {
		'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
		'import/no-mutable-exports': 0,
		'no-labels': 0,
		'no-restricted-syntax': 0,
		'react/jsx-filename-extension': [0],
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
