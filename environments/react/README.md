[a11y-repo]: https://github.com/evcohen/eslint-plugin-jsx-a11y

# React

These configuration files are suitable to lint React components.

## Configurations

### @strv/javascript/environments/react/v16

Suitable for React v16. This ruleset builds on the react/v15 ruleset documented below and bumps the React version to 16 in the plugin configuration, causing some rules to recognise React 16-specific programming patterns.

### @strv/javascript/environments/react/v15

Suitable for React v15. This ruleset configures ESLint to recognise JSX syntax and enables some rules that make the linting process more natural. Some accesssibility rules are also included to keep users happy even if they are using screen readers, braile devices or just keyboard.

### @strv/javascript/environments/react/optional

Use this ruleset in conjunction with any of the above version-specific rulesets. Provides additional insights into potential inconsistencies in the project.

> For new projects, it is recommended to enable this ruleset. For existing projects, it is only recommended for the brave.

### @strv/javascript/environment/react/accessibility

Use this ruleset to enable the [`a11y`][a11y-repo] rules which provide checks for writing accessible JSX components.
