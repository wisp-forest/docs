---
title: Checkbox
project: owo
---

# Checkbox

:material-xml: `#!xml <checkbox>`<br>
:material-language-java: `#!java Components.checkbox(...)`

The checkbox component represents a toggleable checkbox. It can display text alongside the checkbox.

**Parameters:**

- `text`: The text to display next to the checkbox.
- `checked`: Whether the checkbox is checked or not.
- `active`: Whether the checkbox is active or not.

**Example (Code-driven):**

```java
Components.checkbox(Text.literal("Option"), true)
    .active(false)
```

**Example (Data-driven):**

```xml
<checkbox>
    <text>Option</text>
    <checked>true</checked>
    <active>false</active>
</checkbox>
```