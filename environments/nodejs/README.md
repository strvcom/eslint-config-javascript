# Node.js

These configuration files are suitable to lint code which will run on Node.js.

## Configurations

### latest.yml

Suitable for the very latest version of Node.js. It configures ESLint to allow known ES 2015 features as well as includes Node-specific ruleset for known errors.

### legacy.yml

Suitable for legacy versions of Node.js (0.12 and older). Also includes Node-specific rulesets for known errors.

### best-practices.yml

Use in conjunction with one of the version-specific configuration files. Provides additional safety checks to flag potentially unsafe code.

### optional.yml

Use in conjunction with any of the above. Provides additional insights into potential inconsistencies or mistakes in the project.
