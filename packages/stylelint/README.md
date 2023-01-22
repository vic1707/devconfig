## Stylelint config

to use this package install it with

```bash
npm install --save-dev @vic1707/stylelint-config stylelint
```

and create an `.stylelintrc.json` file with the following content

```json
{
  "extends": "@vic1707/stylelint-config"
}
```

Here are the scripts I use to lint my code:

```json
{
  "stylelint": "stylelint src/**/*.{css,scss,less}",
  "stylelint:fix": "stylelint --fix src/**/*.{css,scss,less}"
}
```

Original repo can be found here: https://github.com/vic1707/devconfig
