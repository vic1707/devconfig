/**
 * @typedef {import('eslint').Linter.FlatConfig} FlatConfig
 */
import nest from '@darraghor/eslint-plugin-nestjs-typed';

/**
 * Requires TS
 * @type {FlatConfig[]}
 */
export default [
    {
        plugins: {
            nestPlugin: nest,
        },
        rules: {
            ...nest.configs.recommended.rules,
            '@darraghor/nestjs-typed/api-methods-should-be-guarded': 'warn',
            '@darraghor/nestjs-typed/api-method-should-specify-api-operation': 'error',
            '@darraghor/nestjs-typed/sort-module-metadata-arrays': 'error',
        },
    },
];
