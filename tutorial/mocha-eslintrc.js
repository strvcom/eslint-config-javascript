'use strict'

// Put this file to the *test/* directory where your Mocha tests are located.
module.exports = {
  env: {
    mocha: true
  },
  rules: {
    'prefer-arrow-callback': 0,
    'func-names': 0,
    // Account for main describe() block, nested describe() block and one it() block
    'max-nested-callbacks': [1, 7]
  }
}
