---
title: Markdown Syntax
project: lavender
---

**:material-progress-alert: Work-in-progress**

Lavender offers a wide range of text-formatting syntax, most of which is just standard markdown, for adding emphasis and structure as well as entirely custom elements to your guidebook entries. This system is based on [lavender-md](https://github.com/wisp-forest/lavender-md), a highly flexible & extensible markdown processing engine, which also allows you to easily add custom syntax.

This article outlines the standard syntactical constructs supported by Lavender, from standard Markdown all the way to custom oωo-ui templates


## Text Formatting

### Emphasis

Like in all standard Markdown renderers, you use 

- `*single asterisks*` for *italic text*
- `**double asterisks**` for **bold text**
- `***triple asterisks***` for ***bold and italic text*** 

Lavender intentionally does not support any of the alternative characters usually implemented by other renderers in an effort to encourage consistency

Furthermore, like in Discord for example, you can use

- `__double underscores__` for <u>underlined text</u>
- `~~double tilde~~` for ~~strikethrough text~~

### Color

To add color to a span of text, you open with `{<color here>}` and close with `{}`. The `<color here>` part can be one of two things: either one of Minecrat's text colors (like `red`) or a 6 digit `RRGGBB` hex color. Refer to the following examples:

- `{red}some red{} text`<br>
  <span style="color: #FF5555;">some red</span> text
- `{#F1C27B}a hex color with {light_purple}interspersed purple{} and{} back`<br>
  <span style="color: #F1C27B;">a hex color with <span style="color: #FF55FF;">interspersed purple</span> and</span> back

### Links

Using standard Markdown syntax, wrap some text into `[square brackets](followed by a link in parantheses)` to create a [hyperlink](https://youtu.be/dQw4w9WgXcQ). 

However, Lavender also offers specific syntax for linking to other entries or categories in the same book. To create an internal link, begin it with a caret `^` and follow with the ID of an entry or category (derived using the resource's namespace and path relative to their respective directory). Refer to these handy example:

- `[category link](^mymod:a_category)`<br>
  Links to `assets/mymod/lavender/categories/<book id>/a_category.md`
- `[entry link](^mymod:basics/an_entry)`<br>
  Links to `assets/mymod/lavender/entries/<book id>/basics/an_entry.md`

## Text Structuring

### Block Quotes

Once again referring to standard Markdown, you prefix some lines of text with `>` to turn them into a quote. You can also repeat this symbol to increase the quote nesting depth. Refer to the following examples:

=== "Input"
    ```md
    > block quote here
    >
    > very profound
    ```

=== "Rendered"
    > block quote here
    >
    > very profound

<span><!--separator--></span>

=== "Input"
    ```md
    > quote level 1
    >> now onto level 2
    > and back onto 1
    ```

=== "Rendered"
    > quote level 1
    >> now onto level 2
    >
    > and back onto 1

### Horizontal Rules

Continuing this trend, you can also insert a horizontal rule like this one

---

using `---` triple dashes. Unlike most other renderers, Lavender once again specifically does not support any alternative characters for this to encourage consistency

### Lists

Lavender supports both ordered & unordered lists which can contain any other Markdown. Like with other syntax elements that allow multple kinds of characters, you are required to use `-` dashes for unordered lists - like so:

=== "Input"
    ```md
    - an element
    - another one
        - and a nested one
            - deeper
    - and back to base
    ```

=== "Rendered"
    - an element
    - another one
        - and a nested one
            - deeper
    - and back to base

To instead create an ordered list, simply replace the dashes with the item's index - like so:

=== "Input"
    ```md
    1. an element
    2. another one
        3. and a nested one
            4. deeper
    7. and back to base
    ```

=== "Rendered"
    1. an element
    2. another one
        3. and a nested one
            4. deeper
    7. and back to base

Do note that, unlike in this demonstration using MkDocs' markdown renderer, Lavender does not renumber your elements and instead uses the index you provide verbatim