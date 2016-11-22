/**
 * js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

// These rules are fixable by ESLint and are separated so that existing projects can easily include
// this ruleset and let ESLint fix the codebase with zero human intervention. This is beneficial
// because it enforces these fixable rules on the codebase. Including the whole coding style ruleset
// into an existing project frequently leads to overwhelming amount of warnings and the developer
// then rather abandons the effort instead of fixing them.
module.exports = {

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
      after: true,
    }],

    // Require Brace Style
    // The one true brace style is one of the most common brace styles in JavaScript, in which the
    // opening curly brace of a block is placed on the same line as its corresponding statement or
    // declaration.
    'brace-style': [1, '1tbs', {
      allowSingleLine: true,
    }],

    // Enforce spacing around the * in generator functions
    // This rule enforces that the * is placed together with the `function` keyword. The reasoning
    // is that a generator function is a special type of function, therefore it should come together
    // with the `function` keyword. In contrast, it has nothing to do with the function's name,
    // which may be missing completely.
    'generator-star-spacing': [1, {
      before: false,
      after: true,
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

    // Enforces spacing around commas
    // This rule aims to enforce spacing around a comma.
    // A space must be only after comma, i.e. `var a, b`
    'comma-spacing': [1, {
      before: false,
      after: true,
    }],

    // Comma style
    // This rule is aimed at enforcing a particular comma style in JavaScript.
    // Commas should be placed at the end of line, not at the beginning
    'comma-style': [1, 'last'],

    // Disallow or enforce spaces inside of computed properties
    // This rule aims to maintain consistency around the spacing inside of computed properties.
    // No spaces allowed
    'computed-property-spacing': [1, 'never'],

    // Require file to end with single newline
    // Benefits of trailing newlines include the ability to concatenate or append to files as well
    // as output files to the terminal without interfering with shell prompts.
    'eol-last': [1, 'unix'],

    // Validate Indentation
    // This rule is aimed to enforce consistent indentation style.
    indent: [1, 2, {
      SwitchCase: 1,
    }],

    // Enforce Property Spacing
    // This rule will warn when spacing in properties does not match the specified options. In the
    // case of long lines, it is acceptable to add a new line wherever whitespace is allowed.
    'key-spacing': [1, {
      beforeColon: false,
      afterColon: true,
      mode: 'strict',
    }],

    // This rule will enforce consistency of spacing around keywords and keyword-like tokens
    'keyword-spacing': [1, {
      before: true,
      after: true,
    }],

    // Disallow mixing CRLF and LF linebreaks
    // This rule aims to ensure having consistent line endings independent of operating system.
    'linebreak-style': [2, 'unix'],

    // Require or disallow newlines around directives
    // This rule requires or disallows blank newlines around directive prologues. This rule does not
    // enforce any conventions about blank newlines between the individual directives. In addition,
    // it does not require blank newlines before directive prologues unless they are preceded by a
    // comment.
    'lines-around-directive': [1, {
      before: 'always',
      after: 'always',
    }],

    // Require Parens for Constructors
    // This rule is aimed at highlighting a lack of convention and increasing code clarity by
    // requiring the use of parentheses when invoking a constructor via the new keyword.
    'new-parens': 1,

    // Disallow Extra Boolean Casts
    // In contexts such as an if statement's test where the result of the expression will already be
    // coerced to a Boolean, casting to a Boolean via double negation (!!) is unnecessary.
    'no-extra-boolean-cast': 1,

    // Disallow unnecessary parentheses
    // This rule restricts the use of parentheses to only where they are necessary.
    // developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
    'no-extra-parens': [1, 'all', {
      nestedBinaryExpressions: false,
    }],

    // Disallow Floating Decimals
    // Float values in JavaScript contain a decimal point, and there is no requirement that the
    // decimal point be preceded or followed by a number. Although not a syntax error, this format
    // for numbers can make it difficult to distinguish between true decimal numbers and the dot
    // operator.
    'no-floating-decimal': 1,

    // Disallow the type conversion with shorter notations
    // This rule is aimed to flag shorter notations for the type conversion, then suggest a more
    // self-explanatory notation.
    'no-implicit-coercion': 1,

    // Disallow if as the Only Statement in an else Block
    // This rule warns when an if statement's else block contains only another if statement.
    'no-lonely-if': 1,

    // Disallows multiple blank lines
    // Whitespace is useful for separating logical sections of code, but excess whitespace takes up
    // more of the screen.
    'no-multiple-empty-lines': [1, {
      max: 2,
      maxEOF: 1,
    }],

    // Require or disallow spacing between function identifiers and their invocations
    // This rule disallows spaces between the function name and the opening parenthesis that calls
    // it.
    'func-call-spacing': 1,

    // Disallow trailing spaces at the end of lines
    // Sometimes in the course of editing files, you can end up with extra whitespace at the end of
    // lines. These whitespace differences can be picked up by source control systems and flagged as
    // diffs, causing frustration for developers. While this extra whitespace causes no functional
    // issues, many code conventions require that trailing spaces be removed before checkin.
    'no-trailing-spaces': 1,

    // Disallow unnecessary computed property keys on objects
    // It’s unnecessary to use computed properties when the property name is a literal.
    'no-useless-computed-key': 1,

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

    // Require a newline around variable declarations
    // This rule enforces a consistent coding style where newlines are required after each var
    // declaration or just when there is a variable initialization. It ignores var declarations
    // inside for loop conditionals.
    'one-var-declaration-per-line': 1,

    // Enforce padding within blocks
    // This rule enforces consistent padding within blocks.
    'padded-blocks': [1, 'never'],

    // Suggest using arrow functions as callbacks
    // This rule is aimed to flag usage of function expressions in an argument list.
    'prefer-arrow-callback': 1,

    // Suggest using const
    // This rule is aimed at flagging variables that are declared using let keyword, but never
    // modified after the initial assignment. This helps v8 to better optimise code at runtime.
    'prefer-const': 1,

    // Disallow parseInt() in favor of binary, octal, and hexadecimal literals
    // This rule disallows parseInt() if it is called with two arguments: a string and a radix
    // option of 2 (binary), 8 (octal), or 16 (hexadecimal).
    'prefer-numeric-literals': 1,

    // Suggest using template literals instead of string concatenation
    // This rule is aimed to flag usage of + operators with strings.
    'prefer-template': 1,

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
      after: true,
    }],

    // Enforce or Disallow Semicolons
    // This rule is aimed at ensuring consistent use of semicolons.
    semi: [1, 'never'],

    // Require Or Disallow Space Before Blocks
    // This rule will enforce consistency of spacing before blocks.
    'space-before-blocks': [1, 'always'],

    // Require or disallow a space before function parenthesis
    'space-before-function-paren': [1, {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],

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
      nonwords: false,
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
    'yield-star-spacing': [1, 'after'],

    // Require or disallow Yoda Conditions
    // Yoda conditions are so named because the literal value of the condition comes first while the
    // variable comes second ("red" === color).
    yoda: 1,
  },
}
