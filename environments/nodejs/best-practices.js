/**
 * js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {
  // These rules represent best practices for the Node.js community
  extends: '../../standard/best-practices.js',

  rules: {
    // Strict Mode
    // This rule is aimed at controlling how Use Strict Directives are used in code.
    // Require 'use strict' to be present at module-level scope
    strict: [2, 'global'],

    'callback-return': [2, [
      // The following variables will be considered callbacks. More can be added as necessary.
      'cb',
      'callback',
      'next',
      'done'
    ]],

    // Enforce `require()` on the top-level module scope
    // It's arguably harder to identify dependencies when they are deeply nested inside of functions
    // and other statements. Since require() does a synchronous load, it can cause performance
    // problems when used in other locations.
    'global-require': 1,

    // Disallow Synchronous Methods
    // This rule is aimed at preventing synchronous methods from being called in Node.js. It looks
    // specifically for the method suffix "Sync" (as is the convention with Node.js operations).
    'no-sync': 1,

    // Require let or const instead of var
    // This rule is aimed at discouraging the use of var and encouraging the use of const or let
    // instead.
    'no-var': 2,

    // Suggest using arrow functions as callbacks
    // This rule is aimed to flag usage of function expressions in an argument list.
    'prefer-arrow-callback': 1,

    // Suggest using const
    // This rule is aimed at flagging variables that are declared using let keyword, but never
    // modified after the initial assignment. This helps v8 to better optimise code at runtime.
    'prefer-const': 1,

    // Suggest using Reflect methods where applicable
    // Reflection API is still unsupported in Node.js (as of v5.5)
    'prefer-reflect': 0,

    // Suggest using the spread operator instead of .apply()
    // This rule is aimed to flag usage of Function.prototype.apply() that can be replaced with the
    // spread operator.
    'prefer-spread': 1,

    // Suggest using template literals instead of string concatenation
    // This rule is aimed to flag usage of + operators with strings.
    'prefer-template': 1,

    // Disallow process.env
    // This rule is aimed at discouraging use of process.env to avoid global dependencies throughout
    // the project's codebase.
    //
    // Note: Env vars are a great way of managing configuration options. This rule can be safely turned
    // off for a particular file/folder where project configuration is gathered and stored in custom
    // configuration objects which you then use throughout your app, but the use of process.env outside
    // of preparing configuration data should be discouraged.
    'no-process-env': 1
  }
}
