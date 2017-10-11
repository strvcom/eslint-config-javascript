/**
 * Js-coding-standards
 *
 * @author      Arnost Pleskot <arnostpleskot@gmail.com>
 * @copyright   2017 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {
  plugins: [
    'flowtype',
  ],

  rules: {
    // Marks Flow type identifiers as defined.
    // Used to suppress no-undef reporting of type identifiers.
    'flowtype/define-flow-type': 'warn',

    // Checks for duplicate properties in Object annotations.
    'flowtype/no-dupe-keys': 'error',

    // Disallows use of primitive constructors as types, such as Boolean, Number and String.
    'flowtype/no-primitive-constructor-types': 'error',

    // Disallows Flow type imports, exports, aliases, and annotations in files missing a valid
    // Flow file declaration (or a @noflow annotation).
    'flowtype/no-types-missing-file-annotation': 'error',

    // This rule ignores type cast expressions, but otherwise behaves the same as ESLint's built-in
    // rule.
    'flowtype/no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
    }],

    // Warns against weak type annotations any, Object and Function. These types can cause flow
    // to silently skip over portions of your code, which would have otherwise caused type errors.
    'flowtype/no-weak-types': ['warn', { any: true }],

    // Requires that all function parameters have type annotations.
    'flowtype/require-parameter-type': 'error',

    // Requires that functions have return type annotation.
    'flowtype/require-return-type': ['error', 'always', {
      excludeArrowFunctions: 'expressionsOnly',
    }],

    // Requires that all variable declarators have type annotations.
    'flowtype/require-variable-type': 'error',

    // Marks Flow type alias declarations as used.
    // Used to suppress no-unused-vars errors that are triggered by type aliases.
    'flowtype/use-flow-type': 'warn',
  },
}
