# ESLint integrations with your IDE/editors

To make the whole developer experience more pleasant and convenient, it is important to configure your code editor of choice integrate with ESLint. The following can be achieved with most editors:

- Show errors/warnings inline with your code, as you type/on save
- Fix some issues immediately after saving the file so you do not have to do it manually

Letting your editor to fix some issues will increase your productivity and code quality dramatically.

## Atom

Install the following packages:

- [linter][atom-linter]
- [linter-eslint][atom-linter-eslint]

For the _linter_ package, these settings are recommended:

- [x] Lint as you type
- [x] Do not lint files ignored by VCS

For the _linter-eslint_ package, these settings are recommended:

- [x] Disable when no ESLint config is found
- [x] Disable when no eslintrc file in PATH
- [x] Fix errors on save 👈

## Visual Studio Code

Install the following packages:

- [eslint][vscode-eslint]

Put the following configuration options into your _settings.json_ file:

- `"eslint.autoFixOnSave": true`

[atom-linter]: https://atom.io/packages/linter
[atom-linter-eslint]: https://atom.io/packages/linter-eslint
[vscode-eslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
