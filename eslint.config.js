/**
 * @typedef {import('eslint').Linter.FlatConfig} FlatConfig
 */
import JSConfig from './packages/eslint/eslint.js.config.js';

/**
 * @type {FlatConfig[]}
 */
export default [
	...JSConfig,
	{
		rules: {
			'import/no-default-export': 'off',
		},
	},
];
