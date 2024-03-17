# Strict Mode in ECMAScript 🔒

The ECMAScript 5 spec introduced a strict mode that prohibited the use of syntaxes that are anti-patterns.

Official spec: https://tc39.es/ecma262/multipage/strict-mode-of-ecmascript.html

## List of prohibited statements

1. [Create a function by `Function Definition` in an `if` conditions & loops](./01-function-declaration-in-if-statement-and-loops.js)
2. [`this` is not a reference to global scope](./02-this-is-not-reference-to-global-scope.js)
3. [Assign value for undeclared variables](./03-assign-value-for-undeclared-variables.js)
4. [Removing local variable and built-in props](./04-removing-local-variable-and-built-in-props.js)
5. [Using `arguments.callee` is prohibited](./05-using-arguments-callee.js)
6. [Using `with` statement is prohibited](./06-using-with-statement.js)
7. [Duplicate parameter name](./07-duplicated-parameter-names.js)
8. [Operation with old octal numbers syntax](./08-operation-with-octal-numbers.js)
9. [Setting properties for primitives values](./09-setting-properties-for-primitives-values.js)
10. [Reserved words cannot be a variable name](./10-reserved-words-cannot-be-variable-name.js)

## Supported new things, which throws exception before ECMAScript 5

0. [Support duplicated properties names](./00-support-duplicated-properties-names.js)
