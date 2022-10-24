## Eslint config

to use this package install it with

```bash
npm install --save-dev @vic1707/eslint-config
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
  "include": [/* existing source dirs*/, ".eslintrc.js"],
}
```

Original repo can be found here: https://github.com/vic1707/devconfig
