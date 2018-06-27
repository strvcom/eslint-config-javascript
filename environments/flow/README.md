# Flow

These configuration files are suitable to lint Flow type annotations.

## Configurations

### @strv/environments/flow/recommended

Basic ruleset for Flow. Main focus is on consistent way to write type annotations.

### In combination with React

If you are using Flow with React to [validate props](https://flow.org/en/docs/react/components/#toc-class-components) consider adding this rule to your `.eslintrc.js` config:

```js
// Enforces sorting of Object annotations.
// This rule mirrors ESlint's sort-keys rule.
'flowtype/sort-keys': ['warn', 'asc', { caseSensitive: false }]
```
