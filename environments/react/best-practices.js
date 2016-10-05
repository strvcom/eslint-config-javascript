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
    // Enforce boolean attributes notation in JSX
    // In JSX when using a boolean attribute you can set the attribute value to true or omit the
    // value. This rule will enforce one or the other to keep consistency in your code.
    'react/jsx-boolean-value': [1, 'never'],

    // Prevent missing displayName in a React component definition
    'react/display-name': 1,

    // Prevent multiple component definitions per file
    'react/no-multi-comp': [1, {
      ignoreStateless: true
    }],

    // Prevent extra closing tags for components without children
    'react/self-closing-comp': 1,

    // Enforce ES6 class for React Components
    'react/prefer-es6-class': 2,

    // Enforce stateless React Components to be written as a pure function
    // Stateless functional components are more simple than class based components and will benefit
    // from future React performance optimizations specific to these components.
    'react/prefer-stateless-function': 1,

    // Prevent usage of dangerous JSX properties
    'react/no-danger': 1,

    // Prevent usage of deprecated methods
    'react/no-deprecated': 1,

    // Prevent missing parentheses around multiline JSX
    // Wrapping multiline JSX in parentheses can improve readability and/or convenience.
    'react/jsx-wrap-multilines': [2, {
      declaration: true,
      assignment: true,
      return: true
    }]
  }
}
