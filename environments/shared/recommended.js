/**
 * Js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {

  plugins: [
    'import',
  ],

  settings: {
    'import/extensions': [
      '.js',
      '.jsx',
      '.mjs',
    ],
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.mjs',
          '.jsx',
          '.json',
          '.node',
        ],
      },
    },
  },

  rules: {
    // Enforce return statements in callbacks of array's methods
    // This rule enforces usage of return statement in callbacks of array's methods.
    'array-callback-return': 2,

    // Enforce Return After Callback
    // This rule is aimed at ensuring that callbacks used outside of the main function block are
    // always part of or immediately preceding a return statement.
    'callback-return': [2, [
      // The following variables will be considered callbacks. More can be added as necessary.
      'cb',
      'callback',
      'next',
      'done',
    ]],

    // Require Guarding for-in
    // This rule is aimed at preventing unexpected behavior that could arise from using a for-in
    // loop without filtering the results in the loop.
    'guard-for-in': 2,

    // Enforce Callback Error Handling
    // This rule expects that when you're using the callback pattern in node you'll handle the
    // error. Matches: err, Err, error, someErr, someError, any_error, ...
    'handle-callback-err': [2, '^.*(e|E)rr(or)?'],

    // Disallow await inside of loops
    // Performing an operation on each element of an iterable is a common task. However, performing
    // an await as part of each operation is an indication that the program is not taking full
    // advantage of the parallelization benefits of async/await.
    'no-await-in-loop': 1,

    // Disallow lexical declarations in case/default clauses
    // This rule disallows lexical declarations (let, const, function and class) in case/default
    // clauses. The reason is that the lexical declaration is visible in the entire switch block but
    // it only gets initialized when it is assigned, which will only happen if the case where it is
    // defined is reached.
    'no-case-declarations': 2,

    // Disallow Assignment in Conditional Statements
    // This rule is aimed at eliminating ambiguous assignments in for, if, while, and do...while
    // conditional statements.
    'no-cond-assign': [2, 'except-parens'],

    // Disallow use of constant expressions in conditions
    // Comparing a literal expression in a condition is usually a typo or development trigger for a
    // specific behavior.
    'no-constant-condition': 2,

    // Disallow Controls Characters in Regular Expressions
    // Control characters are special, invisible characters in the ASCII range 0-31. These
    // characters are rarely used in JavaScript strings so a regular expression containing these
    // characters is most likely a mistake.
    'no-control-regex': 2,

    // Disallow debugger
    // Production code should definitely not contain debugger.
    'no-debugger': 2,

    // No duplicate arguments
    // Outside of strict mode duplicate arguments will mask the value of the first argument.
    'no-dupe-args': 2,

    // Disallow Duplicate Keys
    // Creating objects with duplicate keys in objects can cause unexpected behavior in your
    // application.
    'no-dupe-keys': 2,

    // Rule to disallow a duplicate case label
    // A switch statements with duplicate case labels is normally an indication of a programmer
    // error.
    'no-duplicate-case': 2,

    // Disallow Empty Character Classes
    // Empty character classes in regular expressions do not match anything and can result in code
    // that may not work as intended.
    'no-empty-character-class': 2,

    // Disallow Empty Block Statements
    // Empty block statements are usually an indicator of an error, or at the very least, an
    // indicator that some refactoring is likely needed.
    'no-empty': 2,

    // Disallow eval()
    // This rule is aimed at preventing potentially dangerous, unnecessary, and slow code by
    // disallowing the use of the eval() function.
    'no-eval': 2,

    // Disallow Assignment of the Exception Parameter
    // When an error is caught using a catch block, it's possible to accidentally (or purposely)
    // overwrite the reference to the error. This makes it impossible to track the error from that
    // point on.
    'no-ex-assign': 2,

    // Disallow Extending of Native Objects
    // In JavaScript, you can extend any object, including builtin or "native" objects. Sometimes
    // people change the behavior of these native objects in ways that break the assumptions made
    // about them in other parts of the code.
    'no-extend-native': 2,

    // Disallow unnecessary function binding
    'no-extra-bind': 2,

    // Disallow Unnecessary Labels
    // If a loop contains no nested loops or switches, labeling the loop is unnecessary.
    'no-extra-label': 2,

    // Disallow Extra Semicolons
    // JavaScript will more or less let you put semicolons after any statement without complaining.
    // Typos and misunderstandings about where semicolons are required can lead to extra semicolons
    // that are unnecessary.
    'no-extra-semi': 2,

    // Disallow Function Assignment
    // JavaScript functions can be written as a FunctionDeclaration `function foo() { ... }` or as a
    // FunctionExpression `var foo = function() { ... }`. While a JavaScript interpreter might
    // tolerate it, overwriting/reassigning a function written as a FunctionDeclaration is often
    // indicative of a mistake or issue.
    'no-func-assign': 2,

    // Disallow Implied eval()
    // This rule aims to eliminate implied eval() through the use of setTimeout(), setInterval() or
    // execScript().
    'no-implied-eval': 2,

    // Declarations in Program or Function Body
    // In JavaScript, prior to ES6, a function declaration is only allowed in the first level of a
    // program or the body of another function, though parsers sometimes erroneously accept them
    // elsewhere.
    // A variable declaration is permitted anywhere a statement can go, even nested deeply inside
    // other blocks. This is often undesirable due to variable hoisting, and moving declarations to
    // the root of the program or function body can increase clarity.
    'no-inner-declarations': [2, 'both'],

    // Disallow Invalid Regular Expressions
    // This rule validates string arguments passed to the RegExp constructor.
    'no-invalid-regexp': 2,

    // No irregular whitespace
    // Various whitespace characters can be inputted by programmers by mistake for example from
    // copying or keyboard shortcuts. Pressing Alt + Space on OS X adds in a non breaking space
    // character for example.
    'no-irregular-whitespace': 2,

    // Disallow Iterator (__iterator__)
    // This rule is aimed at preventing errors that may arise from using the __iterator__ property,
    // which is not implemented in several browsers.
    'no-iterator': 2,

    // Disallow Unnecessary Nested Blocks
    // This rule aims to eliminate unnecessary and potentially confusing blocks at the top level of
    // a script or within other blocks.
    'no-lone-blocks': 2,

    // Disallow Functions in Loops
    // This error is raised to highlight a piece of code that may not work as you expect it to and
    // could also indicate a misunderstanding of how the language works.
    'no-loop-func': 1,

    // Disallow certain object properties
    // Currently configured for the following (more can be added as necessary):
    // - Mocha test isolation features (skipping tests, running only certain tests)
    'no-restricted-properties': [1, {
      object: 'describe',
      property: 'only',
      message: 'Isolated test suite',
    }, {
      object: 'describe',
      property: 'skip',
      message: 'Skipped test suite',
    }, {
      object: 'it',
      property: 'only',
      message: 'Isolated test case',
    }, {
      object: 'it',
      property: 'skip',
      message: 'Skipped test case',
    }],

    // Disallow unnecessary `return await`
    // Inside an async function, return await is useless. Since the return value of an async
    // function is always wrapped in Promise.resolve, return await doesn’t actually do anything
    // except add extra time before the overarching Promise resolves or rejects. This pattern is
    // almost certainly due to programmer ignorance of the return semantics of async functions.
    'no-return-await': 1,

    // Disallow Initializing to undefined
    // In JavaScript, a variable that is declared and not initialized to any value automatically
    // gets the value of undefined.
    'no-undef-init': 2,

    // Disallow negating the left operand of relational operators
    // This rule disallows negating the left operand of Relational Operators
    // See MDN: https://goo.gl/nFA3Mk
    'no-unsafe-negation': 2,

    // Disallow Unused Variables
    // This rule is aimed at eliminating unused variables, functions and variables in parameters of
    // functions.
    'no-unused-vars': 2,

    // Disallow Early Use
    // This rule will warn when it encounters a reference to an identifier that has not been yet
    // declared (but is declared later)
    // Function declarations are exempted from the rule, so it is allowed to use a function name
    // before its declaration
    'no-use-before-define': [2, 'nofunc'],

    // Disallow new For Side Effects
    // This rule is aimed at maintaining consistency and convention by disallowing constructor calls
    // using the new keyword that do not assign the resulting object to a variable.
    'no-new': 2,

    // Disallow Function Constructor
    // This error is raised to highlight the use of a bad practice. By passing a string to the
    // Function constructor, you are requiring the engine to parse that string much in the way it
    // has to when you call the eval function.
    'no-new-func': 2,

    // Disallow the use of the Object constructor
    // While there are no performance differences between the two approaches, the byte savings and
    // conciseness of the object literal form is what has made it the de facto way of creating new
    // objects.
    'no-new-object': 1,

    // Disallow Symbol Constructor
    // This rule is aimed at preventing the accidental calling of Symbol with the `new` operator.
    'no-new-symbol': 2,

    // Disallow Primitive Wrapper Instances
    // Primitive wrapper objects are, in fact, objects. That means typeof will return "object"
    // instead of "string", "number", or "boolean". The second problem comes with boolean objects.
    // Every object is truthy, that means an instance of Boolean always resolves to true even when
    // its actual value is false. This rule aims to eliminate the use of String, Number, and Boolean
    // with the `new` operator.
    'no-new-wrappers': 2,

    // Disallow Global Object Function Calls
    // This rule is aimed at preventing the accidental calling of global objects as functions.
    'no-obj-calls': 2,

    // Disallow Spaces in Regular Expressions
    // This rule aims to eliminate errors due to multiple spaces inside of a regular expression.
    'no-regex-spaces': 2,

    // Disallow Assignment in return Statement
    // This rule aims to eliminate assignments from return statements.
    'no-return-assign': 2,

    // Disallow Script URLs
    // Using javascript: URLs is considered by some as a form of eval. Code passed in javascript:
    // URLs has to be parsed and evaluated by the browser in the same way that eval is processed.
    'no-script-url': 2,

    // Disallow Self Assignment
    // Self assignments have no effect, so probably those are an error due to incomplete
    // refactoring. Those indicate that what you should do is still remaining.
    'no-self-assign': 2,

    // Disallow Use of the Comma Operator
    // The comma operator includes multiple expressions where only one is expected. It evaluates
    // each operand from left to right and returns the value of the last operand. However, this
    // frequently obscures side effects, and its use is often an accident.
    'no-sequences': 2,

    // Disallow Sparse Arrays
    // Sparse arrays contain empty slots, most frequently due to multiple commas being used in an
    // array literal. The confusion around sparse arrays defined in this manner is enough that it's
    // recommended to avoid using them.
    'no-sparse-arrays': 2,

    // Disallow template literal placeholder syntax in regular strings
    // This rule aims to warn when a regular string contains what looks like a template literal
    // placeholder.
    'no-template-curly-in-string': 1,

    // Avoid unexpected multiline expressions
    // This particular rule aims to spot scenarios where a newline looks like it is ending a
    // statement, but is not.
    'no-unexpected-multiline': 2,

    // Disallow unmodified conditions of loops
    // This rule finds references which are inside of loop conditions, then checks the variables of
    // those references are modified in the loop.
    'no-unmodified-loop-condition': 1,

    // Disallow Unreachable Code
    // This rule is aimed at detecting unreachable code. It produces an error when a statements in a
    // block exist after a `return`, `throw`, `break`, or `continue` statement.
    'no-unreachable': 2,

    // Disallow control flow statements in finally blocks
    // JavaScript suspends the control flow statements of `try` and `catch` blocks until the
    // execution of `finally` block finishes. So, when `return`, `throw`, `break`, or `continue` is
    // used in `finally`, control flow statements inside `try` and `catch` are overwritten, which is
    // considered as unexpected behavior.
    'no-unsafe-finally': 2,

    // Disallow Unused Labels
    // Labels that are declared and not used anywhere in the code are most likely an error due to
    // incomplete refactoring.
    'no-unused-labels': 2,

    // Disallow unnecessary .call() and .apply()
    // This rule is aimed to flag usage of Function.prototype.call() and Function.prototype.apply()
    // that can be replaced with the normal function invocation.
    'no-useless-call': 2,

    // Disallow unncessary concatenation of strings
    // This rule aims to flag the concatenation of 2 literals when they could be combined into a
    // single literal.
    'no-useless-concat': 1,

    // Disallow unnecessary constructor
    // ES2015 provides a default class constructor if one is not specified. As such, it is
    // unnecessary to provide an empty constructor or one that simply delegates into its parent
    // class.
    'no-useless-constructor': 2,

    // Disallow unnecessary escape usage
    // Escaping non-special characters in strings and regular expressions doesn’t have any effects
    // on results. This rule flags escapes that can be safely removed without changing behavior.
    'no-useless-escape': 2,

    // Disallow redundant return statements
    // A `return` statement with nothing after it is redundant, and has no effect on the runtime
    // behavior of a function. This can be confusing, so it’s better to disallow these redundant
    // statements.
    'no-useless-return': 1,

    // Require let or const instead of var
    // This rule is aimed at discouraging the use of var and encouraging the use of const or let
    // instead.
    'no-var': 2,

    // Suggest using the rest parameters instead of `arguments`
    // This rule is aimed to flag usage of `arguments` variables.
    'prefer-rest-params': 2,

    // Require isNaN()
    // This rule is aimed at eliminating potential errors as the result of comparing against the
    // special value NaN.
    'use-isnan': 2,

    // Ensures that the results of typeof are compared against a valid string
    // This rule aims to prevent errors from likely typos by ensuring that when the result of a
    // typeof operation is compared against a string, that the string is a valid value.
    'valid-typeof': 2,

    // Verify calls of super() in constructors
    // This rule is aimed to flag invalid/missing super() calls.
    'constructor-super': 2,

    // Disallow modifying variables of class declarations
    // This rule is aimed to flag modifying variables of class declarations.
    'no-class-assign': 2,

    // Disallow modifying variables that are declared using `const`
    // We cannot modify variables that are declared using const keyword. It will raise a runtime
    // error.
    'no-const-assign': 2,

    // Disallow duplicate name in class members
    // If there are declarations of the same name in class members, the last declaration overwrites
    // other declarations silently. It can cause unexpected behaviors.
    'no-dupe-class-members': 2,

    // Disallow use of `this`/`super` before calling `super()` in constructors
    // In the constructor of derived classes, if `this`/`super` are used before `super()` calls, it
    // raises a reference error.
    'no-this-before-super': 2,

    // Disallow Variables Deletion
    // The delete operator will only delete the properties of objects. It cannot "delete" variables
    // or anything else. Using them on variables might lead to unexpected behavior.
    'no-delete-var': 2,

    // Disallow Labels That Are Variable Names
    // This rule aims to create clearer code by disallowing the bad practice of creating a label
    // that shares a name with a variable that is in scope.
    'no-label-var': 2,

    // Disallow Shadowing of Restricted Names
    // Value Properties of the Global Object (NaN, Infinity, undefined) as well as strict mode
    // restricted identifiers eval and arguments are considered to be restricted names in
    // JavaScript. Defining them to mean something else can have unintended consequences and confuse
    // others reading the code.
    'no-shadow-restricted-names': 2,

    // Disallow Shadowing
    // This rule aims to eliminate shadowed variable declarations.
    'no-shadow': 2,

    // Disallow Undeclared Variables
    // This rule can help you locate potential ReferenceErrors resulting from misspellings of
    // variable and parameter names, or accidental implicit globals.
    'no-undef': [2, {
      typeof: true,
    }],

    // Enforces getter/setter pairs in objects
    // It's a common mistake in JavaScript to create an object with just a setter for a property but
    // never have a corresponding getter defined for it. Without a getter, you cannot read the
    // property, so it ends up not being used.
    'accessor-pairs': 2,

    // Require Default Case in Switch Statements
    // The thinking is that it's better to always explicitly state what the default behavior should
    // be so that it's clear whether or not the developer forgot to include the default behavior by
    // mistake. This rule aims to require default case in switch statements. You may optionally
    // include a `// no default` after the last case if there is no default case.
    'default-case': 2,

    // Require === and !==
    // The reason for this is that == and != do type coercion which follows the rather obscure
    // Abstract Equality Comparison Algorithm. This rule is aimed at eliminating the type-unsafe
    // equality operators.
    //
    // @see  http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3
    eqeqeq: 2,

    // Disallow creation of dense arrays using the Array constructor
    // Use of the Array constructor to construct a new array is generally discouraged in favour of
    // array literal notation because of the single-argument pitfall.
    'no-array-constructor': 2,

    // Disallow Use of caller/callee
    // The use of arguments.caller and arguments.callee make several code optimizations impossible.
    // They have been deprecated in future versions of JavaScript and their use is forbidden in
    // ECMAScript 5 while in strict mode.
    'no-caller': 2,

    // Disallow Labeled Statements
    // This rule aims to eliminate the use of labeled statements in JavaScript. It will warn
    // whenever a labeled statement is encountered and whenever break or continue are used with a
    // label.
    'no-labels': 2,

    // Disallow empty destructuring patterns
    // This rule aims to flag any empty patterns in destructured objects and arrays.
    'no-empty-pattern': 2,

    // Disallow Case Statement Fallthrough
    // This rule is aimed at eliminating unintentional fallthrough of one case to the other.
    'no-fallthrough': 2,

    // Disallow assignment to native objects or read-only global variables
    // This rule disallows modifications to read-only global variables.
    'no-global-assign': [2, {
      exceptions: ['Promise'],
    }],

    // Disallow Octal Escapes
    // As of version 5 of the ECMAScript specification, octal escape sequences are a deprecated
    // feature and should not be used. It is recommended that Unicode escapes be used instead.
    'no-octal-escape': 2,

    // Disallow Octal Literals
    // The rule is aimed at preventing the use of a deprecated JavaScript feature, the use of octal
    // literals.
    'no-octal': 2,

    // Disallow Use of __proto__
    // __proto__ property has been deprecated as of ECMAScript 3.1 and shouldn't be used in the
    // code. Use getPrototypeOf method instead.
    'no-proto': 2,

    // Disallow Redeclaring Variables
    // This rule is aimed at eliminating variables that have multiple declarations in the same
    // scope.
    'no-redeclare': [2, {
      builtinGlobals: true,
    }],

    // Disallow Comparisons to Itself
    // This rule aims to highlight a potentially confusing and potentially pointless piece of code.
    // There are almost no situations in which you would need to compare something to itself.
    'no-self-compare': 2,

    // Restrict what can be thrown as an exception
    // This rule is aimed at maintaining consistency when throwing exception by disallowing to throw
    // literals and other expressions which cannot possibly be an Error object.
    'no-throw-literal': 2,

    // Disallow Unused Expressions
    // This rule aims to eliminate unused expressions. The value of an expression should always be
    // used, except in the case of expressions that side effect: function calls, assignments, and
    // the `new` operator.
    'no-unused-expressions': [2, {
      allowShortCircuit: true,
      allowTernary: true,
    }],

    // No `with` Statements
    // The with statement is potentially problematic because it adds members of an object to the
    // current scope, making it impossible to tell what a variable inside the block actually refers
    // to. Additionally, the with statement cannot be used in strict mode.
    'no-with': 2,

    // Suggest using the spread operator instead of .apply()
    // This rule is aimed to flag usage of Function.prototype.apply() that can be replaced with the
    // spread operator.
    'prefer-spread': 1,

    // Disallow async functions which have no await expression
    // Async functions which have no await expression may be the unintentional result of
    // refactoring.
    'require-await': 1,

    // Disallow generator functions that do not have yield
    'require-yield': 2,

    // Strict Mode
    // This rule is aimed at controlling how Use Strict Directives are used in code.
    // Require 'use strict' to be present at module-level scope
    strict: [2, 'global'],

    // Require Variable Declarations to be at the top of their scope
    // This rule aims to keep all variable declarations in the leading series of statements.
    // Allowing multiple declarations helps promote maintainability.
    'vars-on-top': 1,

    // Ensure an imported module can be resolved to a module on the local filesystem
    'import/no-unresolved': [2, {
      commonjs: true,
    }],

    // Verifies that all named imports are part of the set of named exports in the referenced module
    'import/named': 2,

    // If a default import is requested, this rule will report if there is no default export in the
    // imported module
    'import/default': 2,

    // This rule reports any imports that come after non-import statements
    'import/first': 2,

    // Enforces names exist at the time they are dereferenced, when imported as a full namespace
    'import/namespace': 2,

    // Forbid import of modules using absolute paths
    // Node.js allows the import of modules using an absolute path such as */home/xyz/file.js*. That
    // is a bad practice as it ties the code using it to your computer.
    'import/no-absolute-path': 2,

    // Reports funny business with exports, like repeated exports of names or defaults
    'import/export': 2,

    // Ensure consistent use of file extension within the import path
    'import/extensions': [1, 'never'],

    // Forbid the use of extraneous packages
    // Forbid the import of external modules that are not declared in package.json.
    'import/no-extraneous-dependencies': 2,

    // Forbid the use of mutable exports with var or let
    'import/no-mutable-exports': 2,

    // Reports use of an exported name as the locally imported name of a default export
    'import/no-named-as-default': 1,

    // Reports use of a default export as a locally named import
    'import/no-named-default': 1,

    // Reports use of an exported name as a property on the default export
    // Accessing a property that has a name that is shared by an exported name from the same module
    // is likely to be a mistake.
    'import/no-named-as-default-member': 1,
  },
}
