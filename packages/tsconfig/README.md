## Tsconfig file

to use this package install it with

```bash
npm install --save-dev @vic1707/tsconfig
```

and add these lines to your `tsconfig.json`

```json
"extends": "@vic1707/tsconfig/base.json", // or any other config file
"include": ["src", ".eslintrc.js"]        // required for eslint
```

Original repo can be found here: https://github.com/vic1707/devconfig
