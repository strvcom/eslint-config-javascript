'use strict'

module.exports = {
  // Test files patterns
  test: [
    // Classic layout
    'test/**',
    // Nested test files, ie. Lerna monorepo
    '**/test/**/*.test.*',
    '**/test/**/*.spec.*',
  ],

  // Configuration files patterns
  config: [
    '**/config/**',
    '**/configuration/**',
  ],
}
