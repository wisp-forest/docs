---
title: Home
project: isometric-renders
---

<!-- !!! tip ""
    **:octicons-clock-16: The Isometric Renders documentation is currently being rewritten - it is not accurate for versions >=0.3.0**

<br> -->

# Isometric Renders
To get started, check out [/isorender](slash_isorender.md) - that page contains documentation for the primary command you use to launch Isometric Renders

!!! abstract ""
    By nature, working with large images can be a very intense task for your processor to deal with. Starting at roughly 6000x6000, you may notice considerable slowdown when creating renders - especially when doing multiple at the same time. For this reason, be carefuly when starting a long batch render or exporting an animation at high resolution - your system might not like it.

## Convenience Features
 - #### Inventory-based batches

    You might want to perform batch operations like rendering an atlas or a block/item batch on sets of items that don't necessarily form a creative tab, tag or namespace. To do this, you can simply press ++ctrl+f12++ while in any inventory. You will get a preview of which items will be rendered and can choose which batch operation to start.

    ![batch operatin screen](https://cdn.discordapp.com/attachments/857970721166065674/1032051544176205944/batch-operation-screen.png){ .center-image .sized-image style="--image-width: 90%;" }

 - #### Visual area selection

    Usually when creating an area render you do not want to manually figure out the coordinates of the area's corners. Instead, you would use the keybind labelled **<span style="color: #545454;">[</span><span style="color: #00c9f1;">I</span><span style="color: #00f1c7;">S</span><span style="color: #00f195;">O</span><span style="color: #545454;">]</span> Select Area**. Pressing it once highlights and selects the first corner of your selection, pressing it again selects the second corner. You can then run `/isorender area` without any further arguments to render the area in this selection.

    To clear your area selection and make the overlay disappear, press the keybind while sneaking.
