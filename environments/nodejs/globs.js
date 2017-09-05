'use strict'

module.exports = {
  // Test files patterns
  test: [
    // Classic layout
    'test/**',
    // Lerna monorepo
    'packages/*/test/**/*.test.*',
    'packages/*/test/**/*.spec.*',
  ],

  // Configuration files patterns
  config: [
    '**/config/**',
    '**/configuration/**',
  ],
}
