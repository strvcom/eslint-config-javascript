/**
 * js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {
  // This file configures ESLint to work with the newest ES 2015 syntax and features
  extends: 'javascript/environments/nodejs/known-errors',

  env: {
    node: true,
    es6: true
  },

  ecmaFeatures: {
    // Front-end specific
    jsx: false,
    // These are not implemented / behind flag - enable with caution (or use a transpiler)
    defaultParams: false,
    destructuring: false,
    modules: false,
    regexUFlag: false,
    regexYFlag: false,
    restParams: false,
    experimentalObjectRestSpread: false
  }
}
