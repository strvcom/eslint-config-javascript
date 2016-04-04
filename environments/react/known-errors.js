/**
 * js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {
  extends: '../../standard/known-errors.js',

  rules: {
    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 2,

    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 2,

    // Prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': 2,

    // Prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': 2,

    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 2
  }
}
