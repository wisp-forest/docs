---
title: Scroll Container
project: owo
---

# Scroll Container

:material-xml: `#!xml <scroll>`<br>
:material-language-java: `#!java Containers.verticalScroll(...)` | `#!java Containers.horizontalScroll(...)`

The scroll container component creates a scrollable area for its child components. It supports vertical and horizontal scrolling, customizable scrollbars, and various sizing and alignment options.

**Parameters:**

- `direction` (required): The direction of the scroll container (`vertical` or `horizontal`).
- `scrollbar-thiccness`: The thickness of the scrollbar in pixels.
- `fixed-scrollbar-length`: The fixed length of the scrollbar in pixels.
- `scrollbar-color`: The color of the scrollbar.
- `scrollbar`: The scrollbar renderer to use for custom scrollbar styles.
- `padding`: The padding around the child components.
- `surface`: The background surface of the scroll container.
- `horizontal-alignment`: The horizontal alignment of the child components.
- `vertical-alignment`: The vertical alignment of the child components.
- `allow-overflow`: Whether to allow child components to overflow the bounds of the scroll container.

**Example (Code-driven):**

```java
Containers.verticalScroll(Sizing.content(), Sizing.fill(15), Containers.verticalFlow(Sizing.content(), Sizing.content())
    .child(Components.label(Text.literal("Item 1")))
    .child(Components.label(Text.literal("Item 2")))
    .child(Components.label(Text.literal("Item 2.1")))
    .child(Components.label(Text.literal("Item 2.2")))
    .child(Components.label(Text.literal("Item 2.3")))
    .child(Components.label(Text.literal("Item 2.4")))
    .child(Components.label(Text.literal("Item 3"))))
    .scrollbarThiccness(4)
    .scrollbar(ScrollContainer.Scrollbar.vanilla())
    .padding(Insets.of(10))
    .surface(Surface.PANEL)
```

**Example (Data-driven):**

```xml
<scroll direction="vertical">
    <!-- Any component as child. We recommend a flow layout-->
    <flow-layout direction="vertical">
        <children>
            <label>
                <text>Item 1</text>
            </label>
            <label>
                <text>Item 2</text>
            </label>
            <label>
                <text>Item 3</text>
            </label>
        </children>
        <sizing>
            <vertical method="fill">20</vertical>
            <horizontal method="fill">25</horizontal>
        </sizing>
    </flow-layout>
    <scrollbar-thiccness>10</scrollbar-thiccness>
    <scrollbar-color>#ff0000</scrollbar-color>
    <padding>
        <all>10</all>
    </padding>
    <surface>
        <panel/>
    </surface>
    <sizing>
        <vertical method="fill">50</vertical>
        <horizontal method="fill">50</horizontal>
    </sizing>
</scroll>
```