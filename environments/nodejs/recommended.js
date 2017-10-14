/**
 * Js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

const globs = require('./globs')

module.exports = {

  extends: '../shared/recommended.js',

  env: {
    node: true,
    es6: true,
  },

  rules: {
    // Enforce `require()` on the top-level module scope
    // It's arguably harder to identify dependencies when they are deeply nested inside of functions
    // and other statements. Since require() does a synchronous load, it can cause performance
    // problems when used in other locations.
    'global-require': 'warn',

    // Disallow use of the deprecated Buffer() constructor
    // In Node.js, the behavior of the Buffer constructor is different depending on the type of its
    // argument. Passing an argument from user input to Buffer() without validating its type can
    // lead to security vulnerabilities such as remote memory disclosure and denial of service.
    'no-buffer-constructor': 2,

    // Disallow new require
    // This rule aims to eliminate use of the `new require` expression.
    'no-new-require': 'error',

    // Disallow string concatenation when using _dirname and _filename
    // This rule aims to prevent string concatenation of directory paths in Node.js to make sure
    // developers use a platform-independent way of creating paths (we feel you, Windows).
    'no-path-concat': 'error',

    // Disallow process.env
    // This rule is aimed at discouraging use of process.env to avoid global dependencies throughout
    // the project's codebase.
    //
    // Note: Env vars are a great way of managing configuration options. This rule can be safely
    // turned off for a particular file/folder where project configuration is gathered and stored in
    // custom configuration objects which you then use throughout your app, but the use of
    // process.env outside of preparing configuration data should be discouraged.
    'no-process-env': 'warn',

    // Disallow `process.exit()`
    // It's better to throw an error and allow the application to handle it appropriately. Unhandled
    // errors always exit the process, but contrary to `process.exit()` they also print a stack
    // trace.
    'no-process-exit': 'error',

    // Disallow Synchronous Methods
    // This rule is aimed at preventing synchronous methods from being called in Node.js. It looks
    // specifically for the method suffix "Sync" (as is the convention with Node.js operations).
    'no-sync': ['warn', {
      allowAtRootLevel: true,
    }],
  },

  overrides: [{
    files: globs.test,

    env: {
      mocha: true,
    },
  }, {
    files: globs.config,

    rules: {
      // Using process.env is encouraged in configuration files
      'no-process-env': 'off',
    },
  }],
}
