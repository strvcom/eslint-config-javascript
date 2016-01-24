# JavaScript Coding Standards

> Write bulletproof JavaScript like a pro!

**ESLint version required:** `>=2.0.0`

## About

This repository contains various configuration files for the awesome JavaScript linter, [ESLint][eslint-url]. The configuration files are purposefully separated into various categories to allow their composition according to developers' preferences or requirements. It should also make adoption of ESlint across existing codebases easier.

## Goals

- **Safety**
- **Coding style consistency**

The goal of this project is to help all developers write better code. It should not be a hindrance or cause a major fight about how to write it. Although it will never achieve the "one-config-suits-all" status in terms of coding style, it should achieve that when it comes to writing safe JavaScript.

## Structure

The ESLint rules are semantically grouped into various categories for easy composition.

### [Environments](environments)

These rules are the ones you should be including in your *.eslintrc* configuration. They are separated into categories based on the environment for which the code is being developed. Additionally, each environment provides several levels of "strictness" which the developer can choose from. This level of separation is meant as a means to gradual adoption of **all the rulesets**.

> It is recommended for new projects to include all levels.

### [Coding Styles](coding-styles)

These rules help developers adhere to a certain coding style. They do not provide code safety, but help developers write code in a way that is consistent across the whole codebase, which in long term helps them better maintain that code.

These rules are intended to be used independently on platform. However, you should still consider including rules for your environment if you really care about high-quality JavaScript.

## Usage

### Installation

This package can be installed via npm using Github-URL:

`npm install --save-dev strvcom/js-coding-standards`

> Note that the package will be installed as `eslint-config-javascript`, because that's what the package's name is.

### Configuration

Once the ruleset is installed, you must create your own *.eslintrc* configuration file in your project's root and include those rulesets that you want to use. See the [examples](examples) directory for, well... examples.

## Status

- **standard:** Finished
- **environments**
  - nodejs: Finished
  - browser: Not started
  - babel: Not started
- **coding-styles:** Feedback required

## License

This software is licensed under the **BSD-3-Clause License**. See the [LICENSE](LICENSE) file for more information.

[eslint-url]: http://eslint.org
