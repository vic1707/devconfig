/**
 * @typedef {import('eslint').Linter.FlatConfig} FlatConfig
 */
import jest from 'eslint-plugin-jest';

/**
 * @type {FlatConfig[]}
 */
export default [
	{
		files: ['test/**', '**.spec.js', '**.spec.ts', '**.test.js', '**.test.ts'],
		...jest.configs['flat/recommended'],
		...jest.configs['flat/style'],
	},
];
