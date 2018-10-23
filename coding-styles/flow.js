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
    // Enforces a particular annotation style of complex types
    'flowtype/array-style-complex-type': ['warn', 'shorthand'],

    // Enforces a particular annotation style of simple types
    'flowtype/array-style-simple-type': ['warn', 'shorthand'],

    // Enforces a particular style for boolean type annotations.
    'flowtype/boolean-style': ['warn', 'boolean'],

    // Enforces consistent spacing within generic type annotation parameters.
    'flowtype/generic-spacing': ['warn', 'never'],

    // Enforces consistent separators between properties in Flow object types.
    'flowtype/object-type-delimiter': ['warn', 'comma'],

    // Enforces consistent use of trailing commas in Object and Tuple annotations.
    // This rule takes one argument which mirrors ESLint's default comma-dangle rule.
    'flowtype/delimiter-dangle': ['warn', 'always-multiline'],

    // Enforces a particular style for type imports
    'flowtype/type-import-style': ['warn', 'identifier'],

    // This rule requires an empty line after the Flow annotation
    'flowtype/newline-after-flow-annotation': 'warn',

    // Require all type declarations to be at the top of the file, after any import declarations
    'flowtype/require-types-at-top': 'warn',

    // Enforces consistent use of semicolons after type aliases.
    'flowtype/semi': ['warn', 'never'],

    // Enforces consistent spacing after the type annotation colon.
    'flowtype/space-after-type-colon': ['warn', 'always'],

    // Enforces consistent spacing before the opening < of generic type annotation parameters.
    'flowtype/space-before-generic-bracket': ['warn', 'never'],

    // Enforces consistent spacing before the type annotation colon.
    'flowtype/space-before-type-colon': ['warn', 'never'],

    // Enforces consistent spacing around union and intersection type separators (` | ` and ` & `).
    'flowtype/union-intersection-spacing': ['warn', 'always'],
  },
}
