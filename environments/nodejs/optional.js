/**
 * Js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {

  extends: '../shared/optional.js',

  rules: {
    // Disallow Use of console
    // In general, you should use a logging library which offers more flexibility in terms of log
    // level configuration and log destinations (i.e. sending logs to external storage/monitoring
    // service), such as `debug` or `bunyan`.
    // Feel free to turn this rule off in your project-level ruleset if you are ok with logging to
    // console only.
    //
    // @see  https://www.npmjs.com/package/debug
    // @see  https://www.npmjs.com/package/bunyan
    'no-console': 1,
  },
}
