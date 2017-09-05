'use strict'

// Put this file to the directory where your node.js code is located. This could be the root
// directory, or a subdirectory if your project consists of both node.js and browser code.
module.exports = {
  extends: [
    '@strv/javascript/environments/nodejs/v8',
    '@strv/javascript/environments/nodejs/optional',
    '@strv/javascript/coding-styles/recommended',
  ],

  // As of ESLint 4.1, you no longer need to use separate, per-directory .eslintrc.js files and
  // instead control per-folder overrides from your central .eslintrc.js file using the overrides
  // array.
  // See the original blog post on the feature:
  // https://eslint.org/blog/2017/06/eslint-v4.1.0-released
  overrides: [{
    files: [
      'test/**',
    ],
    env: {
      mocha: true,
    },

    rules: {
      'func-names': 0,
    },
  }],
}
