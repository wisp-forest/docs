---
title: Home
project: isometric-renders
---
# Isometric Renders
To get started, check out [/isorender](slash_isorender.md) for some general information on how to use this mod

***

!!! caution "Basic Safety Information"
    Working with large images is pretty processing intensive, meaning that resolutions **over 8192x8192** have considerable potential to be very laggy and sometimes cause your game to crash depending on how much ram you have. Just basic renders at these, or even higher resolutions should be fine, batch rendering is however very concerning and not officially supported because of that. Batch renders at 4096x4096 should still be fine on somewhat OK hardware, don't come complain though if it makes you lag *hard*.

    **TLDR:** Don't do batch renders over 2048x2048 unless you feel adventurous or know your hardware can take it

## Convenience Features
##### Inventory-based batches
You might want to perform batch operations like rendering blocks, items or atlases on sets of items that are not necessarily a creative tab. To do this, you can simply use the following hotkeys while in any inventory.

 - ++shift+f12++ to render an atlas of all items in that inventory
 - ++ctrl+f12++ to perform a batch render of all blocks in that inventory
 - ++alt+f12++ to perform a batch render of all items in that inventory

##### Visual area selection
To speed up the process of creating an area render and to see visually what's going on, you can use the keybind called `[ISO] Select Area`. It will let you select the two corners of the area you want to render. You can then use `/isorender area` without further arguments to render that selection. To clear your selection, use the keybind while sneaking.
