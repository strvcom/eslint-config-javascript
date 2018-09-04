# TypeScript

> 🔥 Experimental. Please report bugs, conflicts and other compatibility problems 🙏.

These configuration files are suitable to lint TypeScript code.

> **⚠️ This ruleset requires some additional configuration steps in your project. Please read below for detailed instructions.**

## Installation

You must install an ESLint-compatible TypeScript parser and add it to your _.eslintrc.js_ file:

```sh
npm i -D typescript-eslint-parser@latest
```

In addition to using this ruleset, you should also choose one base ruleset depending on your target platform:

- `@strv/javascript/environments/nodejs/v10`
- `@strv/javascript/environments/react/v16`

A full configuration for a TypeScript on Node.js project:

```js
// .eslintrc.js
'use strict'

module.exports = {
  parser: 'typescript-eslint-parser',

  extends: [
    '@strv/javascript/environments/nodejs/v10',
    '@strv/javascript/environments/nodejs/optional',
    '@strv/javascript/environments/typescript/recommended',
    '@strv/javascript/coding-styles/recommended',
  ],
}
```

To actually lint .ts files, you must pass the `--ext` flag to ESLint:

```sh
eslint --ext ts --no-unused-disable-directives .
```
