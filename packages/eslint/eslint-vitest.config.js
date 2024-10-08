/**
 * @typedef {import('eslint').Linter.FlatConfig} FlatConfig
 */
import vitest from 'eslint-plugin-vitest';

/**
 * @type {FlatConfig[]}
 */
export default [
	{
		files: ['test/**', '**.spec.js', '**.spec.ts', '**.test.js', '**.test.ts'],
		plugins: {
			vitest,
		},
		rules: {
			// 'vitest/consistent-test-filename': 'error',
			// 'vitest/consistent-test-it': 'error',
			// 'vitest/max-expects': 'error',
			'vitest/max-nested-describe': ['error', { max: 3 }],
			'vitest/no-alias-methods': 'error',
			'vitest/no-conditional-expect': 'error',
			'vitest/no-conditional-in-test': 'error',
			'vitest/no-conditional-tests': 'error',
			'vitest/no-disabled-tests': 'error',
			'vitest/no-done-callback': 'error',
			// 'vitest/no-duplicate-hooks': 'error',
			'vitest/no-focused-tests': 'error',
			// 'vitest/no-hooks': 'error',
			// 'vitest/no-interpolation-in-snapshots': 'error',
			// 'vitest/no-large-snapshots': 'error',
			// 'vitest/no-mocks-import': 'error',
			// 'vitest/no-restricted-matchers': 'error',
			// 'vitest/no-restricted-vi-methods': 'error',
			// 'vitest/no-standalone-expect': 'error',
			// 'vitest/no-test-prefixes': 'error',
			'vitest/no-test-return-statement': 'error',
			'vitest/prefer-called-with': 'warn',
			'vitest/prefer-comparison-matcher': 'error',
			'vitest/prefer-each': 'error',
			'vitest/prefer-equality-matcher': 'error',
			'vitest/prefer-expect-assertions': 'error',
			'vitest/prefer-expect-resolves': 'error',
			'vitest/prefer-hooks-in-order': 'error',
			'vitest/prefer-hooks-on-top': 'error',
			// 'vitest/prefer-lowercase-title': 'error',
			'vitest/prefer-mock-promise-shorthand': 'error',
			'vitest/prefer-snapshot-hint': 'error',
			'vitest/prefer-spy-on': 'error',
			'vitest/prefer-strict-equal': 'error',
			'vitest/prefer-to-be': 'error',
			// 'vitest/prefer-to-be-falsy': 'error',
			'vitest/prefer-to-be-object': 'error',
			// 'vitest/prefer-to-be-truthy': 'error',
			'vitest/prefer-to-contain': 'error',
			'vitest/prefer-to-have-length': 'error',
			'vitest/prefer-todo': 'error',
			'vitest/require-hook': 'error',
			'vitest/require-to-throw-message': 'error',
			'vitest/require-top-level-describe': 'error',
		},
	},
];
