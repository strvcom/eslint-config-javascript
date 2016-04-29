# Node.js

These configuration files are suitable to lint code which will run on Node.js.

## Configurations

### @strv/javascript/environments/nodejs/v6

Suitable for projects running on Node.js v6. Also includes Node-specific ruleset for known errors.

### @strv/javascript/environments/nodejs/v5

Suitable for projects running on Node.js v5. It configures ESLint to allow known ES 2015 features and disallow those still missing. Also includes Node-specific rulesets for known errors.

### @strv/javascript/environments/nodejs/best-practices

Use this ruleset in conjunction with one of the version-specific configuration files. Provides additional safety checks to flag potentially unsafe code.

### @strv/javascript/environments/nodejs/optional

Use this ruleset in conjunction with any of the above. Provides additional insights into potential inconsistencies in the project.

> For new projects, it is recommended to enable this ruleset. For existing projects, it is only recommended for the brave.
