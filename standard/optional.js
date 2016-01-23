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

    // Limit Maximum Length of Line
    // Very long lines of code in any language can be difficult to read. In order to aid in readability
    // and maintainability many coders have developed a convention to limit lines of code to a certain
    // number of characters.
    'max-len': [1, 100, 2],

    // Disallow Bitwise Operators
    // This rule is aimed at catching typos that end up as bitwise operators, but are meant to be the
    // much more common &&, ||, <, > operators.
    'no-bitwise': 1
  }
}
