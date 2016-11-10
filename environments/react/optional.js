/**
 * js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {

  extends: '../shared/optional.js',

  rules: {
    // Disallow Use of Alert
    // This rule is aimed at catching debugging code that should be removed and popup UI elements
    // that should be replaced with less obtrusive, custom UIs.
    'no-alert': 1,

    // Enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': [1, {
      ignoreCase: true,
      callbacksLast: false,
      requiredFirst: false,
    }],
  },
}
