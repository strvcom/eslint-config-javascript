# Project configuration examples

To use these rulesets, you must have an *.eslintrc* configuration file present in your project root. In this file, you then include those rulesets which you would like to use in your project.

The path to the ruleset must start with `eslint-config-javascript` (this ruleset's package name). Optionally, ESLint allows to drop the `eslint-config` to keep it short. The rest of the path is an actual folder/file in this repository. Extensions can be omitted. For detailed explanation, see ESLint's [shareable configs][shareable-configs].

Your configuration file can either be json, classic Node.js module, or YAML file.

```js
// .eslintrc.js

module.exports = {
  // The extends directive allows composition of configuration files
  extends: [
    // Each file adds rule definitions over the previous file, potentially
    // overwriting some configuration options. Here, we are including the
    // base configuration for Node.js development and we opt-in to the
    // best-practices ruleset.
    '@strv/javascript/environments/nodejs/v6',
    '@strv/javascript/environments/nodejs/best-practices',
    // If you are brave enough, you can also extend the "optional" ruleset
    '@strv/javascript/environments/nodejs/optional'
  ],

  // If you need to override some rules specifically for this project,
  // you can do so as usual via the rules property.
  // Per-project rules take precedence over rules defined via included
  // configurations.
  rules: {
    'valid-jsdoc': 2
  }
}
```


[shareable-configs]: http://eslint.org/docs/developer-guide/shareable-configs.html#using-a-shareable-config
