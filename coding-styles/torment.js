/**
 * js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

// You are crazy and you know it. You take pride in it. These rules will take eslint to the next
// level of strictness and you will feel its presence in every keystroke. You will fear what it
// throws at you next and you will revel in that fear.
//
// You have been warned.
module.exports = {
  extends: 'javascript/coding-styles/base',

  rules: {
    // Enforce/Disallow Variable Initializations
    // You think you can get away with uninitialised variables? Hah! Forget it, dude!
    'init-declarations': 1,

    // Disallow Shadowing of Variables Inside of catch
    // No. Make up a new variable name.
    'no-catch-shadow': 1,

    // Limit Maximum Number of Statements
    // Hit this limit? You are doing it wrong -> refactor!
    'max-statements': [1, 15],

    // Disallow use of negated expressions in conditions
    'no-negated-condition': 1,

    // Import Sorting
    // Of course you should sort your imports! It makes your code look more like poetry!
    'sort-imports': 1,

    // Variable Sorting
    // Sort all the things!
    'sort-vars': 1,

    // Disallow Magic Numbers
    // Nope. Define them as constants. Or something.
    'no-magic-numbers': 2,

    // Require Radix Parameter
    'radix': 1,

    // Require Regex Literals to be Wrapped
    'wrap-regex': 1
  }
}
