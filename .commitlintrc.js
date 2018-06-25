'use strict'

module.exports = {
  extends: [
    '@commitlint/config-conventional',
  ],

  rules: {
    'scope-enum': [2, 'always', [
      'rule',
      'plugin',
      'eslint',
      'core',
    ]],

    'body-leading-blank': [2, 'always'],
  },
}
