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
    // Require JSDoc comment
    // This rule generates warnings for nodes that do not have JSDoc comments when they should.
    // Currently only function declarations are checked.
    'require-jsdoc': 1,

    // Validates JSDoc comments are syntactically correct
    // This rule aims to prevent invalid and incomplete JSDoc comments.
    'valid-jsdoc': [1, {
      requireReturn: true,
      requireReturnDescription: false
    }],

    // Limit Cyclomatic Complexity
    // This rule is aimed at reducing code complexity by capping the amount of cyclomatic complexity
    // allowed in a program.
    'complexity': [1, 10],

    // Disallow Warning Comments
    // These comments are a warning signal, that there is something not production ready in your code.
    // Most likely you want to fix it or remove the comments before you roll out your code with a good
    // feeling.
    'no-warning-comments': [1, {
      location: 'anywhere'
    }],

    // Limit Maximum Depth
    // This rule aims to reduce the complexity of your code by allowing you to configure the maximum
    // depth blocks can be nested in a function.
    'max-depth': [1, 4],

    // Limit Maximum Length of Line
    // Very long lines of code in any language can be difficult to read. In order to aid in readability
    // and maintainability many coders have developed a convention to limit lines of code to a certain
    // number of characters.
    'max-len': [1, 100, 2],

    // Limit Maximum Number of Parameters
    // Functions that take numerous parameters can be difficult to read and write because it requires
    // the memorization of what each parameter is, its type, and the order they should appear in.
    'max-params': [1, 3],

    // Disallow Bitwise Operators
    // This rule is aimed at catching typos that end up as bitwise operators, but are meant to be the
    // much more common &&, ||, <, > operators.
    'no-bitwise': 1
  }
}
