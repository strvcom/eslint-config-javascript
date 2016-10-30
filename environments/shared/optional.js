/**
 * js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {

  rules: {
    // Require Consistent Returns
    // This rule is aimed at ensuring all return statements either specify a value or don't specify
    // a value.
    'consistent-return': 1,

    // Validates JSDoc comments are syntactically correct
    // This rule aims to prevent invalid and incomplete JSDoc comments.
    'valid-jsdoc': [1, {
      requireReturn: true,
      requireReturnDescription: false,
    }],

    // Limit Maximum Depth
    // This rule aims to reduce the complexity of your code by allowing you to configure the maximum
    // depth blocks can be nested in a function.
    'max-depth': [1, 5],

    // Require Function Expressions to have a Name
    // If you provide the optional name for a function expression then you will get the name of the
    // function expression in the stack trace.
    // If you are tempted to create anonymous function expression, consider using arrow function
    // instead.
    'func-names': 1,

    // Disallow Use of `undefined` Variable
    // In ECMAScript 3 it was possible to overwrite the value of undefined. While ECMAScript 5
    // disallows overwriting undefined, it's still possible to shadow `undefined`.
    'no-undefined': 1,

    // Require symbol description
    // This rule requires a description when creating symbols. Using description promotes easier
    // debugging - when a symbol is logged the description is used.
    'symbol-description': 1,

    // Reports if a resolved path is imported more than once
    'import/no-duplicates': 1,
  },
}
