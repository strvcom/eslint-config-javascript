/**
 * js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {
  rules: {
    // Enforce return statements in callbacks of array's methods
    // This rule enforces usage of return statement in callbacks of array's methods.
    'array-callback-return': 1,

    // This rule enforces consistent use of trailing commas in object and array literals
    // Never allow trailing commas
    'comma-dangle': [2, 'never'],

    // Require Function Expressions to have a Name
    // If you provide the optional name for a function expression then you will get the name of the
    // function expression in the stack trace.
    // If you are tempted to create anonymous function expression, consider using arrow function
    // instead.
    'func-names': 1,

    // Disallow lexical declarations in case/default clauses
    // This rule disallows lexical declarations (let, const, function and class) in case/default
    // clauses. The reason is that the lexical declaration is visible in the entire switch block but
    // it only gets initialized when it is assigned, which will only happen if the case where it is
    // defined is reached.
    'no-case-declarations': 1,

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

    // Disallow Extra Boolean Casts
    // In contexts such as an if statement's test where the result of the expression will already be
    // coerced to a Boolean, casting to a Boolean via double negation (!!) is unnecessary.
    'no-extra-boolean-cast': 1,

    // no-extra-parens
    // This rule restricts the use of parentheses to only where they are necessary.
    //
    // @see  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/
    //       Operator_Precedence
    'no-extra-parens': 1,

    // Disallow Initializing to undefined
    // In JavaScript, a variable that is declared and not initialized to any value automatically
    // gets the value of undefined.
    'no-undef-init': 1,

    // Disallow Use of `undefined` Variable
    // In ECMAScript 3 it was possible to overwrite the value of undefined. While ECMAScript 5
    // disallows overwriting undefined, it's still possible to shadow `undefined`.
    'no-undefined': 2,

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

    // Require let or const instead of var
    // This rule is aimed at discouraging the use of var and encouraging the use of const or let
    // instead.
    'no-var': 2,

    // Require Consistent Returns
    // This rule is aimed at ensuring all return statements either specify a value or don't specify
    // a value.
    'consistent-return': 1,

    // Require Guarding for-in
    // This rule is aimed at preventing unexpected behavior that could arise from using a for in
    // loop without filtering the results in the loop.
    'guard-for-in': 1,

    // Disallow duplicate exports/imports
    // An ES6/ES2015 import can be spread over multiple lines, but this takes up unneeded
    // whitespace. This rules validates that all imports from a single module exists in a single
    // import statement.
    'no-duplicate-imports': [1, {
      includeExports: true
    }],

    // Disallow eval()
    // This rule is aimed at preventing potentially dangerous, unnecessary, and slow code by
    // disallowing the use of the eval() function.
    'no-eval': 2,

    // Disallow Implied eval()
    // This rule aims to eliminate implied eval() through the use of setTimeout(), setInterval() or
    // execScript().
    'no-implied-eval': 2,

    // Disallow Extending of Native Objects
    // In JavaScript, you can extend any object, including builtin or "native" objects. Sometimes
    // people change the behavior of these native objects in ways that break the assumptions made
    // about them in other parts of the code.
    'no-extend-native': 2,

    // Disallow unnecessary function binding
    'no-extra-bind': 2,

    // Disallow Floating Decimals
    // Float values in JavaScript contain a decimal point, and there is no requirement that the
    // decimal point be preceded or followed by a number. Although not a syntax error, this format
    // for numbers can make it difficult to distinguish between true decimal numbers and the dot
    // operator.
    'no-floating-decimal': 1,

    // Disallow the type conversion with shorter notations
    // This rule is aimed to flag shorter notations for the type conversion, then suggest a more
    // self-explanatory notation.
    'no-implicit-coercion': 1,

    // Disallow this keywords outside of classes or class-like objects
    // Under the strict mode, this keywords outside of classes or class-like objects might be
    // undefined and raise a TypeError. This rule aims to flag usage of this keywords outside of
    // classes or class-like objects.
    'no-invalid-this': 1,

    // Disallow Labeled Statements
    // While convenient in some cases, labels tend to be used only rarely and are frowned upon by
    // some as a remedial form of flow control that is more error prone and harder to understand.
    'no-labels': 2,

    // Disallow Unnecessary Nested Blocks
    // This rule aims to eliminate unnecessary and potentially confusing blocks at the top level of
    // a script or within other blocks.
    'no-lone-blocks': 2,

    // Disallow Functions in Loops
    // This error is raised to highlight a piece of code that may not work as you expect it to and
    // could also indicate a misunderstanding of how the language works.
    'no-loop-func': 1,

    // Disallow Function Constructor
    // This error is raised to highlight the use of a bad practice. By passing a string to the
    // Function constructor, you are requiring the engine to parse that string much in the way it
    // has to when you call the eval function.
    'no-new-func': 2,

    // Disallow Primitive Wrapper Instances
    // Primitive wrapper objects are, in fact, objects. That means typeof will return "object"
    // instead of "string", "number", or "boolean". The second problem comes with boolean objects.
    // Every object is truthy, that means an instance of Boolean always resolves to true even when
    // its actual value is false. This rule aims to eliminate the use of String, Number, and Boolean
    // with the `new` operator.
    'no-new-wrappers': 2,

    // Disallow new For Side Effects
    // This rule is aimed at maintaining consistency and convention by disallowing constructor calls
    // using the new keyword that do not assign the resulting object to a variable.
    'no-new': 2,

    // Disallow Assignment in return Statement
    // This rule aims to eliminate assignments from return statements.
    'no-return-assign': 2,

    // Disallow Use of the Comma Operator
    // The comma operator includes multiple expressions where only one is expected. It evaluates
    // each operand from left to right and returns the value of the last operand. However, this
    // frequently obscures side effects, and its use is often an accident.
    'no-sequences': 2,

    // Disallow unmodified conditions of loops
    // This rule finds references which are inside of loop conditions, then checks the variables of
    // those references are modified in the loop.
    'no-unmodified-loop-condition': 1,

    // Disallow unnecessary .call() and .apply()
    // This rule is aimed to flag usage of Function.prototype.call() and Function.prototype.apply()
    // that can be replaced with the normal function invocation.
    'no-useless-call': 2,

    // Disallow unncessary concatenation of strings
    // This rule aims to flag the concatenation of 2 literals when they could be combined into a
    // single literal.
    'no-useless-concat': 1,

    // No `with` Statements
    // The with statement is potentially problematic because it adds members of an object to the
    // current scope, making it impossible to tell what a variable inside the block actually refers
    // to. Additionally, the with statement cannot be used in strict mode.
    'no-with': 2,

    // Suggest using arrow functions as callbacks
    // This rule is aimed to flag usage of function expressions in an argument list.
    'prefer-arrow-callback': 1,

    // Suggest using const
    // This rule is aimed at flagging variables that are declared using let keyword, but never
    // modified after the initial assignment. This helps v8 to better optimise code at runtime.
    'prefer-const': 1,

    // Suggest using Reflect API where applicable
    // Note that it's better to use `delete`, `call()` and `.apply()` directly because they will
    // throw an exception if there's something wrong with them (especially in the case of `delete`)
    'prefer-reflect': [1, {
      exceptions: [
        'apply',
        'call',
        'delete'
      ]
    }],

    // Suggest using the spread operator instead of .apply()
    // This rule is aimed to flag usage of Function.prototype.apply() that can be replaced with the
    // spread operator.
    'prefer-spread': 1,

    // Suggest using template literals instead of string concatenation
    // This rule is aimed to flag usage of + operators with strings.
    'prefer-template': 1,

    // Require Variable Declarations to be at the top of their scope
    // This rule aims to keep all variable declarations in the leading series of statements.
    // Allowing multiple declarations helps promote maintainability.
    'vars-on-top': 1,

    // Require or disallow Yoda Conditions
    // Yoda conditions are so named because the literal value of the condition comes first while the
    // variable comes second ("red" === color).
    yoda: 2,

    // Disallow creation of dense arrays using the Array constructor
    // Use of the Array constructor to construct a new array is generally discouraged in favour of
    // array literal notation because of the single-argument pitfall.
    'no-array-constructor': 1,

    // Disallow the use of the Object constructor
    // While there are no performance differences between the two approaches, the byte savings and
    // conciseness of the object literal form is what has made it the de facto way of creating new
    // objects.
    'no-new-object': 1
  }
}
