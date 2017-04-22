/**
 * Js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

// These rules represent coding style targeted for React components.
module.exports = {

  rules: {
    // Validate closing bracket location in JSX
    // This rule checks all JSX multiline elements and verifies the location of the closing bracket.
    'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],

    // Disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': ['warn', 'never', {
      allowMultiline: true,
    }],

    // Enforce or disallow spaces around equal signs in JSX attributes
    // This rule will enforce consistency of spacing around equal signs in JSX attributes, by
    // requiring or one or more spaces before and after =.
    'react/jsx-equals-spacing': ['warn', 'never'],

    // Configure the position of the first property
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],

    // Validate JSX indentation
    'react/jsx-indent': ['warn', 2],

    // Validate props indentation in JSX
    'react/jsx-indent-props': ['warn', 2],

    // Enforce PascalCase for user-defined JSX components
    // Enforces coding style that user-defined JSX components are defined and referenced in
    // PascalCase.
    'react/jsx-pascal-case': ['warn', {
      allowAllCaps: true,
      ignore: [],
    }],

    // Validate spacing before closing bracket in JSX
    // This rule checks if there is one or more spaces before the closing bracket of self-closing
    // JSX elements.
    'react/jsx-space-before-closing': ['warn', 'always'],

    // Validate whitespace in and around the JSX opening and closing brackets
    // This rule checks the whitespace inside and surrounding the JSX syntactic elements.
    'react/jsx-tag-spacing': 'warn',

    // Prevent extra closing tags for components without children
    'react/self-closing-comp': 'warn',

    // Enforce component methods order
    // When creating React components it is more convenient to always follow the same organisation
    // for methods order to helps you to easily find lifecyle methods, event handlers, etc.
    'react/sort-comp': ['warn', {
      order: [
        'static-methods',
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        '/^render.+$/',
        'render',
      ],
    }],
  },
}
