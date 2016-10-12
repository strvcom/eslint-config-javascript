/**
 * js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {

  extends: '../../standard/recommended.js',

  rules: {
    // Enforce JSX Quote Style
    // This rule enforces the consistent use of either double or single quotes in JSX attributes.
    'jsx-quotes': [1, 'prefer-double'],

    // Enforce boolean attributes notation in JSX
    // In JSX when using a boolean attribute you can set the attribute value to true or omit the
    // value. This rule will enforce one or the other to keep consistency in your code.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': [1, 'never'],

    // Restrict file extensions that may contain JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': [1, {
      extensions: ['.jsx']
    }],

    // Detect missing key prop
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': 1,

    // No .bind() or Arrow Functions in JSX Props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    'react/jsx-no-bind': [2, {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowBind: false
    }],

    // Prevent comments from being inserted as text nodes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
    'react/jsx-no-comment-textnodes': 1,

    // Prevent usage of dangerous JSX properties
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    'react/no-danger': 1,

    // Prevent duplicate properties in JSX
    // Creating JSX elements with duplicate props can cause unexpected behavior in your application.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': [2, {
      ignoreCase: true
    }],

    // Prevent usage of unsafe target='_blank'
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
    'react/jsx-no-target-blank': 2,

    // Disallow undeclared variables in JSX
    // This rules can help you locate potential ReferenceErrors resulting from misspellings or
    // missing components.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-no-undef': 2,

    // Prevent React to be incorrectly marked as unused
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    'react/jsx-uses-react': 2,

    // Prevent variables used in JSX to be incorrectly marked as unused
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/jsx-uses-vars': 2,

    // Prevent missing parentheses around multiline
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    'react/jsx-wrap-multilines': [2, {
      declaration: true,
      assignment: true,
      return: true
    }],

    // Prevent usage of deprecated methods
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    'react/no-deprecated': 2,

    // Prevent usage of setState in componentDidMount
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    'react/no-did-mount-set-state': 2,

    // Prevent usage of setState in componentDidUpdate
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    'react/no-did-update-set-state': 2,

    // Prevent direct mutation of this.state
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 2,

    // Error when using findDOMNode()
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
    'react/no-find-dom-node': 2,

    // Prevent usage of isMounted
    // isMounted is an anti-pattern, is not available when using ES6 classes, and it is on its way
    // to being officially deprecated.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
    'react/no-is-mounted': 2,

    // Prevent multiple component definitions per file
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-multi-comp': [2, {
      ignoreStateless: true
    }],

    // Prevent usage of the return value of React.render
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    'react/no-render-return-value': 2,

    // Prevent using string references
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    'react/no-string-refs': 2,

    // Prevent usage of unknown DOM property
    // In JSX all DOM properties and attributes should be camelCased to be consistent with standard
    // JavaScript style. This can be a possible source of error if you are used to writing plain
    // HTML.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': 2,

    // Prevent definitions of unused prop types
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    'react/no-unused-prop-types': [2, {
      customValidators: [],
      skipShapeProps: false
    }],

    // Enforce ES6 class for React Components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    'react/prefer-es6-class': [2, 'always'],

    // Enforce stateless React Components to be written as a pure function
    // Stateless functional components are more simple than class based components and will benefit
    // from future React performance optimizations specific to these components.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': 1,

    // Prevent missing props validation in a React component definition
    // PropTypes improve the reusability of your component by validating the received data. It can
    // warn other developers if they make a mistake while reusing the component with improper data
    // type.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': [2, {
      ignore: [],
      customValidators: []
    }],

    // Prevent missing React when using JSX
    // When using JSX, <a /> expands to React.createElement("a"). Therefore the React variable must
    // be in scope.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/react-in-jsx-scope': 2,

    // Enforce ES5 or ES6 class for returning value in render function
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
    'react/require-render-return': 2,

    // Enforce style prop value being an object
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    'react/style-prop-object': 2
  }
}
