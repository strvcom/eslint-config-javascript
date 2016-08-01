'use strict'

module.exports = {
  extends: [
    './environments/nodejs/v6.js',
    './environments/nodejs/best-practices.js',
    './environments/nodejs/optional.js',
    './coding-styles/base.js'
  ],

  parserOptions: {
    ecmaVersion: 6
  }
}
