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
    // Disallow Assignment in Conditional Statements
    // This rule is aimed at eliminating ambiguous assignments in for, if, while, and do...while
    // conditional statements.
    'no-cond-assign': [2, 'except-parens'],

    // Disallow use of constant expressions in conditions
    // Comparing a literal expression in a condition is usually a typo or development trigger for a
    // specific behavior.
    'no-constant-condition': 2,

    // Disallow Controls Characters in Regular Expressions
    // Control characters are special, invisible characters in the ASCII range 0-31. These characters
    // are rarely used in JavaScript strings so a regular expression containing these characters is
    // most likely a mistake.
    'no-control-regex': 2,

    // Disallow debugger
    // Production code should definitely not contain debugger, as it will cause the browser / Node to
    // stop executing code.
    'no-debugger': 2,

    // No duplicate arguments
    // Outside of strict mode duplicate arguments will mask the value of the first argument.
    'no-dupe-args': 2,

    // Disallow Duplicate Keys
    // Creating objects with duplicate keys in objects can cause unexpected behavior in your
    // application.
    'no-dupe-keys': 2,

    // Rule to disallow a duplicate case label
    // A switch statements with duplicate case labels is normally an indication of a programmer error.
    'no-duplicate-case': 2,

    // Disallow Empty Character Classes
    // Empty character classes in regular expressions do not match anything and can result in code
    // that may not work as intended.
    'no-empty-character-class': 2,

    // Disallow Empty Block Statements
    // Empty block statements are usually an indicator of an error, or at the very least, an indicator
    // that some refactoring is likely needed
    'no-empty': 2,

    // Disallow Assignment of the Exception Parameter
    // When an error is caught using a catch block, it's possible to accidentally (or purposely)
    // overwrite the reference to the error. This makes it impossible to track the error from that
    // point on.
    'no-ex-assign': 2,

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

    // Disallow negated left operand of `in` operator
    'no-negated-in-lhs': 2,

    // Disallow Global Object Function Calls
    // This rule is aimed at preventing the accidental calling of global objects as functions.
    'no-obj-calls': 2,

    // Disallow Spaces in Regular Expressions
    // This rule aims to eliminate errors due to multiple spaces inside of a regular expression.
    'no-regex-spaces': 2,

    // Disallow Sparse Arrays
    // Sparse arrays contain empty slots, most frequently due to multiple commas being used in an
    // array literal. The confusion around sparse arrays defined in this manner is enough that it's
    // recommended to avoid using them.
    'no-sparse-arrays': 2,

    // Avoid unexpected multiline expressions
    // This particular rule aims to spot scenarios where a newline looks like it is ending a
    // statement, but is not.
    'no-unexpected-multiline': 2,

    // Disallow Unreachable Code
    // This rule is aimed at detecting unreachable code. It produces an error when a statements in a
    // block exist after a `return`, `throw`, `break`, or `continue` statement.
    'no-unreachable': 2,

    // Require isNaN()
    // This rule is aimed at eliminating potential errors as the result of comparing against the
    // special value NaN.
    'use-isnan': 2,

    // Ensures that the results of typeof are compared against a valid string
    // This rule aims to prevent errors from likely typos by ensuring that when the result of a typeof
    // operation is compared against a string, that the string is a valid value.
    'valid-typeof': 2,

    // Verify calls of super() in constructors
    // This rule is aimed to flag invalid/missing super() calls.
    'constructor-super': 2,

    // Disallow modifying variables of class declarations
    // This rule is aimed to flag modifying variables of class declarations.
    'no-class-assign': 2,

    // Disallow modifying variables that are declared using `const`
    // We cannot modify variables that are declared using const keyword. It will raise a runtime error.
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
    // The delete operator will only delete the properties of objects. It cannot "delete" variables or
    // anything else. Using them on variables might lead to unexpected behavior.
    'no-delete-var': 2,

    // Disallow Labels That Are Variable Names
    // This rule aims to create clearer code by disallowing the bad practice of creating a label that
    // shares a name with a variable that is in scope.
    'no-label-var': 2,

    // Disallow Shadowing of Restricted Names
    // Value Properties of the Global Object (NaN, Infinity, undefined) as well as strict mode
    // restricted identifiers eval and arguments are considered to be restricted names in JavaScript.
    // Defining them to mean something else can have unintended consequences and confuse others reading
    // the code.
    'no-shadow-restricted-names': 2,

    // Disallow Shadowing
    // This rule aims to eliminate shadowed variable declarations.
    'no-shadow': 2,

    // Disallow Undeclared Variables
    // This rule can help you locate potential ReferenceErrors resulting from misspellings of variable
    // and parameter names, or accidental implicit globals.
    'no-undef': [2, {
      typeof: true
    }],

    // Enforces getter/setter pairs in objects
    // It's a common mistake in JavaScript to create an object with just a setter for a property but
    // never have a corresponding getter defined for it. Without a getter, you cannot read the
    // property, so it ends up not being used.
    'accessor-pairs': 2,

    // Require Default Case in Switch Statements
    // The thinking is that it's better to always explicitly state what the default behavior should be
    // so that it's clear whether or not the developer forgot to include the default behavior by
    // mistake. This rule aims to require default case in switch statements. You may optionally include
    // a `// no default` after the last case if there is no default case.
    'default-case': 2,

    // Require === and !==
    // The reason for this is that == and != do type coercion which follows the rather obscure Abstract
    // Equality Comparison Algorithm. This rule is aimed at eliminating the type-unsafe equality
    // operators.
    //
    // @see  http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3
    'eqeqeq': 2,

    // Disallow Use of caller/callee
    // The use of arguments.caller and arguments.callee make several code optimizations impossible.
    // They have been deprecated in future versions of JavaScript and their use is forbidden in
    // ECMAScript 5 while in strict mode.
    'no-caller': 2,

    // No empty labels
    // This error occurs when a label is used to mark a statement that is not an iteration or switch.
    'no-empty-label': 2,

    // Disallow empty destructuring patterns
    // This rule aims to flag any empty patterns in destructured objects and arrays.
    'no-empty-pattern': 2,

    // Disallow Case Statement Fallthrough
    // This rule is aimed at eliminating unintentional fallthrough of one case to the other.
    'no-fallthrough': 2,

    // Disallow Reassignment of Native Objects
    // Reports an error when they encounter an attempt to assign a value to built-in native object.
    'no-native-reassign': 2,

    // Disallow Octal Escapes
    // As of version 5 of the ECMAScript specification, octal escape sequences are a deprecated feature
    // and should not be used. It is recommended that Unicode escapes be used instead.
    'no-octal-escape': 2,

    // Disallow Octal Literals
    // The rule is aimed at preventing the use of a deprecated JavaScript feature, the use of octal
    // literals.
    'no-octal': 2,

    // Disallow Use of __proto__
    // __proto__ property has been deprecated as of ECMAScript 3.1 and shouldn't be used in the code.
    // Use getPrototypeOf method instead.
    'no-proto': 2,

    // Disallow Redeclaring Variables
    // This rule is aimed at eliminating variables that have multiple declarations in the same scope.
    'no-redeclare': [2, {
      builtinGlobals: true
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
    // used, except in the case of expressions that side effect: function calls, assignments, and the
    // `new` operator.
    'no-unused-expressions': [2, {
      allowShortCircuit: true,
      allowTernary: true
    }],

    // Disallow generator functions that do not have yield
    'require-yield': 2
  }
}
