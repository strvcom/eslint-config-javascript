/**
 * Js-coding-standards
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

  extends: './recommended.js',

  env: {
    node: true,
    es6: true,
  },

  rules: {
    // ESLint no longer supports disabling some still unsuported ES 2015 features, so we need to use
    // this rule to disable that syntax
    'no-restricted-syntax': [
      2,
      // Experimental object/rest spread (not in ES 2015)
      'ExperimentalRestProperty',
    ],
  },
}
