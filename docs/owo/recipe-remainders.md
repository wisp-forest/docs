---
title: Recipe Remainders
project: owo
---

This feature allows for recipe specific Remainders within a specific Recipe. Minecraft has an internal Remainder system, but the downside to such is it is global for all recipes 

Let's start with normal recipe you might make within your mod:

```json title="test_recipe.json"
{
  "type": "minecraft:crafting_shaped",
  "key": {
    "#": {
      "item": "minecraft:stick"
    },
    "X": {
      "item": "minecraft:sand"
    }
  },
  "pattern": [
    "XXX",
    "X#X",
    "XXX"
  ],
  "result": {
    "item": "minecraft:bedrock"
  }
}
```

To start, all remainders must be put within the `"owo:remainders"` JSON Object. Then such is as simple as declaring the identifier of the given target item first and then declaring the remainder item as either an identifier or as a Son Object with following Parameters:

| Parameter | Description |
| --- | --- |
| `item` | The Identifier of the given item being returned |
| `count` | The amount of the given item to be returned |

```json title="test_recipe.json"
{
  ...
  "owo:remainders": {
    "minecraft:sand": "minecraft:sand",
    "minecraft:stick": {
      "item": "minecraft:stick",
      "count": 64
    }
  }
  ...
}
```

Now our recipe will have remainders for each stick and sand item found within the recipe during Remainders check.