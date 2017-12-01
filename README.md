[eslint-url]: http://eslint.org
[travis-badge]: https://travis-ci.org/strvcom/eslint-config-javascript.svg
[travis-url]: https://travis-ci.org/strvcom/eslint-config-javascript
[eslint-version]: https://img.shields.io/badge/ESLint->=4.12.0-brightgreen.svg
[eslint-fixing]: http://eslint.org/docs/user-guide/command-line-interface#fix
[flow-home]: https://flow.org
[react-home]: http://reactjs.com
[nodejs-home]: https://nodejs.org


# JavaScript Coding Standards

> Write bulletproof JavaScript like a pro! 😎

[![Build Status][travis-badge]][travis-url]
![ESLint version][eslint-version]


## About

This repository contains various configuration files for the awesome JavaScript linter, [ESLint][eslint-url]. The configuration files are purposefully separated into various categories to allow their composition according to developers' preferences or requirements. It should also make adoption of ESLint across existing codebases easier.

## Usage

### Installation

This package can be installed via npm (make sure you also install the latest version of ESLint):

`npm install --save-dev eslint@latest @strv/eslint-config-javascript@latest`

### Configuration

Once the ruleset is installed, you must create your own *.eslintrc.{js,json,yml}* configuration file in your project's root (or in some of the subfolders, if you want to apply different rules to different parts of your code) and include those rulesets that you want to use. See the [tutorial](tutorial) directory for, well... tutorial.

### Integrating ESLint with your IDE/editor

See the [editor-integrations](tutorial/editor-integrations.md) document for tips.

### Example configuration files

See the [tutorial](tutorial) directory for lots of example config files.

### Available rulesets

#### For [Node.js][nodejs-home]

- @strv/javascript/environments/nodejs/v8-3
- @strv/javascript/environments/nodejs/v8
- @strv/javascript/environments/nodejs/v7
- @strv/javascript/environments/nodejs/v6
- @strv/javascript/environments/nodejs/optional

#### For [React][react-home]

- @strv/javascript/environments/react/v16
- @strv/javascript/environments/react/v15
- @strv/javascript/environments/react/optional
- @strv/javascript/environments/react/accessibility
  > This one contains rules specific to web accessibility best practices.

#### For [Flow][flow-home]

- @strv/javascript/environments/flow/recommended

#### Coding styles

These rulesets include rules which deal with how the code looks like and not how it works. They help keep the code clean and consistent.

- @strv/javascript/coding-styles/recommended
- @strv/javascript/coding-styles/fixable
  > This is a subset of the `recommended` coding style ruleset and includes only rules which [ESLint can fix automatically][eslint-fixing]. This is great for gradual adoption of coding style rulesets into existing projects.

- @strv/javascript/coding-styles/flow
  > This one contains coding style rules for code using Flow

## License

This software is licensed under the **BSD-3-Clause License**. See the [LICENSE](LICENSE) file for more information.
