---
title: /isorender
project: isometric-renders
---
# /isorender

The `/isorender` command is the core of this mod. It is used

This page lists the basic subcommands and what they do.

***
### :material-console: `/isorender item`
Opens the rendering screen for the item you provide as argument (supports NBT). You can omit this argument to render the item you're currently holding.

???+ examples
    `/isorender item minecraft:diamond`

    `/isorender item minecraft:diamond_sword{Enchantments:[{id:"sharpness",lvl:10}]}`

### :material-console: `/isorender block`
Opens the rendering screen for the block you provide as argument (supports both NBT and BlockState data). You can omit this argument to render the block you're currently looking at.

???+ examples
    `/isorender block minecraft:cobblestone`

    `/isorender block minecraft:furnace[lit=true]`

    `/isorender block minecraft:furnace[facing=west]{Items:[{Slot:0b, Count: 1b, id: "minecraft:coal"}]}`

### :material-console: `/isorender entity`
Opens the rendering screen for the entity you provide as argument. You can specify an NBT tag as a second argument.

???+ examples
    `/isorender entity minecraft:blaze`

    `/isorender entity minecraft:zombie {IsBaby:1b}`

### :material-console: `/isorender area`
Takes two coordinate arguments and renders the area between those. This does currently not support either block entities renderers or entities and just renders the blocks as they are in the world.

???+ example
    `/isorender area 3 63 -120 8 66 -123`

### :material-console: `/isorender creative_tab`
This is used to render all the items or blocks contained in a creative tab. The first argument will the name of that tab, the second will be either `atlas` or `batch`

- `atlas` will render an atlas (or overview if you will) of all items in that tab
- `batch` takes another argument `blocks` or `items`, and will automagically export all blocks or items in that tab into separate images

???+ examples
    `/isorender creative_tab brewing atlas`

    `/isorender creative_tab redstone batch blocks`