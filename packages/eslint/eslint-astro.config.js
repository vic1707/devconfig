/**
 * @typedef {import('eslint').Linter.FlatConfig} FlatConfig
 */
import astro from 'eslint-plugin-astro';

/**
 * @type {FlatConfig[]}
 */
export default [...astro.configs['flat/recommended'], ...astro.configs['flat/jsx-a11y-strict']];
