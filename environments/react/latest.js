/**
 * js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {
  extends: './known-errors.js',

  env: {
    es6: true
  },

  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {
    'operator-linebreak': 0,
    'require-jsdoc': 0,
  },

  plugins: [
    'react'
  ],

  // Configures the react plugin to treat some rules with regard to this specific React.js version
  settings: {
    react: {
      version: '15.0'
    }
  }
}
