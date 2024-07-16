/**
 * @typedef {import('eslint').Linter.FlatConfig} FlatConfig
 */
import { configs as TSconfigs } from 'typescript-eslint';

import jsConfigs from './eslint.js.config.js';

/**
 * @type {FlatConfig[]}
 */
export default [
    ...jsConfigs,
    ...TSconfigs.strictTypeChecked,
    ...TSconfigs.stylisticTypeChecked,
    {
        rules: {
            // required by plugin `unused-imports` in js config
            '@typescript-eslint/no-unused-vars': 'off',
        },
    },
];
