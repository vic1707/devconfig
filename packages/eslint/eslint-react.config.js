/**
 * @typedef {import('eslint').Linter.FlatConfig} FlatConfig
 */
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

/**
 * @type {FlatConfig[]}
 */
export default [
	react.configs.recommended,
	{
		plugins: {
			react,
		},
		rules: {
			...react.configs.recommended.rules,
			'react/no-unused-prop-types': 'error',
			'react/no-unused-state': 'error',
			'react/react-in-jsx-scope': 'off',
			'react/jsx-sort-props': 'error',
			'react/sort-prop-types': [
				'error',
				{
					callbacksLast: true,
					shorthandFirst: true,
				},
			],
		},
	},
	{
		plugins: {
			'react-hooks': reactHooks,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-hooks/exhaustive-deps': 'error',
		},
	},
];
