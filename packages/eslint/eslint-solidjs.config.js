/**
 * @typedef {import('eslint').Linter.FlatConfig} FlatConfig
 */
import solid from 'eslint-plugin-solid';

/**
 * Requires TS
 * @type {FlatConfig[]}
 */
export default [
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            solid,
        },
        rules: {
            ...solid.configs['flat/typescript'].rules,
            'solid/imports': 'error',
            'solid/no-array-handlers': 'error',
            'solid/no-innerhtml': 'error',
            'solid/no-proxy-apis': 'error',
            'solid/no-react-deps': 'error',
            'solid/no-react-specific-props': 'error',
            'solid/prefer-show': 'error',
            'solid/reactivity': 'error',
        },
    },
];
