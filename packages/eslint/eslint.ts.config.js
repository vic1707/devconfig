/**
 * @typedef {import('eslint').Linter.FlatConfig} FlatConfig
 */
import jsdoc from 'eslint-plugin-jsdoc';
import { configs as TSconfigs } from 'typescript-eslint';

import jsConfigs from './eslint.js.config.js';

/**
 * @type {FlatConfig[]}
 */
export default [
    {
        languageOptions: {
            parserOptions: {
                project: true,
            },
        },
    },
    ...jsConfigs,
    ...TSconfigs.strictTypeChecked,
    ...TSconfigs.stylisticTypeChecked,
    jsdoc.configs['flat/recommended-typescript-flavor-error'],
    {
        rules: {
            // required by plugin `unused-imports` in js config
            '@typescript-eslint/no-unused-vars': 'off',
            // assuming we import ts-reset/promise-catch patch
            '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',

            '@typescript-eslint/array-type': [
                'error',
                {
                    default: 'generic',
                    readonly: 'generic',
                },
            ],
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
            '@typescript-eslint/consistent-type-imports': 'error',
            '@typescript-eslint/explicit-function-return-type': 'error',
            '@typescript-eslint/explicit-module-boundary-types': 'error',
            '@typescript-eslint/no-misused-promises': [
                'error',
                {
                    checksVoidReturn: false,
                },
            ],
            '@typescript-eslint/switch-exhaustiveness-check': [
                'error',
                {
                    allowDefaultCaseForExhaustiveSwitch: false,
                    requireDefaultForNonUnion: true,
                },
            ],
        },
    },
];
