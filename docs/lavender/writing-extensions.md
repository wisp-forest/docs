---
title: Writing Extensions
project: lavender
---

**:material-progress-alert: Work-in-progress**


If you are writing an addon to another mod which uses Lavender, you might want to integrate the documentation for your additions into the mod's existing guidebook. In order to keep clean separation between the original mod's and your addon's resources, Lavender offers **extension books** for this purpose.


### Defining an extension

To turn your book definition into an extension, simply set the `extend` property to the ID of the original mod's book. The ID of a book is derived from the namespace in which the files are located and the path of the book definition's `.json` file relative to the `lavender/books` directory (e.g. a book defined in `assets/other-mod/lavender/books/strange_book.json` gets the ID `other-mod:strange_book`).

Once you have this property set, you add entries and categories to your book like normal - except that they now get added to the book you are extending instead of creating a new one. Naturally, this also means that you have access to all the content (namely entries and categories) defined in the original book and you can thus refer to said content in internal links.