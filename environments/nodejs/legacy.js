'use strict'

module.exports = {
  // This file configures eslint to only allow JS language syntax known to be present in legacy
  // Node.js 0.12 and older.
  extends: 'javascript/environments/nodejs/known-errors',

  env: {
    node: true
  },

  parserOptions: {
    ecmaVersion: 5
  }
}
