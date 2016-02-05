/**
 * js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {
  extends: '../../standard/known-errors.js',

  rules: {
    // Disallow new require
    // This rule aims to eliminate use of the `new require` expression.
    'no-new-require': 2,

    // Enforce Callback Error Handling
    // This rule expects that when you're using the callback pattern in node you'll handle the
    // error. Matches: err, Err, error, someErr, someError, any_error, ...
    'handle-callback-err': [2, '^.*(e|E)rr(or)?'],

    // Disallow string concatenation when using _dirname and _filename
    // This rule aims to prevent string concatenation of directory paths in Node.js to make sure
    // developers use a platform-independent way of creating paths (we feel you, Windows).
    'no-path-concat': 2,

    // Disallow `process.exit()`
    // It's better to throw an error and allow the application to handle it appropriately. Unhandled
    // errors always exit the process, but contrary to `process.exit()` they also print a stack
    // trace.
    'no-process-exit': 2,

    // Suggest using the rest parameters instead of `arguments`
    // @TODO: Requires Node.js support
    'prefer-rest-params': 0
  }
}
