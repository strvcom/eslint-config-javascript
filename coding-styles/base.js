/**
 * js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {
  // These rules are the baseline coding style that prevails in most JS projects in the wild. It's
  // main purpose is to serve as a baseline for all other coding style guidelines.
  rules: {
    // Require braces in arrow function body
    // This rule can enforce the use of braces around arrow function body.
    'arrow-body-style': [1, 'as-needed'],

    // Require parens in arrow function arguments
    // Arrow functions can omit parentheses when they have exactly one parameter. Since their main
    // strength lies in being short and concise, parens around arguments should be omitted when they
    // are not needed.
    'arrow-parens': [1, 'as-needed'],

    // Require space before/after arrow function's arrow
    'arrow-spacing': [1, {
      before: true,
      after: true
    }],

    // Enforce spacing around the * in generator functions
    // This rule enforces that the * is placed together with the `function` keyword. The reasoning
    // is that a generator function is a special type of function, therefore it should come together
    // with the `function` keyword. In contrast, it has nothing to do with the function's name,
    // which may be missing completely.
    'generator-star-spacing': [1, {
      before: false,
      after: true
    }],

    // Require Following Curly Brace Conventions
    // This rule is aimed at preventing bugs and increasing code clarity by ensuring that block
    // statements are wrapped in curly braces.
    // All block statements must be wrapped in curly braces
    curly: [1, 'all'],

    // Enforce newline before and after dot
    // This rule aims to enforce newline consistency in member expressions. This rule prevents the
    // use of mixed newlines around the dot in a member expression.
    // Require the dot to be placed together with the property identifier
    'dot-location': [1, 'property'],

    // Require Dot Notation
    // This rule is aimed at maintaining code consistency and improving code readability by
    // encouraging use of the dot notation style whenever possible.
    'dot-notation': 1,

    // Disallow return in else
    // If an if block contains a return statement, the else block becomes unnecessary. Its contents
    // can be placed outside of the block.
    'no-else-return': 1,

    // Disallow multiple spaces
    // This rule aims to disallow multiple whitespace around logical expressions, conditional
    // expressions, declarations, array elements, object properties, sequences and function
    // parameters.
    'no-multi-spaces': 1,

    // Disallow or enforce spaces inside of brackets
    // Disallow
    'array-bracket-spacing': [1, 'never'],

    // Disallow or enforce spaces inside of single line blocks
    // Enforce
    'block-spacing': [1, 'always'],

    // Require Brace Style
    // The one true brace style is one of the most common brace styles in JavaScript, in which the
    // opening curly brace of a block is placed on the same line as its corresponding statement or
    // declaration.
    'brace-style': [1, '1tbs', {
      allowSingleLine: true
    }],

    // Require Camelcase
    // This rule looks for any underscores (_) located within the source code. It ignores leading
    // and trailing underscores and only checks those in the middle of a variable name. If ESLint
    // decides that the variable is a constant (all uppercase), then no warning will be thrown.
    camelcase: [1, {
      properties: 'always'
    }],

    // Enforces spacing around commas
    // This rule aims to enforce spacing around a comma.
    // A space must be only after comma, i.e. `var a, b`
    'comma-spacing': [1, {
      before: false,
      after: true
    }],

    // Comma style
    // This rule is aimed at enforcing a particular comma style in JavaScript.
    // Commas should be placed at the end of line, not at the beginning
    'comma-style': [1, 'last'],

    // Disallow or enforce spaces inside of computed properties
    // This rule aims to maintain consistency around the spacing inside of computed properties.
    // No spaces allowed
    'computed-property-spacing': [1, 'never'],

    // Require Consistent This
    // This rule designates a variable as the chosen alias for `this`.
    'consistent-this': [1, 'self'],

    // Require file to end with single newline
    // Benefits of trailing newlines include the ability to concatenate or append to files as well
    // as output files to the terminal without interfering with shell prompts.
    'eol-last': [1, 'unix'],

    // Enforce Function Style
    // Due to these different behaviors, it is common to have guidelines as to which style of
    // function should be used. There is really no correct or incorrect choice here, it is just a
    // preference. A good reason to use function declarations is that the function names then appear
    // in stack traces which help during debugging.
    // Allow arrow functions to be saved into variables
    'func-style': [1, 'declaration', {
      allowArrowFunctions: true
    }],

    // Limit minimum and maximum length for identifiers
    // This rule is aimed at increasing code readability and maintainability by enforcing an
    // identifier length convention.
    'id-length': [1, {
      min: 2,
      max: 25,
      exceptions: [
        'i',
        '_'
      ]
    }],

    // Validate Indentation
    // This rule is aimed to enforce consistent indentation style.
    indent: [1, 2, {
      SwitchCase: 1
    }],

    // Enforce Property Spacing
    // This rule will warn when spacing in properties does not match the specified options. In the
    // case of long lines, it is acceptable to add a new line wherever whitespace is allowed.
    'key-spacing': [1, {
      beforeColon: false,
      afterColon: true,
      mode: 'strict'
    }],

    // This rule will enforce consistency of spacing around keywords and keyword-like tokens
    'keyword-spacing': [1, {
      before: true,
      after: true
    }],

    // Disallow mixing CRLF and LF linebreaks
    // This rule aims to ensure having consistent line endings independent of operating system.
    'linebreak-style': [2, 'unix'],

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
      capIsNew: true
    }],

    // Require Parens for Constructors
    // This rule is aimed at highlighting a lack of convention and increasing code clarity by
    // requiring the use of parentheses when invoking a constructor via the new keyword.
    'new-parens': 1,

    // Require or disallow an empty newline after variable declarations
    // This rule enforces a coding style where empty newlines are required after var, let, or const
    // statements to achieve a consistent coding style across the project.
    'newline-after-var': 1,

    // Newline Per Chained Method Call
    // This rule checks and reports the chained calls if there are no new lines after each call or
    // deep member access.
    'newline-per-chained-call': [1, {
      ignoreChainWithDepth: 3
    }],

    // Disallows comments after code
    // This rule will disallow comments on the same line as code.
    'no-inline-comments': 1,

    // Disallow if as the Only Statement in an else Block
    // This rule warns when an if statement's else block contains only another if statement.
    'no-lonely-if': 1,

    // Disallow mixed spaces and tabs for indentation
    // The no-mixed-spaces-and-tabs rule is aimed at flagging any lines of code that are indented
    // with a mixture of tabs and spaces.
    'no-mixed-spaces-and-tabs': 1,

    // Disallow tabs
    // Use of tabs is discouraged in favour of spaces because there is no "standard" width for a tab
    // character and many viewers/editors use their own tab width, which could cause code to be
    // misaligned and not formatted as intended/indented.
    'no-tabs': 1,

    // Disallows multiple blank lines
    // Whitespace is useful for separating logical sections of code, but excess whitespace takes up
    // more of the screen.
    'no-multiple-empty-lines': [1, {
      max: 2,
      maxEOF: 1
    }],

    // Disallow Nested Ternaries
    // The no-nested-ternary rule aims to increase the clarity and readability of code by
    // disallowing the use of nested ternary expressions.
    'no-nested-ternary': 2,

    // Disallow Spaces in Function Calls
    // While it's possible to have whitespace between the name of a function and the parentheses
    // that execute it, such patterns tend to look more like errors.
    'no-spaced-func': 1,

    // Disallow trailing spaces at the end of lines
    // Sometimes in the course of editing files, you can end up with extra whitespace at the end of
    // lines. These whitespace differences can be picked up by source control systems and flagged as
    // diffs, causing frustration for developers. While this extra whitespace causes no functional
    // issues, many code conventions require that trailing spaces be removed before checkin.
    'no-trailing-spaces': 1,

    // Disallow Dangling Underscores in Identifiers
    'no-underscore-dangle': 1,

    // Disallow conditional expressions that can be expressed with simpler constructs
    // Use || instead of ternary in default assignments
    'no-unneeded-ternary': [1, {
      defaultAssignment: false
    }],

    // Disallow whitespace before properties
    // This rule alerts for whitespace around the dot or brackets before properties of objects if
    // they are on the same line. It does not alert for whitespace when the object and property are
    // on separate lines.
    'no-whitespace-before-property': 1,

    // Enforce spaces inside of curly braces in objects
    // This rule aims to maintain consistency around the spacing inside of object literals. It also
    // applies to EcmaScript 6 destructured assignment and import/export specifiers.
    'object-curly-spacing': [1, 'always'],

    // Require Object Literal Shorthand Syntax
    // EcmaScript 6 provides a concise form for defining object literal methods and properties. This
    // syntax can make defining complex object literals much cleaner.
    'object-shorthand': [1, 'always'],

    // Require or Disallow One Variable Declaration per Scope
    // This rule is aimed at enforcing the use of one variable declaration per function (for var)
    // and multiple variable declaration per block (for let and const) scope.
    'one-var': [1, {
      var: 'always',
      let: 'never',
      const: 'never'
    }],

    // Require a newline around variable declarations
    // This rule enforces a consistent coding style where newlines are required after each var
    // declaration or just when there is a variable initialization. It ignores var declarations
    // inside for loop conditionals.
    'one-var-declaration-per-line': 1,

    // Operator Assignment Shorthand
    // This rule enforces use of the shorthand assignment operators by requiring them where
    // possible.
    'operator-assignment': [1, 'always'],

    // Operator Linebreak
    // When a statement is too long to fit on a single line, line breaks are generally inserted next
    // to the operators separating expressions. This rule is aimed at enforcing a particular
    // operator line break style.
    'operator-linebreak': [1, 'before'],

    // Enforce padding within blocks
    // This rule enforces consistent padding within blocks.
    'padded-blocks': [1, 'never'],

    // Quoting Style for Property Names
    // This rule aims to enforce use of quotes in property names.
    // Require quotes where necessary, disallow where unnecessary
    'quote-props': [1, 'as-needed'],

    // Enforce Quote Style
    // This rule is aimed at ensuring consistency of string quotes.
    quotes: [1, 'single', 'avoid-escape'],

    // Enforce spacing between rest and spread operators and their expressions
    // This rule aims to enforce consistent spacing between rest and spread operators and their
    // expressions.
    'rest-spread-spacing': [1, 'never'],

    // Enforce spacing before and after semicolons
    'semi-spacing': [1, {
      before: false,
      after: true
    }],

    // Enforce or Disallow Semicolons
    // This rule is aimed at ensuring consistent use of semicolons.
    semi: [1, 'never'],

    // Require Or Disallow Space Before Blocks
    // This rule will enforce consistency of spacing before blocks.
    'space-before-blocks': [1, 'always'],

    // Require or disallow a space before function parenthesis
    'space-before-function-paren': [1, 'never'],

    // Disallow or enforce spaces inside of parentheses
    // This rule will enforce consistency of spacing directly inside of parentheses, by disallowing
    // or requiring one or more spaces to the right of ( and to the left of ). In either case, ()
    // will still be allowed.
    'space-in-parens': [1, 'never'],

    // Require Spaces Around Infix Operators
    // This rule is aimed at ensuring there are spaces around infix operators.
    'space-infix-ops': 1,

    // Require or disallow spaces before/after unary operators
    // This rule enforces consistency regarding the spaces after words unary operators and
    // after/before nonwords unary operators.
    'space-unary-ops': [1, {
      words: true,
      nonwords: false
    }],

    // Require or disallow a whitespace beginning a comment
    // This rule will enforce consistency of spacing after the start of a comment // or /*.
    'spaced-comment': 1,

    // Enforce Usage of Spacing in Template Strings
    // This rule aims to maintain consistency around the spacing inside of template literals.
    'template-curly-spacing': 1,

    // Require IIFEs to be Wrapped
    'wrap-iife': [1, 'inside'],

    // Enforce spacing around the * in `yield*` expressions
    'yield-star-spacing': [1, 'after']
  }
}
