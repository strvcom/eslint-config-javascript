/**
 * js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {
  'rules': {
    // Enforce/Disallow Variable Initializations
    // Unused, too restrictive. On frequent occasions, you need to declare a property uninitialised and
    // give it value later.
    'init-declarations': 0,

    // Disallow Shadowing of Variables Inside of catch
    // In IE 8 and earlier, the catch clause parameter can overwrite the value of a variable in the
    // outer scope, if that variable has the same name as the catch clause parameter.
    // Unused, front-end specific. Should be moved to appropriate front-end config as soon as it
    // exists.
    'no-catch-shadow': 0,

    // Treat var as Block Scoped
    // Unused in favour of `no-var` rule. Front-end could have some interest in this rule.
    'block-scoped-var': 0,

    // Disallow Use of Alert
    // Unused, front-end specific. Should be moved to appropriate front-end config as soon as it
    // exists.
    'no-alert': 0,

    // Disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': 0,

    // Disallow Regexs That Look Like Division
    // Unused, `return /=foo/` does not really look like a division to me.
    'no-div-regex': 0,

    // Disallow Null Comparisons
    // Unused in favour of eqeqeq rule requiring all comparisons to be strict.
    'no-eq-null': 0,

    // Disallow Iterator (__iterator__)
    // Unused, front-end specific. Should be moved to appropriate front-end config as soon as it
    // exists.
    'no-iterator': 0,

    // Disallow Multiline Strings
    // Unused, seems handy. This rule should be enabled when pre-ES5 compatibility is required.
    'no-multi-str': 0,

    // Disallow Reassignment of Function Parameters
    // Unused, too restrictive. This is used frequently to "normalise" a function input and define
    // default values (if ES6's function parameter defaults are not available).
    'no-param-reassign': 0,

    // Disallow Script URLs
    // Using javascript: URLs is considered by some as a form of eval. Code passed in javascript: URLs
    // has to be parsed and evaluated by the browser in the same way that eval is processed.
    // Unused, front-end specific. Should be moved to appropriate front-end config as soon as it
    // exists.
    'no-script-url': 0,

    // Limit Maximum Number of Statements
    // Unused, too restrictive.
    'max-statements': 0,

    // Disallow ++ and --
    // Unused, these operators are quite useful as long as whitespace is used responsibly around them.
    'no-plusplus': 0,

    // Require IDs to match a pattern
    // Unused, too restrictive.
    'id-match': 0,

    // Enforce JSX Quote Style
    // Unused, front-end specific. Should be moved to appropriate front-end config as soon as it
    // exists.
    'jsx-quotes': 0,

    // Enforce empty lines around comments
    // Unused, too restrictive.
    'lines-around-comment': 0,

    // Disallow continue
    // Unused, continue seems to be quite useful.
    'no-continue': 0,

    // Disallow use of negated expressions in conditions
    // Unused, too restrictive.
    'no-negated-condition': 0,

    // Disallow certain syntax
    // Unused, no use case.
    'no-restricted-syntax': 0,

    // Disallow Ternary Operators
    // You kidding me? Ternaries are great!
    'no-ternary': 0,

    // Variable Sorting
    // Unused, too restrictive.
    'sort-vars': 0,

    // Disallow Magic Numbers
    // Unused, too restrictive. It was flagging i.e. `array.indexOf('a') !== -1` (is 'a' in this array?)
    // as errors. Also, status code checks in HTTP responses were being reported as issues.
    // While I generally like the idea, current implementation simply won't fly well.
    'no-magic-numbers': 0
  }
}
