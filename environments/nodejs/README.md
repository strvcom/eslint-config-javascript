# Node.js

These configuration files are suitable to lint code which will run on Node.js.

## Configurations

### javascript/environments/nodejs/latest

Suitable for the very latest version of Node.js. It configures ESLint to allow known ES 2015 features and disallow those still missing as well as includes Node-specific ruleset for known errors.

### javascript/environments/nodejs/legacy

Suitable for legacy versions of Node.js (0.12 and older). Also includes Node-specific rulesets for known errors.

### javascript/environments/nodejs/best-practices

Use this ruleset in conjunction with one of the version-specific configuration files. Provides additional safety checks to flag potentially unsafe code.

### javascript/environments/nodejs/optional

Use this ruleset in conjunction with any of the above. Provides additional insights into potential inconsistencies in the project.

> For new projects, it is recommended to enable this ruleset. For existing projects, it is only recommended for the brave.
