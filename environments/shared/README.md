# Standard rules

These rules are meant to be shared across all environments. They only provide JavaScript safety rules - no coding style rules are defined here.

> Generally you should not need to extend from these files as they are automatically included in their respective environment-level configurations.

There are three safety levels:

- **known-errors**: Violation of these rules can be considered a bug and should be fixed immediately
- **best-practices**: These provide additional safety by restricting some language features or programming patterns, although they might occasionally trigger a false-positive for valid language uses
- **optional**: These help developers notice some inconsistencies or minor issues in the code
