/**
 * js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

/**
 * This file configures ESLint to work with the Node.js 6.0 release
 */
module.exports = {
  extends: './known-errors.js',

  env: {
    node: true,
    es6: true
  },

  parserOptions: {
    ecmaVersion: 6
  },

  rules: {
    // ESLint no longer supports disabling some still unsuported ES 2015 features, so we need to use
    // this rule to disable that syntax
    'no-restricted-syntax': [
      2,
      // Experimental object/rest spread (not in ES 2015)
      'ExperimentalRestProperty'
    ],

    // Suggest using Reflect API where applicable
    'prefer-reflect': 1
  }
}
