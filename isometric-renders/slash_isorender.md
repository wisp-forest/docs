# /isorender

The `/isorender` command sits at the very core of Isometric Renders. It is your primary interface for launching all rendering operations and is also used to enter [Unsafe Mode](home.md#unsafe-mode).

## Single Render Operations

### `/isorender item`
Render the given item, including NBT. If the item is omitted, render the player's current item instead

```mcfunction
# render your current item
/isorender item 

# render a diamond
/isorender item minecraft:diamond 

# render an enchanted diamond sword
/isorender item minecraft:diamond_sword{Enchantments:[{id:"sharpness",lvl:10}]}
```

### `/isorender block`
Render the given block, including NBT and block state data. If the block is omitted, render whichever block the player is currently looking at

::: info
The water in waterlogged block will not be visible in a block render. If you do want a render of that, simply do a single-block area render (as explained below) instead
:::

```mcfunction
# render the block you're looking at
/isorender block

# render cobblestone
/isorender block minecraft:cobblestone

# render a burning furnace with coal inside it
/isorender block minecraft:furnace[lit=true]{Items:[{Slot:0b, Count: 1b, id: "minecraft:coal"}]}
```

### `/isorender entity`
Render the given entity, including NBT as an optional second argument. If the entity is omitted, render whichever entity the player is currently looking at

```mcfunction
# render the entity you're looking at
/isorender entity

# render a blaze
/isorender entity minecraft:blaze

# render a baby zombie
/isorender entity minecraft:zombie {IsBaby:1b}
```

### `/isorender area`
Render the area of the world between the two given block coordinate triples. If coordinates are omitted, render the current [Area Selection](home.md#visual-area-selection) instead.

```mcfunction
# render the current area selection
/isorender area

# render the area between the given coodinate triples
/isorender area 3 63 -120 8 66 -123`
```

### `/isorender tooltip`
Render the given item's tooltip, including NBT. If the item is omitted, render the tooltip of the player's current item instead

```mcfunction
# render the tooltip of your current item
/isorender tooltip 

# render the tooltip of a netherite pickaxe enchanted with efficiency 5
/isorender tooltip minecraft:netherite_pickaxe{Enchantments:[{id:"efficiency",lvl:5}]}
```


## Batch Render Operations

All batch render commands first select some set of items and end with a **render task argument**. This can be one of three things:

 - `atlas`, which renders an atlas (or overview if you will) of the item set
 - `batch items`, which renders each item in the set individually
 - `batch blocks`, which renders the corresponding block of each item in the set individually

### `/isorender creative_tab`

Select all items from the given creative inventory tab

```mcfunction
# render an atlas of all items in the brewing creative tab
/isorender creative_tab brewing atlas

# render each block in the redstone creative tab individually
/isorender creative_tab redstone batch blocks
```

### `/isorender tag`

Select all items from the given item tag

```mcfunction
# render an atlas of all iron ores
/isorender tag #minecraft:iron_ores atlas

# render each anvil state individually
/isorender tag #minecraft:anvil batch blocks
```

### `/isorender namespace`

Select all items from the given namespace

```mcfunction
# render an atlas of every single item in minecraft
/isorender namespace minecraft atlas

# render each block in minecraft individually
/isorender namespace minecraft batch blocks
```