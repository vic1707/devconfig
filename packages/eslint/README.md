## Eslint config

to use this package install it with

```bash
npm install --save-dev @vic1707/eslint-config eslint
```

and create an `.eslintrc.js` file with the following content

```js
module.exports = {
  root: true,
  extends: ['@vic1707'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  }
};
```

If you're using typescript you'll want to add some extra rules to your `tsconfig.json` file

```json
{
  // existing config
  "include": [".eslintrc.js" /* existing source dirs*/]
}
```

Here are the scripts I use to lint my code:

```json
{
  "lint": "eslint src --ext .ts,.tsx",
  "lint:fix": "eslint src --ext .ts,.tsx --fix"
}
```

Original repo can be found here: https://github.com/vic1707/devconfig
