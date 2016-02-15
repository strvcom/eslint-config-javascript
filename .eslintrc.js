'use strict'

module.exports = {
  extends: [
    './environments/nodejs/latest.js',
    './environments/nodejs/best-practices.js',
    './environments/nodejs/optional.js',
    './coding-styles/base.js'
  ],

  parserOptions: {
    ecmaVersion: 6
  },

  env: {
    node: true
  }
}
