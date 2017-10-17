/**
 * Js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2017 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {

  extends: [
    './v15.js',
  ],

  // Configures the react plugin to treat some rules with regard to this specific React.js version
  settings: {
    react: {
      version: '16',
    },
  },
}
