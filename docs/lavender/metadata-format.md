---
title: Metadata Format
project: lavender
---

**:material-progress-alert: Work-in-progress**

All properties marked <span style="color: #00FFCA;">in green</span> are required

## Entries

The following properties are all applicable to entries - that is, you can declare them in the frontmatter:

| Property                                   | Description                                                                                                                                                                                                                                         |
|--------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <span style="color: #00FFCA;">title</span> | The title of this entry, to be displayed in the entry index and at top of the first page                                                                                                                                                            |
| icon                                       | The ID of an item to use as this entry's icon in the index (currently does not support NBT)                                                                                                                                                         |
| category                                   | The ID (relative to `.../entries/<book id>/`) of a category in which this entry should appear                                                                                                                                                       |
| associated_items                           | A list of items IDs which should link to this entry in their tooltip and, if the respective item is a block item, when looking at said block while holding the book                                                                                 |
| required_advancements                      | A list of advancement IDs which the player must have completed before they can view this entry. If `display_completion` is `true` in the book definition, a progress bar will indicate to the player how many entries they have unlocked/left to go |
| secret                                     | If this entry is locked due to a missing advancement, don't show it to the player at all instead of simply displaying it as locked                                                                                                                  |

## Categories

The following properties are all applicable to categories:

| Property                                   | Description                                                                                                                                  |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| <span style="color: #00FFCA;">title</span> | The title of this category, to be displayed at the top of its landing page                                                                   |
| <span style="color: #00FFCA;">icon</span>  | The ID of an item to use as this category's icon in the index (currently does not support NBT)                                               |
| secret                                     | If all entries in this category are currently locked or invisible to the player, don't show it all instead of simply displaying it as locked |

