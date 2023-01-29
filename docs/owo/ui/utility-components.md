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

### Overlay Container
:material-language-java: `#!java Containers.overlay(...)`

The overlay container does exactly what it sounds like - display its child as an overlay over its entire parent. This is primarily intended for dialog-like pop-ups, in which case you'd want to add the overlay as a child directly to the root component. 

By default, the overlay closes when clicked outside the bounding box of its content - you can configure this behavior with `closeOnClick(...)`

### Dropdown Component
:material-xml: `#!xml <dropdown>` <br>
:material-language-java: `#!java Components.dropdown(...)`

The dropdown component is a generic dropdown pane as usually associated with context menus. It natively supports nesting and provides the static `openContextMenu(..)` utility function for the most common use-case. 

Just like any other component, you add entries by calling the respective functions like `.divider()` and `.checkbox(...)`, which append minimal interactive components to the internal layout maintained by the dropdown.