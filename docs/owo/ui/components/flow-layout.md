---
title: Flow Layout
project: owo
---

# Flow Layout

:material-xml: `#!xml <flow-layout>`<br>
:material-language-java: `#!java Containers.verticalFlow(...)` | `#!java Containers.horizontalFlow(...)`

The flow layout component arranges its children in a vertical or horizontal flow. It supports various alignment and sizing options.

**Parameters:**

- `direction` (required): The direction of the flow layout (`vertical`, `horizontal`, or `ltr-text-flow`).
- `gap`: The gap between child components in pixels.
- `padding`: The padding around the child components.
- `surface`: The background surface of the flow layout.
- `horizontal-alignment`: The horizontal alignment of the child components.
- `vertical-alignment`: The vertical alignment of the child components.
- `allow-overflow`: Whether to allow child components to overflow the bounds of the flow layout.

**Example (Code-driven):**

```java
Containers.verticalFlow(Sizing.fill(100), Sizing.content())
    .child(Components.label(Text.literal("Item 1")))
    .child(Components.label(Text.literal("Item 2")))
    .gap(10)
    .padding(Insets.of(20))
    .surface(Surface.PANEL)
    .horizontalAlignment(HorizontalAlignment.CENTER)
    .verticalAlignment(VerticalAlignment.CENTER)
```

**Example (Data-driven):**

```xml
<flow-layout direction="vertical">
    <children>
        <label>
            <text>Item 1</text>
        </label>
        <label>
            <text>Item 2</text>
        </label>
    </children>
    <gap>10</gap>
    <padding>
        <all>20</all>
    </padding>
    <surface>
        <panel/>
    </surface>
    <horizontal-alignment>center</horizontal-alignment>
    <vertical-alignment>center</vertical-alignment>
</flow-layout>
```