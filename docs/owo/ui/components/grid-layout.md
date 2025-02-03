---
title: Grid Layout
project: owo
---

# Grid Layout

:material-xml: `#!xml <grid-layout>`<br>
:material-language-java: `#!java Containers.grid(...)`

The grid layout component arranges its children in a grid with a specified number of rows and columns. It supports various alignment and sizing options.

**Parameters:**

- `rows` (required): The number of rows in the grid.
- `columns` (required): The number of columns in the grid.
- `padding`: The padding around the child components.
- `surface`: The background surface of the grid layout.
- `horizontal-alignment`: The horizontal alignment of the child components within each cell.
- `vertical-alignment`: The vertical alignment of the child components within each cell.
- `allow-overflow`: Whether to allow child components to overflow the bounds of the grid layout.

**Example (Code-driven):**

```java
Containers.grid(Sizing.content(), Sizing.content(), 2, 2)
    .child(Components.label(Text.literal("Cell 1")), 0, 0)
    .child(Components.label(Text.literal("Cell 2")), 0, 1)
    .child(Components.label(Text.literal("Cell 3")), 1, 0)
    .child(Components.label(Text.literal("Cell 4")), 1, 1)
    .padding(Insets.of(10))
    .surface(Surface.PANEL)
    .horizontalAlignment(HorizontalAlignment.CENTER)
    .verticalAlignment(VerticalAlignment.CENTER)
```

**Example (Data-driven):**

```xml
<grid-layout rows="2" columns="2">
    <children>
        <label>
            <text>Cell 1</text>
        </label>
        <label>
            <text>Cell 2</text>
        </label>
        <label>
            <text>Cell 3</text>
        </label>
        <label>
            <text>Cell 4</text>
        </label>
    </children>
    <padding>
        <all>10</all>
    </padding>
    <surface>
        <panel/>
    </surface>
    <horizontal-alignment>center</horizontal-alignment>
    <vertical-alignment>center</vertical-alignment>
</grid-layout>
```