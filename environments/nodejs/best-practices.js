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

    // Enforce Return After Callback
    // This rule is aimed at ensuring that callbacks used outside of the main function block are
    // always part-of or immediately preceding a return statement.
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

    // Suggest using Reflect methods where applicable
    // This rule should be enabled per environment because not all environments might have support
    // for the Reflect API.
    'prefer-reflect': 0,

    // Disallow process.env
    // This rule is aimed at discouraging use of process.env to avoid global dependencies throughout
    // the project's codebase.
    //
    // Note: Env vars are a great way of managing configuration options. This rule can be safely
    // turned off for a particular file/folder where project configuration is gathered and stored in
    // custom configuration objects which you then use throughout your app, but the use of
    // process.env outside of preparing configuration data should be discouraged.
    'no-process-env': 1
  }
}
