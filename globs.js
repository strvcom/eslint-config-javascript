'use strict'

module.exports = {
  // Test files patterns
  test: [
    'test/**',
    '**/*.test.*',
    '**/*.spec.*',
  ],

  // Configuration files patterns
  config: [
    '**/config/**',
    '**/configuration/**',
  ],

  javascripts: [
    '*.js',
    '.*.js',
  ],

  esmodules: [
    '*.mjs',
    '.*.mjs',
  ],
}
