# JavaScript Coding Standards

> Write bulletproof JavaScript like a pro!

## About

This repository contains various configuration files for the awesome JavaScript linter, [ESLint][eslint-url]. The configuration files are purposefully separated into various categories to allow their composition according to developers' preferences or requirements. It should also make adoption of ESlint across existing codebases easier.

## Goals

- **Safety**
- **Coding style consistency**

The goal of this project is to help all developers write better code. It should not be a hindrance or cause a major fight about how to write it. Although it will never achieve the "one-config-suits-all" status in terms of coding style, it should achieve that when it comes to writing safe JavaScript.

One or two options for coding style will eventually be provided, preferably after reaching a consensus across the company.

## Structure

The ESLint rules are semantically grouped into various categories for easy composition.

### [Standard](standard)

These rules are useful to all JavaScript codebases, regardless of platform or developers' coding style preferences. The goal of the Standard rules is to flag unsafe, dangerous or plain-broken JavaScript code. Examples include use of undeclared variables, detecting unreachable code or flagging variables that are no longer used.

> Generally you won't need to use these configuration files directly as they are incorporated into individual environment configurations.

### [Environments](environments)

These rules are only useful within a specific JavaScript environment, i.e. Node.js. The goal of these rules is to provide a configuration which makes writing code within this environment safer and to configure ESLint specifically for it (i.e. by defining known global variables or enabling certain ES 2015 known to be already implemented).

**All environment-specific configuration files should inherit from configurations in [Standard](standard).**

### [Coding Styles](coding-styles)

These rules help developers adhere to a certain coding style. They do not provide additional safety, but help developers write code in a way that is consistent across the whole codebase, which in long term helps them better maintain that code.

These rules are intended to be used independently on platform.

## Usage

### Initialisation

You will need to put these files into your project somehow. Here are some options:

- Copy/paste these files into a folder within your project
- Add this repository as a git submodule (preferred)

Everyone knows how to copy/paste stuff. Let's look at the second option:

Within your project, do:

`git submodule add git@github.com:strvcom/js-coding-standards.git [destination]`

Where `destination` is an optional folder name of your choice where to put the files (defaults to this project's name).

### Configuration

Once you have the rules in place, you must create your own *.eslintrc* configuration file in your project's root and include those configuration files that you want to use for this project. See the [examples](examples) directory for some hints.

## Status

- **standard:** Feedback required
- **environments**
  - nodejs: Feedback required
  - front-end: Not started
  - Babel: Not started
- **coding-styles:** WIP

## Feedback

This project is supposed to be a collaborative effort of the whole company, therefore you are invited to provide suggestions and feedback via Github issues & pull requests.


[eslint-url]: http://eslint.org
