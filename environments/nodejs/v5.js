/**
 * js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

/**
 * This file configures ESLint to work with the Node.js 5.0 release
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
    // Node.js v5 does not support Reflect API
    'prefer-reflect': 0,

    // Node.js v5 does not support rest params
    'prefer-rest-params': 0,

    // The following ES 2015 syntax is not supported by Node.js v5
    'no-restricted-syntax': [
      2,
      // Rest parameters (not to be confused with rest arguments)
      'RestElement',
      // Default function parameters
      'AssignmentPattern',
      // Destructuring assignment
      'ObjectPattern',
      // Experimental object/rest spread (not in ES 2015)
      'ExperimentalRestProperty'
    ]
  }
}
