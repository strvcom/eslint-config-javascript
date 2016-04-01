[eslint-plugin-react]: https://github.com/yannickcr/eslint-plugin-react/

# React

These configuration files are suitable to lint React components.

## Requirements

In order to use this ruleset, you must install an extra ESLint plugin:

`npm install --save-dev eslint-plugin-react`

## Configurations

> Not all rules from the [react plugin][eslint-plugin-react] are configured in this ruleset yet. Input from React devs is required to finalise this. Basic functionality and some important rules are present, though.

### javascript/environments/react/latest

Suitable for the latest version or React. This ruleset configures ESLint to recognise JSX syntax and enables some rules that make the linting process more natural.

### javascript/environments/react/best-practices

Use this ruleset in conjunction with one of the version-specific configuration files. Provides additional safety checks to flag potentially unsafe code or patterns that are discouraged in favour of more established ones.

### javascript/environments/react/optional

Use this ruleset in conjunction with any of the above. Provides additional insights into potential inconsistencies in the project.

> For new projects, it is recommended to enable this ruleset. For existing projects, it is only recommended for the brave.
