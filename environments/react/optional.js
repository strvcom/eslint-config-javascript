/**
 * Js-coding-standards
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

    // Forbid foreign propTypes
    // This rule forbids using another component's prop types unless they are explicitly
    // imported/exported. This allows people who want to use
    // babel-plugin-transform-react-remove-prop-types to remove propTypes from their components in
    // production builds, to do so safely
    'react/forbid-foreign-prop-types': 1,
  },
}
