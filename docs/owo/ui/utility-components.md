---
title: Utility Components
project: owo
---

**:material-progress-alert: Work-in-progress**

Besides the obvious essentials like buttons, labels and basic layouts, owo-ui also offers a range of utility components that solve problems commonly encountered during UI design.


### Scroll Container
:material-xml: `#!xml <scroll direction="vertical|​horizontal">` <br>
:material-language-java: `#!java Containers.verticalScroll(...)` | `#!java Containers.horizontalScroll(...)`

The scroll container is flexible solution to making anything scrollable. It's a parent component that accepts a single child and provides it infinite space on the scrollable axis. When scrolled, it relocates its children according to the current scroll offset instead of only shifting their rendering positions - it does not however cause any state updates to be emitted.

### Draggable Container
:material-xml: `#!xml <drag>` <br>
:material-language-java: `#!java Containers.draggable(...)`

When you want a component to be movable on screen (just like an application window), you can use the draggable container. It wraps its single child and adds an extra bit of space (dubbed the "forehead") above, which can be grabbed with the mouse to move the entire component on screen.

### Collapsible Container
:material-xml: `#!xml <collapsible expanded="true|false">` <br>
:material-language-java: `#!java Containers.collapsible(...)`

The collapsible container is an extension of a flow layout that allows collapsible its children out of sight. It displays an arrow hinting at the fact it can be expanded as well as a title describing its content. Other than that, it behaves like a standard flow layout.

