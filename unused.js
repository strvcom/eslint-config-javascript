/**
 * Js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {
  rules: {
    // Treat var as Block Scoped
    // Unused in favour of `no-var` rule. Front-end could have some interest in this rule.
    'block-scoped-var': 0,

    // Enforce or disallow capitalization of the first letter of a comment
    // Unused, too restrictive.
    'capitalized-comments': 0,

    // Limit Cyclomatic Complexity
    // Let the developer decide if what they write expresses their intent well enough, while
    // maintaining readability.
    complexity: 0,

    // Blacklist certain identifiers
    // Unused, too restrictive.
    'id-blacklist': 0,

    // Enforce the location of arrow function bodies with implicit returns
    // Unused, too restrictive, especially in tests
    'implicit-arrow-linebreak': 0,

    // Enforce a maximum file length
    // Unused, no one cares.
    'max-lines': 0,

    // Disallow Bitwise Operators
    // Unused, too restrictive.
    'no-bitwise': 0,

    // Disallow arrow functions where they could be confused with comparisons
    // Unused, not really confusing enough.
    'no-confusing-arrow': 0,

    // Disallow Regexs That Look Like Division
    // Unused, `return /=foo/` does not really look like a division to me.
    'no-div-regex': 0,

    // Disallow Null Comparisons
    // Unused in favour of eqeqeq rule requiring all comparisons to be strict.
    'no-eq-null': 0,

    // Disallow var and Named Functions in Global Scope
    // This rule disallows var and named function declarations at the top-level script scope. This
    // does not apply to ES and CommonJS modules since they have a module scope.
    // Unused, front-end specific.
    'no-implicit-globals': 0,

    // Disallow this keywords outside of classes or class-like objects
    // Unused, too restrictive.
    'no-invalid-this': 0,

    // Disallow Use of Chained Assignment Expressions
    // Unused, seems handy.
    'no-multi-assign': 0,

    // Disallow Multiline Strings
    // Unused, seems handy. This rule should be enabled when pre-ES5 compatibility is required.
    'no-multi-str': 0,

    // Disallow Reassignment of Function Parameters
    // Unused, too restrictive. This is used frequently to "normalise" a function input and define
    // default values (if ES6's function parameter defaults are not available).
    'no-param-reassign': 0,

    // Disallow ++ and --
    // Unused, these operators are quite useful as long as whitespace is used responsibly around
    // them.
    'no-plusplus': 0,

    // Disallow certain object properties
    // Unused, no use case.
    'no-restricted-properties': 0,

    // Disallow use of the void operator
    // void is quite useful with IIFEs and for discarding return values when using return for
    // short-circuiting.
    'no-void': 0,

    // Require IDs to match a pattern
    // Unused, too restrictive.
    'id-match': 0,

    // Enforce empty lines around comments
    // Unused, too restrictive.
    'lines-around-comment': 0,

    // Enforce position of line comments
    // Unused, too restrictive.
    'line-comment-position': 0,

    // Disallow continue
    // Unused, continue seems to be quite useful.
    'no-continue': 0,

    // Disallow specific imports
    // Unused, no use case.
    'no-restricted-imports': 0,

    // Disallow specific modules
    // Unused, no use case.
    'no-restricted-modules': 0,

    // Disallow Ternary Operators
    // You kidding me? Ternaries are great!
    'no-ternary': 0,

    // Prefer destructuring from arrays and objects
    // Unused, too restrictive.
    'prefer-destructuring': 0,

    // Suggest using Reflect methods where applicable
    // Deprecated, will be removed from ESLint soon
    'prefer-reflect': 0,

    // Require JSDoc comment
    // Unused, not as useful. It's the developers' responsibility to write JSDoc comments when they
    // are relevant/needed. Many times they are not.
    'require-jsdoc': 0,

    // eslint-plugin-react

    // Enforces consistent naming for boolean props
    'react/boolean-prop-naming': 0,

    // Forbid certain elements
    'react/forbid-elements': 0,

    // Forbid certain propTypes
    // This rule checks all JSX components and verifies that no forbidden propsTypes are used.
    'react/forbid-prop-types': 0,

    // Prevent usage of setState
    'react/no-set-state': 0,

    // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
    'react/jsx-child-element-spacing': 0,

    // Prevent usage of unwrapped JSX strings
    'react/jsx-no-literals': 0,

    // Enforce props alphabetical sorting
    'react/jsx-sort-props': 0,

    // Enforce defaultProps declarations alphabetical sorting
    'react/jsx-sort-default-props': 0,

    // Limit maximum of props on a single line in JSX
    'react/jsx-max-props-per-line': 0,

    // Enforce event handler naming conventions in JSX
    'react/jsx-handler-names': 0,

    // Prevent missing displayName in a React component definition
    'react/display-name': 0,

    // Forbid certain props on Components
    'react/forbid-component-props': 0,

    // Forbid certain props on DOM Nodes
    'react/forbid-dom-props': 0,

    // Enforce React components to have a shouldComponentUpdate method
    'react/require-optimization': 0,

    // eslint-plugin-flowtype

    // Requires use of $ReadOnlyArray instead of just Array or array shorthand notation
    // Unused, not sure about its benefits and probably too restrictive.
    'no-mutable-array': 0,

    // Require to make a type alias for all union and intersection types
    // Unused, too restrictive.
    'flowtype/require-compound-type-alias': 0,

    // Enforces sorting of Object annotations.
    // This rule mirrors ESlint's sort-keys rule.
    'flowtype/sort-keys': 0,

    // Enforces a consistent naming pattern for type aliases.
    'flowtype/type-id-match': 0,


    // Disallow relative imports from parent directories
    // Unused, too restrictive, although I do agree about imorting stuff from parent modules'
    // subdirectories is generally a bad idea... ⚠️
    'import/no-relative-parent-imports': 0,

    // Disallow hooks
    // Unused, hooks are quite useful if they are used responsibly.
    'mocha/no-hooks': 0,

    // Disallow hooks for a single test or test suite
    // Unused, usually you start with the setup hooks and write the first test, and once everything
    // is working you continue writing new tests.
    'mocha/no-hooks-for-single-case': 0,

    // Disallow arrow functions as arguments to mocha functions
    // Unused, arrow functions are preferred unless you need to access `this` inside of them.
    'mocha/no-mocha-arrows': 0,

    // Disallow pending tests
    // Unused, Mocha already displays pending tests quite nicely, no need to bother the developer
    // with extra warnings from the linter.
    'mocha/no-pending-tests': 0,

    // Disallow duplicate uses of a hook at the same level inside a describe
    // Unused, too restrictive. Sometimes it is useful to have the preparaction code separated, to
    // "stand out" to make it more obvious.
    'mocha/no-sibling-hooks': 0,

    // Disallow skipped tests
    // Unused, too restrictive. Developers should be able to author and commit pending tests.
    'mocha/no-skipped-tests': 0,

    // Disallow synchronous tests
    // Unused, too restrictive.
    'mocha/no-synchronous-tests': 0,

    // Disallow top-level hooks
    // Unused, too restrictive.
    'mocha/no-top-level-hooks': 0,

    // Require using arrow functions for callbacks
    // Unused, the ESLint's original implementation works just fine for Mocha tests as well.
    'mocha/prefer-arrow-callback': 0,

    // Match suite descriptions against a pre-configured regular expression
    // Unused, too restrictive.
    'mocha/valid-suite-description': 0,

    // Match test descriptions against a pre-configured regular expression
    // Unused, too restrictive.
    'mocha/valid-test-description': 0,

    // Enforces naming conventions for class members by visibility
    // Unused, too restrictive.
    'typescript/member-naming': 0,

    // Disallow the use of type aliases
    // Unused, type aliases seem useful.
    'typescript/no-type-alias': 0,

    // Disallow import declarations which import extraneous modules
    // Unused, already implemented using eslint-plugin-import
    'node/no-extraneous-import': 0,

    // Disallow require declarations which require extraneous modules
    // Unused, already implemented using eslint-plugin-import
    'node/no-extraneous-require': 0,

    // Disallow import, export and require declarations for files that don't exist
    // Unused, already implemented using eslint-plugin-import
    'node/no-missing-import': 0,
    'node/no-missing-require': 0,

    // disallow 'bin' files that npm ignores
    // Unused, not very useful and the rule does not work well with compiled files (JSX, Babel etc.)
    'node/no-unpublished-bin': 0,

    // Disallow import/require declarations which import unpublished files/modules
    // Unused, already implemented using eslint-plugin-import
    'node/no-unpublished-import': 0,
    'node/no-unpublished-require': 0,

    // enforce either module.exports or exports
    // Unused, implemented in eslint-plugin-import/group-exports
    'node/exports-style': 0,

    // Prefer global variants of these core modules
    // Unused, already being handled by `no-shadow` rule in combination with env: node: true
    'node/prefer-global/buffer': 0,
    'node/prefer-global/console': 0,
    'node/prefer-global/process': 0,
    'node/prefer-global/text-decoder': 0,
    'node/prefer-global/text-encoder': 0,
    'node/prefer-global/url-search-params': 0,
    'node/prefer-global/url': 0,
  },
}
