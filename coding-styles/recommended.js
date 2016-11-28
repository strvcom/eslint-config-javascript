/**
 * Js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

// These rules are the baseline coding style that prevails in most JS projects in the wild. It's
// main purpose is to serve as a baseline for all other coding style guidelines.
module.exports = {

  extends: './fixable.js',

  rules: {
    'capitalized-comments': [1, 'always', {
      ignoreInlineComments: true,
      ignoreConsecutiveComments: true,
    }],

    // This rule enforces consistent use of trailing commas in object and array literals
    // Allow trailing commas for func parameters, array and object literals spread across
    // multiple lines
    'comma-dangle': [1, 'always-multiline'],

    // Require Camelcase
    // This rule looks for any underscores (_) located within the source code. It ignores leading
    // and trailing underscores and only checks those in the middle of a variable name. If ESLint
    // decides that the variable is a constant (all uppercase), then no warning will be thrown.
    camelcase: [1, {
      properties: 'always',
    }],

    // Require Consistent This
    // This rule designates a variable as the chosen alias for `this`.
    'consistent-this': [1, 'self'],

    // Enforce Function Style
    // Due to these different behaviors, it is common to have guidelines as to which style of
    // function should be used. There is really no correct or incorrect choice here, it is just a
    // preference. A good reason to use function declarations is that the function names then appear
    // in stack traces which help during debugging.
    // Allow arrow functions to be saved into variables
    'func-style': [1, 'declaration', {
      allowArrowFunctions: true,
    }],

    // Require function names to match the name of the variable to which they are assigned
    'func-name-matching': 1,

    // Limit minimum and maximum length for identifiers
    // This rule is aimed at increasing code readability and maintainability by enforcing an
    // identifier length convention.
    'id-length': [1, {
      min: 2,
      max: 25,
      exceptions: [
        'i',
        '_',
      ],
    }],

    // Enforce position of line comments
    // This rule enforces consistent position of line comments. Block comments are not affected by
    // this rule.
    'line-comment-position': [1, {
      position: 'above',
    }],

    // Limit Maximum Length of Line
    // Very long lines of code in any language can be difficult to read. In order to aid in
    // readability and maintainability many coders have developed a convention to limit lines of
    // code to a certain number of characters.
    'max-len': [1, 100, 2],

    // Limit Maximum Number of Parameters
    // Functions that take numerous parameters can be difficult to read and write because it
    // requires the memorization of what each parameter is, its type, and the order they should
    // appear in.
    'max-params': [1, 4],

    // Set Maximum Depth of Nested Callbacks
    // This rule is aimed at increasing code clarity by discouraging deeply nesting callbacks.
    'max-nested-callbacks': [1, 4],

    // Specify the Maximum Number of Statements Allowed per Line
    // A line of code containing too many statements can be difficult to read. Code is generally
    // read from the top down, especially when scanning, so limiting the number of statements
    // allowed on a single line can be very beneficial for readability and maintainability.
    'max-statements-per-line': 1,

    // Require Constructors to Use Initial Caps
    // This rule is aimed at helping to distinguish regular functions from constructor functions. As
    // such, it warns whenever it sees new followed by an identifier that isn't capitalized or
    // whenever it sees capitalized function called directly without new operator.
    'new-cap': [1, {
      newIsCap: true,
      capIsNew: true,
    }],

    // Newline Per Chained Method Call
    // This rule checks and reports the chained calls if there are no new lines after each call or
    // deep member access.
    'newline-per-chained-call': [1, {
      ignoreChainWithDepth: 3,
    }],

    // Disallow duplicate exports/imports
    // An ES6/ES2015 import can be spread over multiple lines, but this takes up unneeded
    // whitespace. This rules validates that all imports from a single module exists in a single
    // import statement.
    'no-duplicate-imports': [1, {
      includeExports: true,
    }],

    // Disallow return in else
    // If an if block contains a return statement, the else block becomes unnecessary. Its contents
    // can be placed outside of the block.
    'no-else-return': 1,

    // Disallows comments after code
    // This rule will disallow comments on the same line as code.
    'no-inline-comments': 1,

    // Disallow mixes of different operators
    // Enclosing complex expressions by parentheses clarifies the developer’s intention, which makes
    // the code more readable. This rule warns when different operators are used consecutively
    // without parentheses in an expression.
    'no-mixed-operators': 1,

    // Disallow mixed spaces and tabs for indentation
    // The no-mixed-spaces-and-tabs rule is aimed at flagging any lines of code that are indented
    // with a mixture of tabs and spaces.
    'no-mixed-spaces-and-tabs': 1,

    // Disallow tabs
    // Use of tabs is discouraged in favour of spaces because there is no "standard" width for a tab
    // character and many viewers/editors use their own tab width, which could cause code to be
    // misaligned and not formatted as intended/indented.
    'no-tabs': 1,

    // Disallow Nested Ternaries
    // The no-nested-ternary rule aims to increase the clarity and readability of code by
    // disallowing the use of nested ternary expressions.
    'no-nested-ternary': 2,

    // Disallow Dangling Underscores in Identifiers
    'no-underscore-dangle': 1,

    // Disallow conditional expressions that can be expressed with simpler constructs
    // Use || instead of ternary in default assignments
    'no-unneeded-ternary': [1, {
      defaultAssignment: false,
    }],

    // Disallow Warning Comments
    // These comments are a warning signal, that there is something not production ready in your
    // code. Most likely you want to fix it or remove the comments before you roll out your code
    // with a good feeling.
    'no-warning-comments': [1, {
      location: 'anywhere',
    }],

    // Require or Disallow One Variable Declaration per Scope
    // This rule is aimed at enforcing the use of one variable declaration per function (for var)
    // and multiple variable declaration per block (for let and const) scope.
    'one-var': [1, {
      var: 'always',
      let: 'never',
      const: 'never',
    }],

    // Operator Linebreak
    // When a statement is too long to fit on a single line, line breaks are generally inserted next
    // to the operators separating expressions. This rule is aimed at enforcing a particular
    // operator line break style.
    'operator-linebreak': [1, 'before'],

    // Enforces having an empty line after the last top-level import statement or require call
    'import/newline-after-import': 1,
  },
}
