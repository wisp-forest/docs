---
title: Button
project: owo
---

# Button

:material-xml: `#!xml <button>`<br>
:material-language-java: `#!java Components.button(...)`

The button component represents a clickable button. It can display text and respond to click events.

**Parameters:**

- `text` (required): The text to display on the button.
- `active`: Whether the button is active or not.
- `renderer`: The button renderer to use for custom button styles.

**Example (Code-driven):**

```java
Components.button(Text.literal("Click me!"), button -> {
    // Handle button click event
})
```

**Example (Data-driven):**

```xml
<button>
    <text>Click me!</text>
    <active>true</active>
</button>
```