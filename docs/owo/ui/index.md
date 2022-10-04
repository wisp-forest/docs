---
title: owo-ui
project: owo
---

!!! tip "Work-in-progress"
    The owo-ui documentation is still being written and not quite complete yet. In places where an article here is still missing, you can always refer to the JavaDoc present throughout the library - it explains most things in detail

:octicons-tag-24: 0.8.0

owo-ui is a declarative UI framework that helps with building dynamic screens quickly and easily. It strives to be highly embeddable, performant and, most of all, super easy to use. We provide the following major features:

- [x] **A simple Component tree**

    Every part of your UI is represented as one or multiple Components, which you compose in a simple tree structure - just like modern web tech

- [x] **Low-code UI design**

    You can choose to describe your layout in code or alternatively in a custom format implemented through standard XML. When using the XML-based approach, you essentially get hotswapping for free - when in dev-mode the file is reloaded every time you open the screen, making for blazingly fast iteration times

- [x] **A great developer experience**

    We strive to keep every part of the framework documented and provide an interactive tutorial ([owo-ui-academy](academy.md)) which teaches you the basics. While developing, you can easily debug your UI using the always-available component inspector, which works quite similarly to the "Inspect element" tool in modern browsers

- [x] **Robust Layout Engines**

    You rarely need to hardcode the position or size of a component - everything is computed dynamically to match current layout and available screen space

- [x] **Easy Animations**

    Even the most functional of screens can use a little animation now and then - owo-ui got you covered. Animating the size or position of a component over time is as simple as calling a single function