/**
 * @typedef {import('eslint').Linter.FlatConfig} FlatConfig
 */
import eslint from '@eslint/js';
import imports from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import promise from 'eslint-plugin-promise';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';

/**
 * @type {FlatConfig[]}
 */
export default [
	eslint.configs.recommended,
	prettierRecommended,
	promise.configs['flat/recommended'],
	jsdoc.configs['flat/recommended-error'],
	{
		plugins: {
			'simple-import-sort': simpleImportSort,
		},
		rules: {
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
		},
	},
	{
		plugins: {
			'unused-imports': unusedImports,
		},
		rules: {
			'no-unused-vars': 'off',
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],
		},
	},
	{
		plugins: {
			import: imports,
		},
		rules: {
			'import/export': 'error',
			'import/first': 'error',
			'import/no-absolute-path': 'error',
			'import/no-default-export': 'error',
			'import/no-duplicates': [
				'error',
				{
					considerQueryString: true,
				},
			],
			'import/no-self-import': 'error',
		},
	},
	{
		rules: {
			// forces template strings instead of concatenation
			'prefer-template': 'error',
			// forces shorthand for object properties when possible
			'object-shorthand': ['error', 'always'],
			// only arrow functions and constructors can be empty
			'no-empty-function': ['error', { allow: ['arrowFunctions', 'constructors'] }],
		},
	},
];
