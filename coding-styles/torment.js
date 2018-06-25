/**
 * Js-coding-standards
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

  extends: './base.js',

  rules: {
    // Enforce/Disallow Variable Initializations
    // You think you can get away with uninitialised variables? Hah! Forget it, dude!
    'init-declarations': 'warn',

    // Disallow Shadowing of Variables Inside of catch
    // No. Make up a new variable name.
    'no-catch-shadow': 'warn',

    // Limit Maximum Number of Statements
    // Hit this limit? You are doing it wrong -> refactor!
    'max-statements': ['warn', 15],

    // Enforce a maximum function length
    // More than 30 lines of SLOC in a function? You are doing it wrong -> refactor!
    'max-lines-per-function': ['warn', 30],

    // Disallow use of negated expressions in conditions
    'no-negated-condition': 'warn',

    // Import Sorting
    // Of course you should sort your imports! It makes your code look more like poetry!
    'sort-imports': 'warn',

    // Object key sorting
    // And of course you should sort your keys, who wants to look at such ugly, unsorted objects?
    'sort-keys': 'warn',

    // Variable Sorting
    // Sort all the things!
    'sort-vars': 'warn',

    // Disallow Magic Numbers
    // Nope. Define them as constants. Or something.
    'no-magic-numbers': 'error',

    // Require Radix Parameter
    radix: 'warn',

    // Require Regex Literals to be Wrapped
    'wrap-regex': 'warn',
  },
}
