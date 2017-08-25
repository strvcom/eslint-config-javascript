/**
 * Js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2017 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

/**
 * This file configures ESLint to work with the Node.js 8.3 release
 */
module.exports = {

  extends: './v7.js',

  parserOptions: {
    ecmaVersion: 2017,
  },

  rules: {
    // Node.js 8.3 upgraded v8 to 6.0 which brings support for object rest spread -> we can turn
    // this rule off.
    'no-restricted-syntax': 0,
  },
}
