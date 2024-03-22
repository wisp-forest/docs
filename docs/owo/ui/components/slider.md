---
title: Slider
project: owo
---

# Slider

:material-xml: `#!xml <slider>`<br>
:material-language-java: `#!java Components.slider(...)`

The slider component represents a draggable slider for selecting a value within a range.

**Parameters:**

- `text`: The text to display alongside the slider.
- `value`: The current value of the slider.
- `active`: Whether the slider is active or not.

**Example (Code-driven):**

```java
Components.slider(0.5)
    .text(Text.literal("Volume"))
    .active(true)
```

**Example (Data-driven):**

```xml
<slider>
    <text>Volume</text>
    <value>0.5</value>
    <active>true</active>
</slider>
```