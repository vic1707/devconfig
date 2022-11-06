## Prettier config

to use this package install it with

```bash
npm install --save-dev @vic1707/prettier prettier
```

and add this line to your `package.json`

```json
"prettier": "@vic1707/prettier"
```

You will also need a `.prettierignore` file to exclude files from being formatted

```bash
**/package.json
**/package-lock.json
**/coverage
**/dist
**/node_modules
```

The `package.json`, `package-lock.json`, `yarn.lock` etc... files are excluded because the package manager reformats them on install/update and their rules are different from prettier's.

Here are the scripts I use to lint my code:

```json
{
  "format": "prettier --check \"**/*.{js,jsx,ts,tsx,md,mdx,scss,css,json,yml}\" -c",
  "format:fix": "prettier --write \"**/*.{js,jsx,ts,tsx,md,mdx,scss,css,json,yml}\""
}
```

Original repo can be found here: https://github.com/vic1707/devconfig
