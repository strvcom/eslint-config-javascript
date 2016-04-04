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
    'react/jsx-no-bind': [2, {
      ignoreRefs: true,
      allowArrowFunctions: true
    }],

    // Prevent duplicate properties in JSX
    // Creating JSX elements with duplicate props can cause unexpected behavior in your application.
    'react/jsx-no-duplicate-props': 2,

    // Disallow undeclared variables in JSX
    // This rules can help you locate potential ReferenceErrors resulting from misspellings or
    // missing components.
    'react/jsx-no-undef': 2,

    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 2,

    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 2,

    // Prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': 2,

    // Prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': 2,

    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 2,

    // Prevent usage of isMounted
    // isMounted is an anti-pattern, is not available when using ES6 classes, and it is on its way
    // to being officially deprecated.
    'react/no-is-mounted': 2,

    // Prevent usage of unknown DOM property
    // In JSX all DOM properties and attributes should be camelCased to be consistent with standard
    // JavaScript style. This can be a possible source of error if you are used to writing plain
    // HTML.
    'react/no-unknown-property': 2,

    // Prevent missing props validation in a React component definition
    // PropTypes improve the reusability of your component by validating the received data. It can
    // warn other developers if they make a mistake while reusing the component with improper data
    // type.
    'react/prop-types': 2,

    // Prevent missing React when using JSX
    // When using JSX, <a /> expands to React.createElement("a"). Therefore the React variable must
    // be in scope.
    'react/react-in-jsx-scope': 2
  }
}
