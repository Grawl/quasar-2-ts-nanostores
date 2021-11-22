/* eslint-env node */
const { resolve } = require('path')
module.exports = {
	root: true,
	parserOptions: {
		// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration
		// https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#eslint
		// Needed to make the parser take into account 'vue' files
		extraFileExtensions: ['.vue'],
		parser: '@typescript-eslint/parser',
		project: resolve(__dirname, './tsconfig.json'),
		tsconfigRootDir: __dirname,
		ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module' // Allows for the use of imports
	},
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		// 'eslint:recommended',
		'plugin:vue/vue3-essential',
		// 'plugin:vue/vue3-strongly-recommended',
		// 'plugin:vue/vue3-recommended',
		'standard-with-typescript',
		'plugin:vue-pug-sfc/recommended',
	],
	plugins: [
		'vue',
		'@typescript-eslint',
	],
	globals: {
		ga: 'readonly', // Google Analytics
		cordova: 'readonly',
		__statics: 'readonly',
		__QUASAR_SSR__: 'readonly',
		__QUASAR_SSR_SERVER__: 'readonly',
		__QUASAR_SSR_CLIENT__: 'readonly',
		__QUASAR_SSR_PWA__: 'readonly',
		process: 'readonly',
		Capacitor: 'readonly',
		chrome: 'readonly',
	},
	rules: {
		// allow async-await
		'generator-star-spacing': 'off',
		// allow paren-less arrow functions
		// 'arrow-parens': 'off',
		// 'one-var': 'off',
		// 'no-void': 'off',
		// 'multiline-ternary': 'off',
		//
		// 'import/first': 'off',
		// 'import/namespace': 'error',
		// 'import/default': 'error',
		// 'import/export': 'error',
		// 'import/extensions': 'off',
		// 'import/no-unresolved': 'off',
		// 'import/no-extraneous-dependencies': 'off',
		// 'prefer-promise-reject-errors': 'off',
		//
		'no-undef': 'off',
		'indent': ['warn', 'tab', { 'SwitchCase': 1 }],
		'space-before-function-paren': ['warn', {
			'anonymous': 'always',
			'named': 'never',
			'asyncArrow': 'always',
		}],
		'quotes': ['error', 'single', {
			'avoidEscape': true,
			'allowTemplateLiterals': true,
		}],
		'quote-props': ['error', 'consistent'],
		'spaced-comment': 'off',
		'no-irregular-whitespace': 'off',
		'no-trailing-spaces': ['warn'],
		'no-tabs': 'off',
		'comma-dangle': ['warn', 'always-multiline'],
		'@typescript-eslint/indent': ['warn', 'tab', { 'SwitchCase': 1 }],
		'@typescript-eslint/space-before-function-paren': ['warn', {
			'anonymous': 'always',
			'named': 'never',
			'asyncArrow': 'always',
		}],
		'@typescript-eslint/member-delimiter-style': ['warn', {
			'multiline': { 'delimiter': 'none' },
			'singleline': { 'delimiter': 'comma' },
		}],
		'@typescript-eslint/consistent-type-definitions': 'off',
		'@typescript-eslint/space-infix-ops': ['error', { 'int32Hint': false }],
		'@typescript-eslint/strict-boolean-expressions': ['error', {
			'allowNullableBoolean': true,
			'allowNullableString': true,
			'allowNullableObject': true,
		}],
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/consistent-type-assertions': 'off',
		'@typescript-eslint/unbound-method': ['error', { 'ignoreStatic': true }],
		'vue/component-tags-order': ['error', {
			'order': ['i18n', 'script', 'template', 'style'],
		}],
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		// allow debugger during development only
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},
}
