---
title: Label
project: owo
---

# Label

:material-xml: `#!xml <label>`<br>
:material-language-java: `#!java Components.label(...)`

The label component is used to display text on the screen. It supports various text alignment options and can be styled with different colors and shadow effects.

**Parameters:**

- `text` (required): The text to display in the label.
- `max-width`: The maximum width of the label in pixels.
- `line-height`: The line height of the text in pixels.
- `color`: The color of the text.
- `shadow`: Whether to apply a shadow effect to the text.
- `vertical-text-alignment`: The vertical alignment of the text within the label.
- `horizontal-text-alignment`: The horizontal alignment of the text within the label.

**Example (Code-driven):**

```java
Components.label(Text.literal("Hello, World!"))
    .color(Color.ofRgb(0xffffff))
    .shadow(true)
    .horizontalTextAlignment(HorizontalAlignment.CENTER)
    .verticalTextAlignment(VerticalAlignment.CENTER)
```

**Example (Data-driven):**

```xml
<label>
    <text>Hello, World!</text>
    <color>#ffffff</color>
    <shadow>true</shadow>
    <horizontal-text-alignment>center</horizontal-text-alignment>
    <vertical-text-alignment>center</vertical-text-alignment>
</label>
```