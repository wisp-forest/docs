---
title: /isorender
project: isometric-renders
---

!!! tip ""
    **:octicons-clock-16: The Isometric Renders documentation is currently being rewritten - it is not accurate for versions >=0.3.0**

<br>

# /isorender

The `/isorender` command sits at the very core of Isometric Renders. It is your primary interface for launching all rendering operations and is also used to enter [Unsafe Mode](home.md#unsafe-mode).

***

## Single Render Operations

### :octicons-command-palette-16: `/isorender item`
Render the given item, including NBT. If the item is omitted, render the player's current item instead

!!! examples
    ```mcfunction
    # render your current item
    /isorender item 

    # render a diamond
    /isorender item minecraft:diamond 

    # render an enchanted diamond sword
    /isorender item minecraft:diamond_sword{Enchantments:[{id:"sharpness",lvl:10}]}
    ```

### :octicons-command-palette-16: `/isorender block`
Render the given block, including NBT and block state data. If the block is omitted, render whichever block the player is currently looking at

!!! examples
    ```mcfunction
    # render the block you're looking at
    /isorender block

    # render cobblestone
    /isorender block minecraft:cobblestone

    # render a burning furnace with coal inside it
    /isorender block minecraft:furnace[lit=true]{Items:[{Slot:0b, Count: 1b, id: "minecraft:coal"}]}
    ```

### :octicons-command-palette-16: `/isorender entity`
Render the given entity, including NBT as an optional second argument. If the entity is omitted, render whichever entity the player is currently looking at

!!! examples
    ```mcfunction
    # render the entity you're looking at
    /isorender entity

    # render a blaze
    /isorender entity minecraft:blaze

    # render a baby zombie
    /isorender entity minecraft:zombie {IsBaby:1b}
    ```

### :octicons-command-palette-16: `/isorender area`
Render the area of the world between the two given block coordinate triples. If coordinates are omitted, render the current [Area Selection](home.md#visual-area-selection) instead.

!!! examples
    ```mcfunction
    # render the current area selection
    /isorender area

    # render the area between the given coodinate triples
    /isorender area 3 63 -120 8 66 -123`
    ```
   
## Batch Render Operations

All batch render commands first select some set of items and end with a **render task argument**. This can be one of three things:

 - `atlas`, which renders an atlas (or overview if you will) of the item set
 - `batch items`, which renders each item in the set individually
 - `batch blocks`, which renders the corresponding block of each item in the set individually

### :octicons-command-palette-16: `/isorender creative_tab`

Select all items from the given creative inventory tab

!!! examples
    ```mcfunction
    # render an atlas of all items in the brewing creative tab
    /isorender creative_tab brewing atlas

    # render each block in the redstone creative tab individually
    /isorender creative_tab redstone batch blocks
    ```

### :octicons-command-palette-16: `/isorender tag`

Select all items from the given item tag

!!! examples
    ```mcfunction
    # render an atlas of all iron ores
    /isorender tag #minecraft:iron_ores atlas

    # render each anvil state individually
    /isorender tag #minecraft:anvil batch blocks
    ```

### :octicons-command-palette-16: `/isorender namespace`

Select all items from the given namespace

!!! examples
    ```mcfunction
    # render an atlas of every single item in minecraft
    /isorender namespace minecraft atlas

    # render each block in minecraft individually
    /isorender namespace minecraft batch blocks
    ```