/**
 * Js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

const globs = require('./globs')

module.exports = {

  extends: '../shared/optional.js',

  rules: {},

  overrides: {
    files: globs.test,

    rules: {
      // Do not require function names in test files
      'func-names': 'off',
    },
  },
}
