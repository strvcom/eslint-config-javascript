/**
 * js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {
  // This file configures eslint to only allow JS language syntax known to be present in legacy
  // Node.js 0.12 and older.
  extends: 'javascript/environments/nodejs/known-errors',

  env: {
    node: true
  }
}
