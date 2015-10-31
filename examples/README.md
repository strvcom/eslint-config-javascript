# Project configuration examples

To use these rulesets, you must have an *.eslintrc* configuration file present in your project root. In this file, you then include those configuration which you would like to use in your project.

```yaml
---
# The extends directive allows composition of configuration files
extends:
  # Each file adds rule definitions over the previous file, potentially
  # overwriting some configuration options. Here, we are including the
  # base configuration for Node.js development and we opt-in to the
  # best-practices ruleset.
  - ./js-coding-standards/environments/nodejs/latest.yml
  - ./js-coding-standards/environments/nodejs/best-practices.yml

# If you need to override some rules specifically for this project,
# you can do so as usual via the rules property.
# Per-project rules take precedence over rules defined via included
# configurations.
rules:
  # Enable the valid-jsdoc rule and report violations as hard errors
  valid-jsdoc: 2
```
