'use strict'

module.exports = {
  extends: [
    // @TODO(breaking): Bump to latest node.js ruleset on next major release
    './environments/nodejs/v6.js',
    './environments/nodejs/optional.js',
    './coding-styles/recommended.js',
  ],
}
