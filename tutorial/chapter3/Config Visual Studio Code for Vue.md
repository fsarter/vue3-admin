Before we complete more work, let's config Visual Studio Code we use that we can have better development experience.Auto lint and format could make our code prettier and development efficiency higher.

If you use other IDE than `VS Code`, you can skip this chapter.

## Install ESLint, Prettier and Volar Plugins
**Volar**

A fast Vue language support extension, provide vue code check ,code highlight, intellisence etc.

**Prettier**

A very easy to use code format tool for web development, which support Typescript, Javascript, Html, CSS and so on.

**ESLint**

With this tool , you can check Javascript grammar mistakes and fix it automatically, it support Typescript also.

## Install Necessary Packages of Prettier and ESLint
```
npm i -D eslint eslint-config-prettier eslint-plugin-prettier prettier
```

**eslint-config-prettier**

This plugin disable unnecessary rules and avoid conflict with Prettier.

**eslint-plugin-prettier**

Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.

## Install Airbnb Rules
```
npx install-peerdeps --dev eslint-config-airbnb
```

## Config ESLint
Create file `.eslintrc.js` for ESLint in project root folder.

**`.eslintrc.js`**
```js
module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  // comment blabla
};
```
Here we use `.js` file as configuration, there is two benefits:
1. we can write comment in `js` file.
2. can be formatted.

Configuration for `Prettier` also stored in `js` file.

## Config Prettier
Create file `.prettierrc.js` for ESLint in project root folder.

**`.prettierrc.js`**
```js
module.exports = {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
};
```

## Config VSCode for Auto Format
Enable auto format avoiding unnecessary operations.

Create folder `.vscode` in project root folder, if it does not exists.

Create file `settings.json` in `.vscode` folder, if it does not exists.

**`.vscode/settings.json`**
```json
{
    "editor.formatOnSave": true,
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
     },
     "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
     },
     "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
     },
     "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
     },
}
```

Now, when you edit any js, html or vue file, and press `Ctrl+S`, the code will be format nicely.

