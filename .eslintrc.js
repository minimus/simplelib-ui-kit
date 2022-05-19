module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	env: {es6: true},
	plugins: ['@typescript-eslint', 'import', 'prettier'],
	extends: [
		'eslint:recommended',
		// 'prettier',
		// 'airbnb',
		// 'airbnb-typescript',
		// 'airbnb/hooks',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		},
		project: './tsconfig.json',
	},

	rules: {
		indent: 0, // ['error', 4],

		// `js` and `jsx` are common extensions
		// `mjs` is for `universal-router` only, for now
		'import/extensions': [
			'error',
			'always',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
				mjs: 'never',
			},
		],
		// semi: ['error', 'never'],
		// 'block-spacing': ['error', 'always'],
		// 'no-tabs': ["error", { allowIndentationTabs: true }],

		// Not supporting nested package.json yet
		// https://github.com/benmosher/eslint-plugin-import/issues/458
		'import/no-extraneous-dependencies': 'off',

		// Recommend not to leave any console.log in your code
		// Use console.error, console.warn and console.info instead
		'no-console': [
			'error',
			{
				allow: ['warn', 'error', 'info'],
			},
		],

		// Allow js files to use jsx syntax, too
		'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', 'ts', 'tsx'] }],

		// Automatically convert pure class to function by
		// babel-plugin-transform-react-pure-class-to-function
		// https://github.com/kriasoft/react-starter-kit/pull/961
		'react/prefer-stateless-function': 'off',

		// Enforce state initialization style
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
		'react/state-in-constructor': 'off',

		// Enforces where React component static properties should be positioned
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
		'react/static-property-placement': 'off',

		// Require CamelCase naming
		camelcase: 'off',

		// Prefer default export
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
		'import/prefer-default-export': 'off',

		// ESLint plugin for prettier formatting
		// https://github.com/prettier/eslint-plugin-prettier
		'prettier/prettier': [
			'error',
			{
				// https://github.com/prettier/prettier#options
				singleQuote: true,
				trailingComma: 'all',
				useTabs: true,
				tabWidth: 4,
				printWidth: 120,
				semi: false,
			},
		],
	},

	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"]
		},
		"import/resolver": {
			typescript: {
				alwaysTryTypes: true,
				project: './tsconfig.json',
			},
		},
	},

	ignorePatterns: [
		'/.build',
		'/.cache',
		'/.git',
		'/.husky',
		'/.yarn',
		'/**/__snapshots__',
	],
}