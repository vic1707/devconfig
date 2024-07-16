## Eslint config

to use this package install it with

```bash
npm install --save-dev @vic1707/eslint-config eslint
```

and create an `eslint.config.js` file with the following content

```js
import vic1707TSConfig from '@vic1707/eslint-config/eslint.ts.config.js';

export default vic1707Config;
```

If you're using typescript you'll want to add some extra rules to your `tsconfig.json` file

```json
{
    // existing config
    "include": ["estlint.config.js" /* existing source dirs*/]
}
```

Here are the scripts I use to lint my code:

```json
{
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
}
```

Original repo can be found here: https://github.com/vic1707/devconfig
