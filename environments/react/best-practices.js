/**
 * js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

// These rules represent best practices for the React developer community
module.exports = {
  extends: '../../standard/best-practices.js',

  rules: {
    // Prevent multiple component definitions per file
    'react/no-multi-comp': 1,

    // Prevent extra closing tags for components without children
    'react/self-closing-comp': 1,

    // Enforce ES6 class for React Components
    'react/prefer-es6-class': 1,

    // Prevent missing displayName in a React component definition
    'react/display-name': 1,

    // Prevent usage of dangerous JSX properties
    'react/no-danger': 1,

    // Prevent usage of deprecated methods
    'react/no-deprecated': 1,

    // Prevent usage of unknown DOM property
    'react/no-unknown-property': 1
  }
}
